# Orbitani landing page: hosting and sign-up counting

## Files
- `index.html`: the full landing page, ready to host anywhere (Vercel, Netlify, GitHub Pages).
- `apps-script.gs`: saves each sign-up as a row in a Google Sheet.
- `orbitani.html`: the source the claude.ai artifact is published from. Edit this one, then rebuild `index.html`.

## Saving sign-ups on the public site (about 5 minutes)
1. Create a Google Sheet named "Orbitani sign-ups".
2. Extensions > Apps Script. Paste `apps-script.gs`. Save.
3. Deploy > New deployment > type "Web app". Execute as: Me. Who has access: Anyone. Deploy and copy the URL.
4. In `index.html`, set `const ENDPOINT = "<that URL>";`.
5. Host `index.html`.

Every submission becomes one row: time, name, contact, email/whatsapp, which button was used (header/top/middle/bottom), and the page host.

## Reading the results against the hypothesis
"Companies are interested in using Orbitani": count rows in the sheet, divide by unique visitors from your host's analytics, and filter out test entries. The "CTA position" column shows which button converts.
