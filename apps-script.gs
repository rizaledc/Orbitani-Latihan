// Orbitani sign-ups -> Google Sheet
// 1. Create a Google Sheet. Extensions > Apps Script. Paste this file. Save.
// 2. Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
// 3. Copy the web-app URL into ENDPOINT in site/index.html.

function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Signups') || ss.insertSheet('Signups');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Received', 'Name', 'Contact', 'Type', 'CTA position', 'Submitted at', 'Page']);
  }
  var d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) { return ContentService.createTextOutput('bad request'); }
  sheet.appendRow([
    new Date(),
    clean(d.name, 80),
    clean(d.contact, 120),
    clean(d.contactType, 20),
    clean(d.source, 20),
    clean(d.createdAt, 40),
    clean(d.page, 120)
  ]);
  return ContentService.createTextOutput('ok');
}

// Trim, cap length, and stop spreadsheet formula injection.
function clean(v, max) {
  var s = String(v == null ? '' : v).slice(0, max).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
