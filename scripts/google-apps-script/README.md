# Projects Google Apps Script

This read-only web app exposes the **Projects for website** tab as JSON while preserving hyperlinks embedded in rich-text cells. The website does not read it at runtime; `npm run import-projects` uses it to update the version-controlled dataset.

1. Open the project spreadsheet.
2. Select **Extensions → Apps Script**.
3. Replace the editor contents with `Code.gs` from this folder.
4. Select **Deploy → New deployment → Web app**.
5. Set **Execute as** to **Me**.
6. Set **Who has access** to **Anyone**.
7. Deploy and copy the `/exec` URL.
8. Optionally set the URL when running the importer:

   `PROJECTS_API_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec npm run import-projects`

Add a permanent, unique **Project ID** column to the sheet. Use lowercase identifiers such as `chefost`; never change an ID after publishing a project. Run `npm run import-projects`, review `src/data/projects.json`, then commit it. Projects missing from the sheet are preserved rather than deleted.
