const json2csv = require('json2csv').Parser;
const fs = require('fs');

// JSON dosyasını yükle
const jsonData = require('./eslesen2.json');

// const ff = jsonData.map(item => {
//    if (item.compatibledescription != null) {
//       item.compatibledescription.map(item2 => {
//          if (item2.list != null) {
//             item2.list.map(item3 => {
//                console.log(item3);
//             })
//          }
//       })
//    }
// })

// JSON verilerini düzleştir
const flattenedData = jsonData.map(item => {
   return {
      "name": item.name ?? null,
      "code": item.code.map(item2 => { return item2 }),
      "netweight": item.netweight ?? null,
      "relatedPart": item.relatedPart ?? null,
      "partNumber": item.partNumber ?? null,
      "compatibledescription-parca": item.compatibledescription != null ? item.compatibledescription.map(item2 => item2.parca) : null,
      "compatibledescription-list": item.compatibledescription != null ? item.compatibledescription.map(item2 => item2.list != null ? item2.list.map(item3 => {return item2.parca +':'+ item3 }) : null) : null,
      "image": item.image!=null ? item.image.map(item2 => item2) : null,
   }
});

// CSV formatına dönüştür
const fields = ['name', 'code', 'netweight', 'relatedPart', 'partNumber', 'compatibledescription-parca', 'compatibledescription-list', 'image'];
const csvParser = new json2csv({ fields });
const csvData = csvParser.parse(flattenedData);

// CSV dosyasını kaydet
fs.writeFileSync('yenicsv.csv', csvData);
