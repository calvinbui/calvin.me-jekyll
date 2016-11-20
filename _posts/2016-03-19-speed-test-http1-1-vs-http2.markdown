---
author: calvinbui93
comments: true
date: 2016-03-19 18:17:30+00:00
layout: post
link: https://calvinbuiblog.wordpress.com/2016/03/20/speed-test-http1-1-vs-http2/
slug: speed-test-http1-1-vs-http2
title: HTTP/2 Blog Speed Test
wordpress_id: 1230
categories:
- Web
tags:
- http/1.1
- http/2
images: 2016-03-19-speed-test-http1-1-vs-http2
---

Last week I updated the backend NGINX web servers to support HTTP/2. Now to find out how much difference it makes.

<!-- more -->

NGINX first supported HTTP/2 with it's [1.9.5 mainline release back in September 2015](https://www.nginx.com/blog/nginx-1-9-5/) after a [alpha patch release in August](https://www.nginx.com/blog/early-alpha-patch-http2/). At time of writing, the stable version of NGINX is 1.8.1 and does not yet support HTTP/2.

Adding HTTP/2 support was very simple, just one extra word, as noted in the above blog or within the [module's documentation](http://nginx.org/en/docs/http/ngx_http_v2_module.html).


## Test Configuration




### Browser


Firefox 45.0.1 will be used to perform the tests. Firefox is preferable over browsers as it is possible to toggle on and off HTTP/2 and SPDY through the about:config page. To do this, set the value of '**security.ssl.enable_alpn**' and '**network.http.spdy.enabled.http2**' to **false**

[![FF](http://calvinbuiblog.files.wordpress.com/2016/03/ff.png)](http://calvinbuiblog.files.wordpress.com/2016/03/ff.png)


### Computer


I will be running the tests on my Lenovo X220



	
  * Intel i7-2640M

	
  * 16GB RAM

	
  * Windows 10 64-bit




### Network


Internet is currently a 100/12 megabit cable connection provided by Telstra


## Testing Methodology


To find out quickly a page runs, the built-in Network Developer Tools (CTRL + Shift + Q) in Firefox is able to provide page statistics. On this page, clicking the stats in the bottom right corner will bring up a speed test with and without cache. I will be using this 20 times and get an average number. After each run I will clear all browsing data in Firefox and restart the browser. Nothing scientific happening here :P

[![http2 speed](http://calvinbuiblog.files.wordpress.com/2016/03/http2-speed.png)](http://calvinbuiblog.files.wordpress.com/2016/03/http2-speed.png)


## Results


![http1 header](https://calvin.me/mymedia/uploads/2016/03/http1-header-300x262.png)

[table id=1 /]


## Conclusion


Roughly a half-second increase in speed on the home page. Currently this site is being optimised for HTTP/1.1 with techniques such as file concatenation by combining multiple CSS and JS files together. This can hurt performance in HTTP/2 and is not considered a best practice. This practice is favourable in HTTP/1.1 as the browser is only able to open one connection at any time  and received sequentially.HTTP/2 allows each request to the server to use its own TCP connection, known as multiplexing, and allows each request to be received in parallel resulting in a dramatic performance gain.

[![http2-multiplexing](http://calvinbuiblog.files.wordpress.com/2016/03/http2-multiplexing.png)](http://calvinbuiblog.files.wordpress.com/2016/03/http2-multiplexing.png)

[caption id="attachment_1236" align="aligncenter" width="800"][![http2-network-graph-comparison](https://calvin.me/mymedia/uploads/2016/03/http2-network-graph-comparison.png)](https://calvin.me/mymedia/uploads/2016/03/http2-network-graph-comparison.png) Images from CloudFlare https://www.cloudflare.com/http2/what-is-http2/[/caption]
