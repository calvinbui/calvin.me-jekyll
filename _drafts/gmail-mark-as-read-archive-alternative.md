---
author: Calvin Bui
comments: true
layout: post
slug: gmail-mark-as-read-archive-alternative
title: Gmail Mark As Read Alternative
categories:
- How-To
- Mobile
image: /images/2016-/featured-image.jpg
images:  /images/2016-/
---

Isn't annoying that Gmail only provides the option to either Archive or Delete emails from the notification?

<!-- more -->

Previously my solution to this niggling problem was to use [XNotifications]() which adds the 'Mark As Read' option to Gmail notifications. XNotifications relies on the Xposed Framework which can be limiting to non-root, non-bootloader unlocked users. This was simple solution but as time on went on, I became wary about how eventually I would have to move into a non-root, non-xposed world.

The problem with Archiving emails is:

* It does not show up in your inbox if unless you search fo rit
* It is not Marked as Read and hence searching for unread emails will also pull them up annoyingly

## Solution

My way around either Archiving emails or Deleting emails has been using [Google Script]() to move Archived emails back into my Inbox periodically. Now, I would just Archive emails and it would move back into my Inbox every hour or so.

## The Script

This script searches for Archived emails, marks them as read, and moves them back into your inbox.

I would recommend using doing this manually first as there's a daily limit to how often the Gmail API can be used.

The two tags it searches are:

* 
*
