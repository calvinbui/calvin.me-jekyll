---
author: calvinbui93
comments: true
date: 2015-07-27 17:34:09+00:00
layout: post
link: https://calvinbuiblog.wordpress.com/2015/07/28/bypass-certificate-errors-chrome/
slug: bypass-certificate-errors-chrome
title: Bypass self-signed certificate errors on Google Chrome
wordpress_id: 1082
categories:
- How-To
- Networking
- Server
tags:
- certificates
- chrome
- ssl
images: 2015-07-27-bypass-certificate-errors-chrome
---

Wasn't it annoying when Google Chrome suddenly made you do two clicks instead of one to bypass certificate errors?!

<!-- more -->

Chrome can remember decisions to proceed through certificate errors for a specified length of time of up to three months.



	
  1. Enter **chrome://flags** into the address bar[![flags](http://calvinbuiblog.files.wordpress.com/2015/07/flags.jpg)](http://calvinbuiblog.files.wordpress.com/2015/07/flags.jpg)

	
  2. Find '**Remember decisions to proceed through SSL errors for a specified length of time.**' It is about 3/4 of the way down the page. Use CTRL+F to make your life a little easier. [![remember](http://calvinbuiblog.files.wordpress.com/2015/07/remember.jpg)](http://calvinbuiblog.files.wordpress.com/2015/07/remember.jpg)

	
  3. Select '**Remember for three months**' in the drop-down. [![dropdown](http://calvinbuiblog.files.wordpress.com/2015/07/dropdown.jpg)](http://calvinbuiblog.files.wordpress.com/2015/07/dropdown.jpg)

	
  4. Relaunch Chrome as prompted. [![relaunch](http://calvinbuiblog.files.wordpress.com/2015/07/relaunch.jpg)](http://calvinbuiblog.files.wordpress.com/2015/07/relaunch.jpg)




### Explanation of Certificate Errors


Browsers, like Internet Explorer, Firefox and Chrome will usually show these errors when they cannot trust the source of the certificate. This is seen as a privacy issue as they cannot establish a secure connection with the website.

The privacy issues are that the connection with the website may have been intercepted or it is misrepresenting itself (meaning it isn't the real website you're visiting). While on the Internet this is definitely an issue, your own certificates that you make for yourself and your web servers are never in doubt of being hijacked.

There are other reasons for certificate errors as well:



	
  * the certificate has been revoked by the issuing certificate authority

	
  * it is using a certificate for another website

	
  * the certificate is out of date (or your computer date is wrong)


