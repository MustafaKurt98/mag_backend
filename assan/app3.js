const fs = require('fs');
const XLSX = require('xlsx');

const jsonData = fs.readFileSync('unique9-bulunamayanlar.json');
const sheet = XLSX.utils.json_to_sheet(JSON.parse(jsonData));
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, sheet, 'Photo Done');
XLSX.writeFile(workbook, 'unique9-bulunamayanlar.xlsx');

// const fs = require('fs');

// const file = fs.readFileSync('cat-olmayan-1106.json');
// const json = JSON.parse(file);

// const result = json.map(obj => ({ partnumber: obj.partnumber }));

// fs.writeFileSync('result22.json', JSON.stringify(result));


//iki json arasında eşleşmeyen partnumberleri yazdıran kod

// const fs = require('fs');


// const rawData1 = fs.readFileSync('kalan-urunler.json');
// const data1 = JSON.parse(rawData1);


// const rawData2 = fs.readFileSync('cat-olmayan-1106-part.json');
// const data2 = JSON.parse(rawData2);


// const newData = [];
// data1.forEach(item1 => {
//   const found = data2.some(item2 => item2.partnumber === item1.partnumber);
//   if (!found) {
//     newData.push({ partnumber: item1.partnumber });
//   }
// });


// fs.writeFileSync('sonuclar.json', JSON.stringify(newData));
