# 99 Marketing Services Local Rebuild

Static Astro rebuild of `99MarketingServices.com` with readable HTML copy, service landing pages, SEO metadata, schema, sitemap, and a cleaner responsive layout.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4321/`.
it is live also on the web 
https://99marketing-website.vercel.app/

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Google Sheets Lead Form

The homepage lead form submits to a Google Apps Script Web App URL stored in:

```bash
PUBLIC_GOOGLE_SHEETS_WEB_APP_URL
```

Create a Google Sheet with a tab named `Leads` and this header row:

```text
submittedAt | name | phone | email | service | company | message | source | page
```

Then open Extensions -> Apps Script in that Sheet, paste the code from `docs/google-sheets-app-script.js`, and deploy it as a Web App:

- Execute as: `Me`
- Who has access: `Anyone`

Copy the deployed Web App URL and add it to `.env` locally:

```bash
PUBLIC_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Add the same environment variable in the production hosting provider before building or redeploying the site.

## SEO Foundation

- One canonical home page plus static service pages under `/services/`.
- Unique title and meta description for each service page.
- JSON-LD schema for the business, FAQ, and service pages.
- `robots.txt`, `sitemap.xml`, Open Graph, Twitter card, and favicon metadata.
- Searchable text for services, outcomes, process, FAQs, contact details, and local Mohali address.

Ranking at the top of Google is not guaranteed by code alone. After launch, connect Google Search Console, submit the sitemap, build local citations, publish original case studies, and earn relevant backlinks.
