---
title: 'How does RSpec work? Part 2:'
date: 2019-02-16
tags: [code, howto, technical, tutorial, ruby, rspec]
description: In my quest to understand the mysterious workings of RSpec, I begin reimplementing it from scratch, documenting my learnings along the way. Join me in part 2 for more magic!
---

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

Now it's time to look at how the `it` method should actually work. A block called within the `it` method needs to be able to access the method `expect` and also `eq` so I'll have to make sure the block passed to `it` is executed within the right context, something I talked about in my <a href="/blog/rspec-1/" target="_blank">previous blog post</a>.

But I'll also have to take a look at the return value of `expect`.