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
  // ---------------------------------------------------------
  // 👇 PASTE YOUR GOOGLE DRIVE SCROLLABLE PDF LINK BELOW 👇
  // ---------------------------------------------------------
  var pdfLink = "YOUR_PUBLIC_CV_LINK_HERE";
  // ---------------------------------------------------------
  
  if (pdfLink !== "YOUR_PUBLIC_CV_LINK_HERE" && pdfLink.trim() !== "") {
    window.location.replace(pdfLink);
  } else {
    document.querySelector('p').innerHTML = "<b>Oops!</b> To activate this redirect, you need to open <code>_pages/cv.md</code> and replace <code>YOUR_PUBLIC_CV_LINK_HERE</code> with the actual link to your CV.";
  }
</script>
