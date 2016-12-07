---
author: Calvin Bui
comments: true
layout: post
slug: outlook-reply-template-macro
title: Reply to an email with a template in Microsoft Outlook
categories:
- Misc
- How-To
image: /images/template/featured-image.jpg
images:  /images/template/
---

A simple macro to send a range of email templates, prefilled with different items like your subject line, recipients, CC and BCC.

<!-- more -->

_I have tested this script on Windows 8.1 running Outlook 2010_

## Overview

This simple macro will reply to an email with a template of your choice. The macro will activate a listbox to appear where you can select which template to use. Depending on your settings, you can then specify who will be CC'd/BCC'd on the reply, which email account it was sent from and the subject line. More areas can be changed but I did not want to complicate things.

## Script

You can find the items necessary on my GitHub profile calvinbui/reply-with-template-outlook.

## How to Add

1. Open up Microsoft Outlook
2. Hit ALT+F11 to open the Visual Basic Editor
3. Click on File > Import


## How to Use

The best way to use this is to create a button for it in your ribbon. 
