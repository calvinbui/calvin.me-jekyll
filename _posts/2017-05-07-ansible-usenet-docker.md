---
author: Calvin Bui
comments: true
layout: post
slug: ansible-usenet-docker
title: Deploy Docker containers for Usenet using Ansible
categories:
- Computers
- Linux
- Virtualisation
- Server
image: /assets/images/2017-05-07-ansible-usenet-docker/featured-image.jpg
images:  /assets/images/2017-05-07-ansible-usenet-docker/
---

I made a Ansible playbook to deploy Docker containers containing Usenet applications.

<!-- more -->

## Overview

Ansible and Docker are two technologies I started learning this year. As I used them at work, I started getting ideas of how to put them into practice at home in my environments.

For a really basic, simple overview:

-   Docker: running apps in isolated containers
-   Ansible: automate tasks on a remote machine
-   Usenet: worldwide distributed system on the Internet for discussion (and sharing)

## Playbook

Putting all three together, I came up with an Ansible playbook that:

1.  Sets up a brand new machine (Ubuntu 16.04+).
2.  Installs and configures Docker for our purposes (e.g. networking, docker-py).
3.  Mounts an NFS network share.
4.  Creates Docker containers for NZBGet, Transmission, NZB Hydra, Sonarr and CouchPotato.
5.  Installs NGINX with LDAP authentication to proxy these services.
6.  Installs Muximux to provide easy access to those services.
7.  Generate certificates using Let's Encrypt on the Docker host (not container) and links the certificates to the sites.

## Benefits and Value

To list them:

-   I have been able to reduce the amount of virtual machines from 6 to 1
  -   Separation of concerns still possible with Docker containers
-   Memory usage on VMware down from 3.5GB to 1.5GB (could get away with 1GB in my tests)
  -   I didn't think that Docker containers would be so light compared to a brand new Ubuntu server install which only uses ~30MB of RAM by default
-   Idempotent installation. I can run the playbook over and over again without having to reconfigure anything in each app (minus Sonarr and CouchPotato which uses a database)

## Try it out

You can find the playbook here: [https://github.com/calvinbui/ansible-usenet-docker](https://github.com/calvinbui/ansible-usenet-docker) with some additional documentation.

The playbook at the moment is specific to myself (i.e. I'm proxying another one of my websites) but can be easily changed to match anyone's setup.
