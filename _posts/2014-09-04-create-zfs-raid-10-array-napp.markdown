---
author: calvinbui93
comments: true
date: 2014-09-04 10:53:19+00:00
layout: post
link: https://calvinbuiblog.wordpress.com/2014/09/04/create-zfs-raid-10-array-napp/
slug: create-zfs-raid-10-array-napp
title: How To Create a ZFS RAID 10 Array
wordpress_id: 219
categories:
- How-To
- Storage
tags:
- napp-it
- RAID
- zfs
images: 2014-09-04-create-zfs-raid-10-array-napp
---

[RAID 10](http://en.wikipedia.org/wiki/Nested_RAID_levels#RAID_1.2B0) is great as a highly reliable storage array for your personal files. The [ZFS file-system](docs.oracle.com/cd/E19253-01/819-5461/zfsover-2/) is capable of protecting your data against corruption, but not against hardware failures. ZFS however implements [RAID-Z](http://en.wikipedia.org/wiki/Non-standard_RAID_levels#RAID-Z) (RAID 5, 6 and 7) to ensure redundancy across multiple drives. RAID 10 (1+0 or mirror + stripe) is not offered as a choice in ZFS but can be easily done manually for a similar effect. This guide will be focused on [nappit ](http://www.napp-it.org/index_en.html)but can be modified for whichever ZFS platform you are using.

<!-- more -->


## Create the Array (Pool)


**1.** Create a new pool with the first two disks to be mirrored.

[caption id="attachment_224" align="alignnone" width="409"][![create a new pool](http://calvinbuiblog.files.wordpress.com/2014/09/11.png)](http://calvinbuiblog.files.wordpress.com/2014/09/11.png) Select the 'Create Pool' option from the Pools dropdown[/caption]

**2.** Enter the pool details and select the first mirror.

[caption id="attachment_225" align="alignnone" width="676"][![first mirrored pair for raid 10](http://calvinbuiblog.files.wordpress.com/2014/09/21.png)](http://calvinbuiblog.files.wordpress.com/2014/09/21.png) Select the first mirror of the RAID 10 array[/caption]

**3.** Extend the new pool by selecting the option from the menu.

[caption id="attachment_220" align="alignnone" width="665"][![extend the pool](http://calvinbuiblog.files.wordpress.com/2014/09/31.png)](http://calvinbuiblog.files.wordpress.com/2014/09/31.png) Back in the dropdown menu, select the option to 'Extend Pool'[/caption]

**4.** Select the next two disks to be in the pool and set the option to mirror.

[caption id="attachment_221" align="alignnone" width="670"][![add any mirrors to raid 10 array](http://calvinbuiblog.files.wordpress.com/2014/09/41.png)](http://calvinbuiblog.files.wordpress.com/2014/09/41.png) Select the next mirror to be part of the RAID 10 array[/caption]

**5.** Select any remaining disks to be in the pool and also set the option to mirror.

[caption id="attachment_222" align="alignnone" width="652"][![add last drives to raid 10 array](http://calvinbuiblog.files.wordpress.com/2014/09/5.png)](http://calvinbuiblog.files.wordpress.com/2014/09/5.png) Optionally, select any remaining mirrors and repeat this step if necessary if you have more disks remaining.[/caption]


## Verify the RAID 10 Array


If successful, in the main page of the your 'Pools', nappit will list your new RAID 10 array. Alternatively, run the command 'zpool status' to return the Pools and their allocated drives within the terminal.

[caption id="attachment_223" align="alignnone" width="600"][![raid 10 complete](http://calvinbuiblog.files.wordpress.com/2014/09/6.png)](http://calvinbuiblog.files.wordpress.com/2014/09/6.png) RAID 10 created. Mirrors in a stripe.[/caption]


## My thoughts of RAID 10





	
  * I just lost 12TB of space just from doing this. RAID 10 and any mirrored level of RAID will take half of your disk space for redundancy.

	
  * I like the idea that half your drives can die but the system would still be up, given _the right ones_ die. The possibility of that are slim but good if you are using a lot of drives (more than just 6).

	
  * RAID 10 increases your read speeds as more mirrors are added as all the drives perform the same read task. Reading and writing speeds were still limited to my network connection and I did not see any performance difference with RAID-Z2 (RAID 6) - which I eventually changed to.

	
  * Upgrading drives, adding and removing mirrors is easier than RAID-Z


