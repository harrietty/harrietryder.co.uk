---
title: 8 things I learned during Advent of Code 2016
date: 2017-01-26
tags: [coding, careers, learning]
frontimage: myface.jpg
description: In which I reflect on what I learned trying to complete Advent of Code for the first time.
category: learning
technical: false
language: EN
---

<a href="http://adventofcode.com/" target="_blank" rel="noopener noreferrer">Advent of Code</a> has been running for a couple of years now. It's a festive collection of small programming problems, "small" being their terminology not mine! It works really nicely because the problem is released each day, and rather than having to code in an online editor and submit your code, you solve the problem in your own environment in whatever way you want. The functions you have to implement are designed to solve problems you could generally never do in your head or on paper (although every now and then you are tempted to try). Then you run their input through your function and it comes out with some ridiculous number like 439423094, and you verify you've got it working by dropping that result into a field for them to test. Super simple, tonnes of freedom, and an excellent reddit community who get really stuck into it every year.

Having said that - it can get pretty hard, and is probably not recommended for beginners. At least not unless you're prepared to feed a pretty demotivated after about day 4!

Anyway, here's a few things I learned during the challenge.

**1. I could definitely be a cryptographer.**

I solved day 5's challenge of deciphering a password with npm's "crypto" package and a massive loop. So hacker, much MI5.

**2. Testing actually works**

The likelihood of my answers to be incorrect was directly correlated with the amount of code I wrote all at once without stopping to test any of it. Of course I already knew that testing works, but here was just some more proof of it.

**3. All that stuff about keeping functions small and reusable also actually works**

We are forever hammering home to our students that functions should be as small and as reusable as possible. If they have more than 7 lines of code and more than 3 parameters you should have warning bells going off in your head. In Advent of Code, having smaller functions is extremely helpful because the challenges often involve lots of data manipulation which gets confusing to do all at once, and then you get onto part 2 and they ask you to do the same thing but in a slightly different way. Cue redoing the entire solution, OR, if you're smart, just changing the order you call your sensibly small, reusable functions.

**4. Checksums**

Checksums are small pieces of data which validate some other piece of data. A classic example of a checksum is with credit cards. A number is obtained by running the credit card number through an algorithm (Luhn's formula is a popular one) and the number is applied to the beginning or end of the card. It's not actually part of the credit card number or account number, it's just used to verify that the credit card number is actually valid. That's how websites etc. can tell you whether the card number you entered is valid before they even make the request to the bank. So now that's a thing I now know about.

**5. You can't solve a problem if you don't understand a problem**

... and if you do, it will be pure fluke. It sounds like common sense, but there were plenty of times I was too eager to get onto writing code so I made assumptions about the problem that weren't correct. If I had spent longer working through the example and reading the description I wouldn't have wasted time coding an incorrect solution. Sometimes it feels like you won't fully understand the problem until you start coding and seeing where the code takes you: this is a complete fallacy. You do not think in code. You think in natural language. Writing code never helps you understand the problem, only thinking and reasoning about the problem does.

**6. I'm better at this than last year**

This year I got twice as far through as last year before they got too hard and I gave up. I didn't want to give up but by the point they started taking me over 2 hours I realised I just didn't have time any more. However, I was chuffed to have got further than I had done previously.

**7. I'll be better than this next year**

So I'm not a coding genius yet (some people on the leaderboards solve the problems in like, 7 minutes. How is that even possible? I can't even read the description and open my text editor in 7 minutes!) But next year I'll be better than I was this year and so on and so on. And that's what matters.

**8. JavaScript has a limit on the size string it can store**

Who knew? Well, it does. Well actually that' not true. Your computer's memory has a limit on the size string it can store and JavaScript uses the memory so it will get stuck and crash if it runs out. Like when the call stack size gets exceeded. A quick Google suggests that the max length of a string would be around 2^27. Which is about 134 million characters. So don't bother trying to store a string any longer than that. I've warned you.
