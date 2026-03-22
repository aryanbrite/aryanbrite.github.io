---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<p style="text-align:center; margin-top:20px; font-size: 1.2rem;">Redirecting you to my live CV...</p>

<script>
  // Host the PDF directly in this repo at /files/cv.pdf
  var pdfLink = "/files/cv.pdf";
  
  if (pdfLink.trim() !== "") {
    window.location.replace(pdfLink);
  } else {
    document.querySelector('p').innerHTML = "<b>Oops!</b> Upload your CV PDF to <code>/files/cv.pdf</code> so this page can redirect to it.";
  }
</script>
