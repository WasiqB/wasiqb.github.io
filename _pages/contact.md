---
title: Contact Me
permalink: /contact/
---

<form action="https://formspree.io/{{ site.author.email }}"
      method="POST">
    <label>
        <span>Your Name?</span>
        <input type="text" name="name">
    </label>
    <label>
        <span>Your E-Mail?</span>
        <input type="email" name="_replyto">
    </label>
    <label>
        <span>Your Requirement?</span>
        <select name="requirement">
            <option>Job opportunity</option>
            <option>Freelance Project</option>
            <option>Training</option>
            <option>Consulting</option>
        </select>
    </label>
    <label>
        <span>Your Requirement?</span>
        <textarea name="details"></textarea>
    </label>
    <!-- <input type="text" name="_gotcha" style="display:none" /> -->
    <input type="hidden" name="_next" value="/thanks/" />
    <input type="submit" value="Submit">
</form>