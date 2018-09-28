---
title: Learning my second programming language
date: 2018-01-18
tags: [learn-to-code, programming, python, javascript, learning]
---

### Beginning with JavaScript

When I first started programming, I had no idea what to learn first, why one language would be preferable over another, or even why there *were* so many in the first place.

I'd previously learned HTML and CSS, plus a bit of JavaScript. All three are essential if you want to make a website look like anything, or do anything. And then I got serious about learning to code and assumed that all the other languages I hadn't learned yet (Ruby, Python, PHP, C#, Java...) would also be essential for various things that I just hadn't discovered yet. I really thought that there would come a day when I needed to know ALL THE LANGUAGES.

So I dabbled in bits of everything I could get my hands on, learning how to do loops with 1,392 slightly different syntaxes, but no deep knowledge of anything. When I eventually clocked onto the fact that it didn't actually matter which programming language you learned, and that I wasn't going to get anywhere unless I picked one and learned it deeply, things sped up a bit.

I picked JavaScript because it's what I'd used the most already in building websites, and also because I was hoping to go to a certain [Coding Bootcamp](https://northcoders.com/) in Manchester which taught a JavaScript tech stack. I've since spent the last 2 years working in and teaching JavaScript so I've got to the point where I feel like I know it pretty deeply, although there's always surprises lurking around the corner. For example, only the other day did I discover that you can do `process.on('unhandledRejection', handler)` to track down and handle any errors thrown silently within your program. Literally never heard of it before, but totally would have been really useful LOADS of times.

### Onto Python...

![python](python.jpg)

Anyway, I decided about a month ago to learn (properly learn) my second programming language and I picked Python. Actually this was kind of an accident because the following chain of events happened:

It was Christmas --> I wanted to work on a side project --> Decide to create a sentiment analyser for Slack --> bought a natual language processing course on Udemy --> It told me to do a prerequisite machine learning course --> that course told me to do a prerequisite statistics course --> The prerequisite statistics course was in Python --> Needed to learn Python

By that point I was 10 callbacks deep into learning tangents and the learning of Python could not be achieved in an afternoon. I decided to discard the other 10 things on my stack and focus solely on Python. I don't like doing something if I'm not going to do it properly, and if I rushed the Python then I was pretty sure the rest was going to be 20 times harder. If there's one thing I've learned from teaching complete beginners how to build full stack web applications, it's that nothing solid can be built on shaky fundamentals.

![shaky foundations](shaky.jpg)

### Being a beginner again

So it was worth spending the time on Python, and to be honest, I loved it. **Being a beginner in something again was humbling**. My approach was to work through as many [Codewars katas](https://www.codewars.com) as I could, with TDD. I was like a fish flailing around on the shore of my keyboard trying to import one file into another with Python, a task that I could do with my eyes closed in Node. Everything has to be in a module... why can't I import a file from a higher up directory? What the heck does `__init__.py` do? It's an empty file, yet.... somehow it helped the situation. Please tell me I don't have to literally type my project's dependencies into a text file and remember to make sure it's always up to date? Where has `.reduce` gone and why does nobody use it?

I felt like if I sat down with someone who knew what they were doing for 10 minutes I'd be in a much better place, but all I had was Google and half the time I wasn't even sure what my question was. But I kept on working through katas, aiming for language fluency even if I didn't yet have a grasp of the higher level stuff like project structure and dependency management.

Once I was feeling more confident with the language (after 30+ hours of practice, I'd say) I decided to focus on doing a few more exotic fundamentals, such as:

- Making HTTP requests
- Building a REST API
- Reading and writing to the filesystem
- Object Oriented Python
- Exploring some popular third party libraries
- Exploring the standard libraries
- Recursion
- Scraping web pages

Learning how to do all of these things felt awkward and unfamiliar at first, but after doing them and seeing how very similar they all were, fundamentally, to JavaScript, I felt quite releived. It was clear to see that although the syntax is different and the way certain libraries do things is different, the fundamentals are the same. A HTTP request is a HTTP request however you look at it. A webpage is a tree of Nodes whatever way you turn it. Which is why we always tell anyone learning to code to just pick a language - any language - and run with it for a while and get good before thinking about picking up a second.

Next, I decided to start exploring a library called [Peewee](http://docs.peewee-orm.com/en/latest/) that would allow me to interact with a database, namely PostgreSQL. I was used to working with PostgreSQL so this was no problem either. The harder thing was deciding on a project to build to really practice my new skills. I'd originally been inspired by the idea of a Sentiment Analyser, but that was still beyond my capabilities, so I ended up making a CRUD Reading List app that I didn't really care about, but at least it was something that would give me lots of practice.

### Taking it further

Although I can now get a fair bit done in Python, I don't feel comfortable saying I 'can code in Python'. At what point *do* you feel comfortable saying that? I can't remember when I felt like a JavaScript developer for the first time, but I guess it just slowly crept up on me that that's what I was.

Perhaps I'll feel like I can code in Python when I ship something real in Python for the first time (whenever that might be), or perhaps if I find myself in the position of explaining something to someone else and realising I actually do know what I'm talking about.

But for now I'm happy to know that picking up a second language was fun, and I am hoping to find opportunities to use the language in the "real world" soon.
