# Projects Google Apps Script

This read-only web app exposes the **Projects for website** tab as JSON/JSONP while preserving hyperlinks embedded in rich-text cells.

1. Open the project spreadsheet.
2. Select **Extensions → Apps Script**.
3. Replace the editor contents with `Code.gs` from this folder.
4. Select **Deploy → New deployment → Web app**.
5. Set **Execute as** to **Me**.
6. Set **Who has access** to **Anyone**.
7. Deploy and copy the `/exec` URL.
8. Add the URL to the website environment as:

   `REACT_APP_PROJECTS_API_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec`

The website automatically falls back to the public Google Sheets endpoint when this variable is absent.
