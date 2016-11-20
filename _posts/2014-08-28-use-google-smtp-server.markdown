---
author: calvinbui93
comments: true
date: 2014-08-28 09:39:02+00:00
layout: post
link: https://calvinbuiblog.wordpress.com/2014/08/28/use-google-smtp-server/
slug: use-google-smtp-server
title: Use the Google SMTP Server for notifications
wordpress_id: 178
categories:
- How-To
- Networking
tags:
- email
- google
- notification
- smtp
images: 2014-08-28-use-google-smtp-server
---

A lot of (the good ones at least) hardware and software give you the ability to send notifications via email when scheduled too or a warning/error occurs. Without having to build and maintain your own mail server, you can use the Google SMTP server as your sending mail server. You will also have the option of having Google store and index the emails you send, so all your sent emails will be searchable and backed-up on Gmail. If you elect to use your Gmail or Google Apps account for your incoming email as well, you'll have all your email in one convenient place. Also, since Google's SMTP server does not use Port 25, you'll reduce the probability that an ISP might block your email or flag it as SPAM.

<!-- more -->

[caption id="attachment_184" align="alignnone" width="725"][![google-smtp-table](http://calvinbuiblog.files.wordpress.com/2014/08/capture2.png)](http://calvinbuiblog.files.wordpress.com/2014/08/capture2.png) Table from https://support.google.com/a/answer/176600?hl=en[/caption]


## To utilise the Google SMTP server:




**Server**: smtp.gmail.com
**Port: **465
**Username**: Your Gmail or Google Apps email address
**Password**: Your Gmail or Google Apps email password
**TLS/SSL required**: Yes
**Authentication**: Yes
**Security**: SSL


The following is also a working combination:


**Security**: TLS
**Port** 587





## Store outgoing emails


Copies of outgoing emails are stored in the Gmail/Google Apps 'Sent folder'.



	
  1. Log into your Gmail or Google Apps email

	
  2. Click on "Settings" then on the "Forwarding/IMAP" tab 

	
  3. Scroll down to the "IMAP Access" section. IMAP must be enabled in order for emails to be properly copied to your sent folder.


NOTE: Google rewrites the 'From' address emails to the default 'Send' email address in your Gmail/Google Apps account settings. To fix this,  go to the "Accounts" tab and make another account the  "default" Gmail/Google Apps account.

[caption id="attachment_187" align="alignnone" width="474"][![smtp-email](http://calvinbuiblog.files.wordpress.com/2014/08/1.png)](http://calvinbuiblog.files.wordpress.com/2014/08/1.png) Example email details[/caption]

[caption id="attachment_188" align="alignnone" width="497"][![smtp-email-sent](http://calvinbuiblog.files.wordpress.com/2014/08/23.png)](http://calvinbuiblog.files.wordpress.com/2014/08/23.png) Test email from pfSense using the Google SMTP Server[/caption]


## Sending Limits


There is a limit of 2000 emails per day. Plenty.


## Start Using It Everywhere


[caption id="attachment_186" align="aligncenter" width="764"][![smtp-pfsense](http://calvinbuiblog.files.wordpress.com/2014/08/37.png)](http://calvinbuiblog.files.wordpress.com/2014/08/37.png) pfSense[/caption]

[caption id="attachment_189" align="aligncenter" width="421"][![CyberPower UPS PowerPanel - to let me know when the power goes out at home](http://calvinbuiblog.files.wordpress.com/2014/08/ups.png)](http://calvinbuiblog.files.wordpress.com/2014/08/ups.png) CyberPower UPS PowerPanel - to let me know when the power goes out at home[/caption]

[caption id="attachment_190" align="aligncenter" width="674"][![napp-it which is set to notify of disk failures and daily/weekly/monthly status](http://calvinbuiblog.files.wordpress.com/2014/08/napp-it.png)](http://calvinbuiblog.files.wordpress.com/2014/08/napp-it.png) napp-it which is set to notify of disk failures and daily/weekly/monthly status[/caption]

[caption id="attachment_191" align="aligncenter" width="730"][![Ubiquiti UniFi Controller which monitors my wireless access points](http://calvinbuiblog.files.wordpress.com/2014/08/unifi.png)](http://calvinbuiblog.files.wordpress.com/2014/08/unifi.png) Ubiquiti UniFi Controller which monitors my wireless access points[/caption]




