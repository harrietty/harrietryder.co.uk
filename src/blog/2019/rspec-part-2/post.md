---
title: "How does RSpec work? Part 2: Constants and Exceptions"
date: 2019-02-19
tags: [code, howto, technical, tutorial, ruby, rspec]
description: In my quest to understand the mysterious workings of RSpec, I begin reimplementing it from scratch, documenting my learnings along the way. Join me in part 2 for more magic!
category: fundamentals
technical: true
---

![](./img/rubies2.jpg)

In <a href="/blog/rspec-1/" target="_blank">Part 1</a> of this series I began looking at how RSpec might be implemented, such that a block of code such as the below would print out a pass/fail statement to the console:

```ruby
RSpec.describe 'The function add' do
  context 'When a given two numbers' do
    it 'sums the numbers' do
      expect(add(40, 2)).to eq(42)
    end
  end
end
```

I have been implementing my own version of RSpec, called FooSpec, which currently prints the descriptions for the tests, but does little else:

```ruby
class FooSpec
  def self.describe(message, &block)
    puts message
    FooSpec.class_eval &block
  end

  def self.context(message, &block)
    puts message
    FooSpec.class_eval &block
  end

  def self.it(message, &block)
    puts message
    puts 'PASS!'
  end
end
```

Now it's time to look at how the `it` method should actually work. A block passed to the `it` method needs to be able to access the method `expect` and also `eq` so I'll have to make sure this block is executed within the right context, something I talked about in my <a href="/blog/2019/rspec-part-1/" target="_blank">previous blog post</a>.

But I'll also have to take a look at the return value of `expect`.

Here are a few things I learned when I was implementing these steps.

### Constants and Constant Paths

In Ruby, anything that begins with a capital letter, including the names of classes and modules, is a constant. This means that what it refers to shouldn't be changed. You _can_ change its reference but you get a warning.

```ruby
Foo = 'bar'
Foo = 'cat'

# (irb):2: warning: already initialized constant Foo
# (irb):1: warning: previous definition of Foo was here
```

You can nest classes and constants within other classes, and when you do that, you cannot simply access these nested classes/constants from "the outside":

```ruby
class Foo
  A = 'cat'

  class Bar
    B = 'foo'
    initialize(val)
      @val = val
    end
  end
end

puts A # uninitialized constant A (NameError)
Bar.new # uninitialized constant Bar (NameError)
```

To access nested constants, use their Path, which is denoted with two colons:

```ruby
puts Foo::Bar::B # 'foo'

puts Foo::A # 'cat'
```

Often Modules are used as namespaces, to keep a collection of constants together under one roof, and stop them polluting the global namespace. (Modules are designed for grouping functionality, whilst classes are designed to be instantiated). For example, if you wanted to create a constant called `Number` as part of your library, this could potentially conflict with a constant defined somewhere else as it's a pretty common word. So you'd probably **namespace** it inside an appropriately named module:

```ruby
module MyNumberModule
  class Number
    ## methods etc.
  end
end
```

### Raise/Rescue vs Throw/Catch

Coming from JavaScript I instinctively wrote a throw/catch statement in Ruby in an attempt to raise an error, but it didn't work exactly as planned! Of course, I soon realised my mistake. To create an error in Ruby you should `raise` an Exception. However, Ruby _does_ have a throw/catch mechanism too, and this should be used when you want to exit out of deeply nested logic early, for example out of a loop inside a loop. You can `throw` inside the loop, halting execution, and `catch` outside to continue control flow.

```ruby
catch :my_num do
  10.times do |i|
    puts i
    15.times do |j|
      puts j
      if j > 4
        throw :my_num
      end
    end
  end
end

# more code...
```

The catch block is given a symbol, and when you throw this symbol, execution stops and the catch block will "catch" you, allowing you to safely move on to the next part of the program. It's like the break statement in JavaScript except break only lets you escape from a single loop, and wouldn't work if you were nested within 2.

### Defining your own exceptions

You can define your own named exceptions, which is better than raising a generic Exception, because when you rescue from it, you know you're only rescuing from the error **you** raised, and not something else which might have gone wrong elsewhere, which you would genuinely want to be alerted to.

To create an Exception namespaced within a class/module:

```ruby
class FooSpec
  class FailedTestCase < Exception
  end
end
```

In this case my `FailedTestCase` inherits from the `Exception` class so it will have the same behaviour and methods, just a different class name.

### Updating FooSpec

In the end, I extended the `it` method to evaluate the block passed to it in the context of a class called `TestCase`.

```ruby
class FooSpec
  def self.describe(description, &block)
    puts description
    FooSpec.class_eval &block
  end

  def self.context(description, &block)
    puts description
    FooSpec.class_eval &block
  end

  def self.it(description, &block)
    puts description
    begin
      TestCase.class_eval &block
      puts 'PASS'
    rescue FailedTestCase => e
      puts 'FAIL'
    end
  end

  class TestCase
    # more methods...
  end
end
```

I actually decided to namespace `TestCase` inside the `FooSpec` class, but above I didn't need to reference it with `FooSpec::TestCase` because when I referenced it I was inside the `FooSpec` class so Ruby already knew to look inside that class for the `TestCase` constant.

So what does the `TestCase` class do? Well, we're gonna be executing the code `expect(add(40, 2)).to eq(42)` inside this class, so we would want to see the `expect` method and the `eq` method defined in here.

My thinking was that `expect` should take a value, and return an instance of a new type of class. This class has to have a `to` method, and the `to` method will be passed the return value of the `eq` method.

At some point, I'm expecting an exception to be raised since I'm attempting to rescue from it within the `it` method. Depending on whether an exception is raised or not, I determine whether the test passed or failed.

The implementation is still quite basic at this stage, but it's probably a bit too much to post inline here. If you want to take a look, you can see the full code <a href="https://github.com/harrietty/FooSpec/commit/890bd37fdb7fd1ada46f5ed8fec8708b63c5ee48" target="_blank">here</a>.

Come back for part 3 where I'll be adding more equality matchers!
