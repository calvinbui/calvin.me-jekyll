---
author: calvinbui93
comments: true
date: 2015-03-22 05:44:45+00:00
layout: post
link: https://calvinbuiblog.wordpress.com/2015/03/22/install-macos-esxi/
slug: install-macos-esxi
title: Install macOS on ESXi
wordpress_id: 843
categories:
- How-To
tags:
- esxi
- install
- mac os x
- macOS
- vmware
images: 2015-03-22-install-macos-esxi
---

UPDATE 18/10/16: Changed to support 10.12

For one reason or another you need macOS on ESXi tells you that it isn't possible unless your host is a Mac itself. That isn't particularly true...

<!-- more -->


## The ESXi Unlocker


Thanks to Donk over at InsanelyMac, a patch has been created to install macOS on ESXi  (5.5 only) but also supports Workstation (8, 9, 10), Player (4, 5, 6) and Fusion (4, 5, 6). [Have a look at it here](http://www.insanelymac.com/forum/topic/267296-esxi-5-mac-os-x-unlocker/) or try out version 2 which supports [Workstation 11, Player 7 Fusion 7 and ESXi 6](http://www.insanelymac.com/forum/files/file/339-unlocker/).

_(Disclaimer: The following process potentially violates Apple’s End User License Agreement for macOS. Please check the Agreement before following these steps.)_


## Setup


Here is my current setup and what I have:



 	
  * Whitebox ESXi host

 	
  * macOS Sierra 10.12 (but any will work) - NOTE: lags heaps but can be [slightly tolerable with the beamoff application](http://www.insanelymac.com/forum/topic/302424-yosemite-on-vmware-unusable/).




## Install the Unlocker Patch


For this, I used the Windows vSphere client instead of the web client



 	
  1. Connect directly to your ESXi host instead of vCenter

 	
  2. Unzip the unlock-all-v130.zip file

 	
  3. Open a datastore (Configuration > Hardware > Storage) by right-clicking it and selecting 'Browse Datastore...'
![1](http://calvinbuiblog.files.wordpress.com/2015/01/11.png)

 	
  4. Copy the 'esxi' folder to the datastore by selecting 'Upload Folder' making note of the warning of replacing any existing folders you may have with the same name

 	
  5. Enable and connect to SSH on the host (Configuration > Software > Security Profile > Services > Properties > SSH > Options > Start > OK)
[![2](http://calvinbuiblog.files.wordpress.com/2015/01/21.png)](http://calvinbuiblog.files.wordpress.com/2015/01/21.png)

 	
  6. Change directory over to your VMFS datastore

    
    cd /vmfs/volumes/[datastore]/




 	
  7. I recommend changing the name of the unlocker's folder to something else such as osx_unlocker

    
    mv esxi osx_unlocker




 	
  8. Go into the unlocker folder afterwards

    
    cd osx_unlocker




 	
  9. Make the install and uninstall file executable

    
    chmod +x *
    




 	
  10.  Run the install script file

    
    ./install.sh




 	
  11. Reboot your ESXi host




## Create the ISO image


If you have 10.9 or greater, you will need a Mac to create the ISO.


#### **If you have a Mac or using 10.9 and greater**


For macOS or OS X 10.6 to 10.12, you can use this Mac only script to create the ISO if the InstallESD.img or Install.app is in the Applications folder: [https://gist.github.com/calvinbui/3cc1594d85583077a88d6d60eac01aa8](https://gist.github.com/calvinbui/3cc1594d85583077a88d6d60eac01aa8)


#### Windows/Linux


Only supports 10.8 and below.



 	
  1. Download OS X installation however you wish. Apple provide it free on their Mac App Store such as this: [Yosemite Installation](https://itunes.apple.com/us/app/os-x-yosemite/id915041082?mt=12)

 	
  2. Browse the 'Install OS X.app' and extract the InstallESD.dmg file under /Contents/SharedSupport/

 	
  3. Follow one of the options below depending on your operating system:


**Windows - **Convert the DMG file to an ISO using dmg2img. I used version 1.65.

    
    dmg2img -i InstallESD.img -o MountainLion.iso


**Linux (Ubuntu) - **Convert the DMG to ISO also using dmg2img (sudo_ apt-get install dmg2img_)

    
    dmg2img -i InstallESD.img -o MountainLion.iso




## Create the Virtual Machine and Install


Make sure to select Apple Mac OS X as your Guest Operating System.

[![3](http://calvinbuiblog.files.wordpress.com/2015/01/31.png)](http://calvinbuiblog.files.wordpress.com/2015/01/31.png)

Power on the VM and mount the ISO image to install.

If you get the error 'darwin11_64guest is not supported', try starting the VM directly from the host instead of vCenter.

[![123](https://calvin.me/mymedia/uploads/2015/03/123-1024x875.png)](http://calvinbuiblog.files.wordpress.com/2015/03/123.png)


