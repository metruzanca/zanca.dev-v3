---
draft: true
title: ""
slug: ""
date: 2022-05-22T19:49:04Z
description: ""
tags: []
---

I believe the root cause of confusion was that you've fallen for a common misconsception that github (or any git server) is some kind of file server and so you thought that you can use it to host your website. The way that git servers are designed is to not send you the raw files but instead send them in a way that you can view the source code of them. Even this link [https://raw.githubusercontent.com/anubhav16012003/Glowing-Icons/main/index.html](https://raw.githubusercontent.com/anubhav16012003/Glowing-Icons/main/index.html "https://raw.githubusercontent.com/anubhav16012003/Glowing-Icons/main/index.html") if you inspect it with browser dev tools you'll notice that you're actually getting a webpage with your code embeded in the page. Github is also smart enough to detect that running this command `curl -o index.html https://raw.githubusercontent.com/anubhav16012003/Glowing-Icons/main/index.html` is not a browser and will instead send you a different html, this time only your code. (it uses your user agent to figure this out. user agent is a bit of meta data that tells web servers what piece of software is making the request) (Github-pages is instead the web server you seem to think github is.)