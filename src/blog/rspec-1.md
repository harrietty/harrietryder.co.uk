---
title: 'How does RSpec work? Part 1: Blocks and Contexts'
date: 2019-02-16
tags: [code, howto, technical, tutorial, ruby, rspec]
description: When I'm learning a new language, or trying to learn it more deeply, I love reimplementing common libraries. In this post, I take a look at RSpec, a library whose workings appear to make no sense, in an attempt to get to grips with Metaprogramming in Ruby!
---

![](rubies.jpg)

When I'm learning a language, one of the things I most enjoy doing is repimplementing popular libraries. When I first learned JavaScript, I reimplemented a bunch of methods from the <a href="https://lodash.com/docs" target="_blank">Lodash</a> library, learning about functions as first class citizens, memoization, scope and closure in the process. Later, I reimplemented the <a href="https://expressjs.com/" target="_blank">Express</a> framework (see my <a href="https://medium.com/@harrietty/reimplementing-express-part-1-1c82d8fe5e01" target="_blank">blogpost</a> on the process).

When I started learning Ruby, it was on the job, not at a bootcamp, so I didn't have great instruction. I struggled for ages to find challenges which would allow me to really practice some of the more advanced and interesting language features.

One challenge I started, and abandoned quite quickly, was reimplementing the [Rspec](http://rspec.info/) testing framework. It was too overwhelming a challenge at the time, for someone who wasn't familiar with the Ruby Object Model, metaprogramming or even how you were supposed to structure projects in Ruby.

Now, a year later, I'm coming back to the project from scratch, and documenting what I'm learning. I'm using the <a href="https://pragprog.com/book/ppmetr2/metaprogramming-ruby-2" target="_blank">Metaprogramming Ruby 2</a> book as well as <a href="https://www.poodr.com/" target="_blank">Object Oriented Design in Ruby</a> to guide me.

### Let's begin!

Let's begin with a block of code that should look familiar if you've used RSpec (or indeed any testing library):

```ruby
RSpec.describe 'The function add' do
  context 'When a given two numbers' do
    it 'sums the numbers' do
      expect(add(40, 2)).to eq(42)
    end
  end
end
```

A few things were obvious to me about this code:

- The `RSpec` class has a class method of `describe` which received a string and a block

- If I run this code from the console, I expect to see some output which tells me whether the output of the `add` function was indeed equal to 42

- Whatever the return value of `expect` is, has a method called `to`

The rest was a mystery.

Where did the `it` and `context` methods come from? If I try and call `it` outside of a `describe` I get an error `undefined method 'it' for main:Object (NoMethodError)`. Same with `expect` and `eq`.

How does the `expect(add(40, 2)).to eq(42)` line work?

These were all questions I had. To begin to answer these questions, I learned about an essential feature of the Ruby language: execution contexts.

### Execution contexts

An execution context is the environment in which a piece of code runs, within a program. It encompasses what variables and state are available. For example, in the below block of code, when we try to run the method `it` it's not available in the execution context where we try to run it. We get an error `undefined method 'it' for main:Object` because Ruby is looking on an object called Object for the `it` method, and it doesn't exist.

```ruby
class FooSpec
  def self.it(message)
    puts message
  end
end

it 'does something'
```

However, if we execute the method `it` inside the class `FooSpec`, we DO have access to it!

```ruby
class FooSpec
  def self.it(message)
    puts message
  end

  it 'does something'
end
```

Inside the class `FooSpec`, the context the code is running in is the context of the class `FooSpec`. This means that methods called inside this context will be searched for on the class `FooSpec`. Since `it` is a class method of `FooSpec`, our code works!

### class_eval

Somewhat related to this concept of classes is the handy method `class_eval`.

`class_eval` is a method available on a class, which allows you to execute code in the context of the class in question. For example, we can so something similar to what we did before:

```ruby
class FooSpec
  def self.it(message)
    puts message
  end
end

FooSpec.class_eval do
  it 'does something'
end
```

The code in the block we pass to `class_eval` is evaluated in the context of `FooSpec`, meaning it will look for methods defined on the object `FooSpec` and thus is able to execute the `it` method.

The utility of `class_eval` is often demonstrated as a way to "open up" classes after they have been defined and change or add methods to them. For example:

```ruby
class Person
  def greet
    puts 'Hello'
  end
end

Person.class_eval do
  def goodbye
    puts 'Farewell'
  end
end

p = Person.new
p.greet # 'Hello'
p.goodbye # 'Farewell'
```

Here we are "opening up" a class, as it were, and running more code as though we were writing that code in the class when we initially created it. This is pretty cool because you might need to dynamically add extra instance methods to a class at runtime, or update a class based on the state of your program.

As a result, we see that 2 methods are defined as instance methods. Therefore when we create a new instance of the Person class, both these methods are available on that instance.

We could also create new class methods using `class_eval` if we wanted:

```ruby
class FooSpec
  def self.it(message)
    puts message
  end
end

FooSpec.class_eval do
  def self.foo
    puts 'foo'
  end
end

FooSpec.foo
```

### Running a block in a different context

So, back to the original problem: how is `it` available inside a `describe` block? Just to simplify things for a moment, let's forget about the optional `context` block:

```ruby
RSpec.describe 'The function add' do
  it 'sums the numbers' do
    expect(add(40, 2)).to eq(42)
  end
end
```

Well, what's happening is that the block which is passed to `describe` must be being evaluated in a context which *does* have the `it` method available. The implementation of `describe` could look something like this:

```ruby
class FooSpec
  def self.describe(message, &block)
    puts message
    FooSpec.class_eval &block
  end

  def self.it(message, &block)
    puts message
    puts 'PASS!'
  end
end
```

After printing the description message for the block, the block passed to `describe` is evaluated in the context of the FooSpec class, which is great, because when the method `it` is called inside the block, this means that Ruby will search for this method on FooSpec instead of the main Object and will find the method.

At the moment the `it` method only prints the description of the test and then "PASS!" so the next stage would be to figure out how the expectation ought to work.

But I'll leave that for another time 👻
