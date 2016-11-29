---
author: Calvin Bui
comments: true
layout: post
slug: wordpress-to-jekyll
title: Now powered by Jekyll
categories:
- Web
image: /images/template/featured-image.jpg
images:  /images/template/
---

I've made the leap over from WordPress to Jekyll. Static sites are just easier, faster and more secure :thumbsup:

<!-- more -->

Honestly, what hasn't been said about Jekyll? Static sites are definitely the way to go. I've been hearing about vulnerabilities in WordPress and Drupal on and off, even more so since listening to security podcasts like Risky Biz.

What I never thought I'd say is my site is now somewhat...open-source? You can find all of it's code on my GitHub project [https://github.com/calvinbui/calvin.me](calvinbui/calvin.me). There, you can find some drafts I'm working on as well if you want to spoil yourself.

To sum up my own experience for the transition:

* Was a pain to get it transitioned properly, [total time 1.5 weeks](https://github.com/calvinbui/calvin.me/graphs/commit-activity)
* Used [exitwp](https://github.com/thomasf/exitwp) to convert it over, not a perfect tool.
* exitwp didn't run too well on Windows, had to use a Linux machine.
* exitwp didn't like how my site was self-hosted, had to transition it over to WordPress.com first.
* Images did not link properly but with some magic find and replace regex I was able to link them all properly.
* Images with captions did not display properly as they weren't supported, [but I overcame that](https://github.com/calvinbui/calvin.me/commits/master/_includes/caption.html)
* WordPress galleries also did not transition over well
* No Jekyll themes supported a 'featured-image' of any sort. [This was also added manually by me.](https://github.com/calvinbui/calvin.me/commit/0d674dc8ac464c9e648d29ddbc69412f1db12651)
* Code blocks and lists didn't go well together. [This was worked around by just not using lists.](https://github.com/calvinbui/calvin.me/commit/72755d82330af82a411cf3bbd6d117d1514c5d5f)
* The [GitHub pages gem](https://github.com/github/pages-gem) is running into issues at the moment so the whole time what I was seeing locally was different from what eventually appeared.
* Creating pull requests led to GitHub just unicorning. I believe it was because I forked from the [Jekyll Now theme](Jekyll Now theme) so I had to just start fresh to get rid any issues there.
* YouTube embeds worked with some tweaking to [stretch them out a little]().
* [Moving comments]() over from Disqus was easy enough.
* The list of [approved plugins] is appalling. Couldn't make use of Jekyll's Archives plugin.
* At least the site is faster? \(no it's not really\)

I'm happy with how it eventually turned out, the site is much simpler to read and simpler to make changes to. I don't need a slew of plugins to get everything running perfectly because it just works.

* Security is not a concern
* Response and speeds are now managed by GitHub and CloudFlare CDNs
* Free hosting?
* This list probably repeats what everyone else has already said :sadface: 
