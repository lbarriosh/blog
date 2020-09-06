---
title: Another year, another site
date: "2020-05-09T21:15:27.378Z"
description: "The 4th incarnation of my blog is now live!"
---

Hi everyone, and welcome to the new version of my site! 

On my sixth week of ~~temporary jail sentence~~ lockdown, I've finally found the time to get my blog back online. There have been several incarnations of this site since 2015, and this
time around I decided to set more realistic goals:

* **zero maintenance**. I don't want to self-host my blog anymore, and ideally patching servers and renewing LetsEncrypt certificates should become a thing of the past.
* **keep things fast and simple**. I don't need a full CMS (i.e. Wordpress), an Nginx server and a database to publish two posts a month. Static sites are blazing fast too!
* **focus on content**. My previous sites had fully customized themes since day one, but I never put much content there. I'll try to post regularly here instead.

After a few hours, I've ended up with the following:

* I've migrated the authoritative DNS servers of my domain from my cheap and dodgy provider to [netifly](https://www.netlify.com/). At last, my site is reachable through IPv6, and my mail and dynamic DNS entries also work.
* I've used [GatsbyJS](https://www.gatsbyjs.org/) and its starters to set up the site and to force myself
to improve my rusty React and Javascript.
* There is a CI pipeline on [GitLab](https://about.gitlab.com/) that will rebuild the site for each commit to master and to push it to Netifly.

If we ignore the cost of the domain, which I needed for other purposes anyway, keeping this site online is *free*. However, not all is good:

* the source code is littered with inline CSS and repeated markup that should be extracted to components.
* the site needs a proper navbar.

The improvements will have to wait for a while. Let's write some stuff instead!