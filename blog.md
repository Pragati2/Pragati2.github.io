---
layout: page
title: Blog
---

# Blog

<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="date"> — {{ post.date | date: "%B %d, %Y" }}</span>
  </li>
  {% endfor %}
</ul>
