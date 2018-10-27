# reCAPTCHA node.js example
This repo demonstrates how to set up reCAPTCHA v2 (invisible) and v3 with node.js, express, and HTML5.

## Instructions
- Get your reCAPTCHA credentials from https://www.google.com/recaptcha/admin
- Copy `.env.example` into `.env`, and update `.env` with your credentials
- Run `npm install && npm start`

## Gotchas
- The `request` library returns a STRING. I spent 2 hours trying to debug this (I'm still boiling right now). MAKE SURE YOU DESERIALIZE IT FIRST!
- If you want to send the form data as JSON, and not submit the form (which would cause the page to reload/redirect), you MUST fetch the form data AND transform it into JSON manually (look at the `<script>` section of `index.html`)!
    - You *cannot* just send the raw `FormData` in the AJAX request, as `FormData` doesn't have a `toString()` method!
    - On that note, you MUST serialize your POST data into string when making AJAX request with the `fetch` API. Objects are not accepted
    - You also cannot send a raw string that is invalid JSON, so the token must be wrapped in an object and *then* serialized

## Resources
https://developers.google.com/recaptcha/docs/

### TODO
- [ ] Add index
- [ ] Figure out if deleting the site cookie (non-Google) and signing back in lowers the score in v3
- [ ] Add login implementation where the user is forced to check with v2 if the v3 score is too low
