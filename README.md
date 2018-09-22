# reCAPTCHA node.js example
This repo demonstrates how to set up reCAPTCHA 2.0 (specifically, the invisible version) with node.js, express, and HTML5.

## Instructions
- Get your reCAPTCHA credentials from https://www.google.com/recaptcha/admin
- Copy `.env.example` into `.env`, and `index.example.html` into `index.html`
- Update `.env` with your credentials
- Update `index.html` (look at the button of the form) with your credentials
- Run `npm install && nodemon app.js`

## Gotchas
- The `request` library returns a STRING. I spent 2 hours trying to debug this (I'm still boiling right now). MAKE SURE YOU DESERIALIZE IT FIRST!
- If you want to send the form data as JSON, and not submit the form (which would cause the page to reload/redirect), you MUST fetch the form data AND transform it into JSON manually (look at the `<script>` section of `index.html`)!
    - You *cannot* just send the raw `FormData` in the AJAX request, as `FormData` doesn't have a `toString()` method!
    - On that note, you MUST serialize your POST data into string when making AJAX request with the `fetch` API. Objects are not accepted

## Resources
https://developers.google.com/recaptcha/docs/
