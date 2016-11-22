---
author: calvinbui93
comments: true
date: 2015-03-29 03:19:01+00:00
layout: post

slug: wordpress-caching-comparison
title: WordPress Caching Comparison

categories:
- Web
tags:
- caching
- speed
- wordpress
images: 2015-03-29-wordpress-caching-comparison
---

WordPress caching is the fastest way to improve website performance. Caching WordPress reduces server load by reducing the number of requests per page. For every single user that visits your site, data is retrieved from MySQL, processed with PHP and then displayed as HTML. This is a draining process if several hundred users at on your site at once. Caching saves the webpage into files which it shows visitors instead, not requiring MySQL or PHP which reduces load time significantly.

<!-- more -->

There are quite a few caching plugins for WordPress that I had to choose from. Therefore I decided to do a comparison **on this site** as a test. Results may vary depending on your own site, what themes and plugins you may have as well.


## WordPress Caching Plugins


Based on recommendations, popularity and reviews, I had a look at:



	
  * [Falcon Engine from Wordfence](http://docs.wordfence.com/en/Falcon_Cache)

	
  * [WP Rocket](http://wp-rocket.me/)

	
  * [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)

	
  * [Hyper Cache](https://wordpress.org/plugins/hyper-cache/)

	
  * [Quick Cache](https://wordpress.org/plugins/quick-cache/)

	
  * [CloudFlare Rocket Loader](https://support.cloudflare.com/hc/en-us/articles/200168056-What-does-Rocket-Loader-do-)




## How I Tested


I thought I would test based on two factors, number of **website requests** and **response time**.

I decided to use [Pingdom's Website Speed Test](http://tools.pingdom.com/fpt/) as the main testing tool because it gave results quickly and there wasn't much fussing around.

[![Capture555](http://calvinbuiblog.files.wordpress.com/2015/03/capture555.png)](http://calvinbuiblog.files.wordpress.com/2015/03/capture555.png)

A total of 8 tests were taken for each plugin and the best 5 were selected to avoid many outliers.

Other reputable testing sites include:



	
  * [Webpage Test](http://www.webpagetest.org/)

	
  * [GTmetrix](http://gtmetrix.com/)

	
  * [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)




## Results


<table width="742" style="height:410px;" >
<tbody >
<tr >

<td width="158" >
</td>

<td colspan="4" width="256" > (Requests / Response in seconds)
</td>
</tr>
<tr >

<td >**Plugin**
</td>

<td >**Average**
</td>

<td >**Best**
</td>

<td >**Median**
</td>

<td >**Worse**
</td>
</tr>
<tr >

<td >CloudFlare
</td>

<td >54 / 2.34
</td>

<td >54 / 1.23
</td>

<td >56 / 2.96
</td>

<td >55 / 3.07
</td>
</tr>
<tr >

<td >Falcon
</td>

<td >55 / 3.58
</td>

<td >56 / 1.35
</td>

<td >55 / 3.92
</td>

<td >55 / 4.83
</td>
</tr>
<tr >

<td >WP Rocket
</td>

<td >34 / 2.63
</td>

<td >32 / 2.25
</td>

<td >35 / 2.53
</td>

<td >35 / 3.90
</td>
</tr>
<tr >

<td >W3 Total Cache
</td>

<td >52 / 3.44
</td>

<td >50 / 2.67
</td>

<td >53 / 3.65
</td>

<td >52 / 4.03
</td>
</tr>
<tr >

<td >Hyper Cache
</td>

<td >54 / 3.16
</td>

<td >56 / 2.22
</td>

<td >54 / 3.16
</td>

<td >52 / 4.24
</td>
</tr>
<tr >

<td >Quick Cache
</td>

<td >55 / 3.10
</td>

<td >56 / 2.11
</td>

<td >56 / 3.23
</td>

<td >53 / 4.07
</td>
</tr>
</tbody>
</table>
[![average](http://calvinbuiblog.files.wordpress.com/2015/03/average.png)](http://calvinbuiblog.files.wordpress.com/2015/03/average.png)

[![response](http://calvinbuiblog.files.wordpress.com/2015/03/response.png)](http://calvinbuiblog.files.wordpress.com/2015/03/response.png)


## Conclusion


It's quite clear that using CloudFlare reduces response times significantly due to their built-in CDN. WP Rocket on the other hand is able to reduce requests tremendously whereas other plugins all hovered around the 55 mark. With those results, I would choose to use WP Rocket as my caching plugin with CloudFlare running in the background.
