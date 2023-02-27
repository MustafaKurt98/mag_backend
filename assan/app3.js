const fs = require('fs');
const XLSX = require('xlsx');

const jsonData = fs.readFileSync('photo-done-cat.json');
const sheet = XLSX.utils.json_to_sheet(JSON.parse(jsonData));
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, sheet, 'Photo Done');
XLSX.writeFile(workbook, 'photo-done-cat.xlsx');

// const fs = require('fs');

// const file = fs.readFileSync('unique4-hazir-cat.json');
// const json = JSON.parse(file);

// const result = json.map(obj => ({partnumber: obj.partnumber}));

// fs.writeFileSync('photo-done-cat.json', JSON.stringify(result));
