# Projects publishing workflow

The committed file `src/data/projects.json` is the website's only project-data source. Editing the spreadsheet does not change the live website.

## Publish spreadsheet changes

1. Edit the **Projects for website** sheet.
2. Give every project a permanent, unique **Project ID** such as `chefost`. Never reuse or rename an ID.
3. Run `npm run import-projects` from the repository root.
4. Review the diff in `src/data/projects.json`.
5. Commit and push the JSON change through the normal review process.

The importer updates records with matching IDs and adds new records. It deliberately preserves JSON records that are absent from the spreadsheet, so historical projects cannot be deleted accidentally by removing a row. Duplicate IDs, missing titles, and missing summaries stop the import without changing the JSON file.

The Apps Script is read-only. It must be run manually through the import command; spreadsheet edits never trigger a deployment or website update.
