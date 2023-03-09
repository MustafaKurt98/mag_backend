

// const xlsx = require('xlsx');
// const fs = require('fs');


// const workbook = xlsx.readFile('mag-2list.xlsx');

// fs.readFile('bulunamayan.json', 'utf8', function (err, data) {

// })

// 0
// const sheetName = 'Sheet1';


// const worksheet = workbook.Sheets[sheetName];


// let rowIndex = 2;


// const data = [];


// let index = 0;
// while (true) {

//     const cellB = worksheet['B' + rowIndex];

//     if (!cellB) {
//         break;
//     }

//     if (cellB.v === "CATERPILLAR") {


//         const cellC = worksheet['C' + rowIndex];

//         if (cellC) {

//             data.push({ partnumber: "" + cellC.v + "" });

//             index++;
//         }
//     }

//     rowIndex++;
// }


// fs.writeFileSync('gokcek-caterpillarD.json', JSON.stringify(data), function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Veriler JSON dosyasına yazıldı.");
// });





// obje bolucu
// const fs = require('fs');

// fs.readFile('ilk1500-2126.json', 'utf8', (err, data) => {
//   if (err) throw err;

//   const objeler = JSON.parse(data);

//   const ilk_1000_obje = objeler.slice(500, 627);

//   const yeni_dosya = JSON.stringify(ilk_1000_obje);

//   fs.writeFile('kalan-127.json', yeni_dosya, (err) => {
//     if (err) throw err;
//     console.log('Yeni dosya oluşturuldu!');
//   });
// });





//karşılaştırma
// const fs = require('fs');

// const file2 = fs.readFileSync('kalan-urunler.json');
// const file1 = fs.readFileSync('son-urun.json');

// const data1 = JSON.parse(file1);
// const data2 = JSON.parse(file2);

// const unmatchedPartNumbers = [];

// data1.forEach((item1) => {
//   const match = data2.find((item2) => item1.partnumber === item2.partnumber);
//   if (!match) {
//     unmatchedPartNumbers.push({partnumber: item1.partnumber});
//   }
// });

// data2.forEach((item2) => {
//   const match = data1.find((item1) => item2.partnumber === item1.partnumber);
//   if (!match) {
//     unmatchedPartNumbers.push({partnumber: item2.partnumber});
//   }
// });

// const result = {
//   unmatchedPartNumbers
// };

// const resultJson = JSON.stringify(result);

// fs.writeFileSync('result.json', resultJson);




//excel b,c ve d kolonlarını alma

// const xlsx = require('xlsx');
// const fs = require('fs');


// const workbook = xlsx.readFile('mag-2list.xlsx');


// const worksheet = workbook.Sheets[workbook.SheetNames[1]];


// const jsonData = [];


// for (let i = 2; i <= worksheet['!ref'].split(':')[1].substring(1); i++) {
//   const aCell = worksheet['A' + i];
// //   const bCell = worksheet['B' + i];
// //   const cCell = worksheet['C' + i];
// //   const dCell = worksheet['D' + i];




//     const obj = {
//     //   oem: bCell.v,
//       partnumber: ""+aCell.v+"",
//     //   eskiPartNumber: dCell.v
//     };

//     jsonData.push(obj);

// }


// fs.writeFile('allpartNumber.json', JSON.stringify(jsonData), function (err) {
//   if (err) throw err;
//   console.log('JSON dosyası oluşturuldu!');
// });




// // eksikleri bulmak için kullanılacak
// const fs = require('fs');

// // İki JSON dosyasını okuyoruz
// const dosya1 = fs.readFileSync('caterpillar.json');
// const dosya2 = fs.readFileSync('bulunamayan-caterpillar.json');

// // JSON verilerini JavaScript nesnelerine dönüştürüyoruz
// const veri1 = JSON.parse(dosya1);
// const veri2 = JSON.parse(dosya2);

// const eskiPartNumDizi = [];

// // Her iki dosyanın nesnelerini döngüye alıyoruz
// for (let i = 0; i < veri1.length; i++) {
//   for (let j = 0; j < veri2.length; j++) {
//     // partNumber değerlerini karşılaştırıyoruz
//     if (veri1[i].partnumber.toString() === veri2[j].partnumber.toString()) {
//       // Eşleşen nesnelerin eskiPartNumber değerlerini diziye ekliyoruz
//       eskiPartNumDizi.push({partnumber:veri1[i].eskipartnumber});
//       // ikinci dosyada birden fazla aynı partNumber değeri olabilir, bu yüzden ilk eşleşme sonrası döngüden çıkıyoruz
//     }
//   }
// }

// // Diziyi JSON formatına dönüştürüyoruz
// const yeniVeri = JSON.stringify(eskiPartNumDizi);

// // Yeni dosyaya yazdırıyoruz
// fs.writeFileSync('eskiPartNumber.json', yeniVeri);





// sadece partnumberları almak için kullanılacak
const fs = require('fs');


const rawData = fs.readFileSync('./magstore/unique-eski-yeni.json');
const data = JSON.parse(rawData);
const arr = [];

const newData = data.map(item => {
  arr.push({ partnumber: item.partnumber });

});

fs.writeFileSync('justPartNumber.json', JSON.stringify(arr));








//iki json arasında eşleşmeyen partnumberleri yazdıran kod

// const fs = require('fs');


// const rawData1 = fs.readFileSync('unique9-bulunamayanlar.json');
// const data1 = JSON.parse(rawData1);


// const rawData2 = fs.readFileSync('yeni-json.json');
// const data2 = JSON.parse(rawData2);


// const newData = [];
// data1.forEach(item1 => {
//   const found = data2.some(item2 => item2.partnumber === item1.partnumber);
//   if (!found) {
//     newData.push({ partnumber: item1.partnumber });
//   }
// });


// fs.writeFileSync('yeniden-bakilacak.json', JSON.stringify(newData));





// const fs = require('fs');


// const rawData1 = fs.readFileSync('hazir-caterpillar.json');
// const data1 = JSON.parse(rawData1);


// const rawData2 = fs.readFileSync('mag_guncel.json');
// const data2 = JSON.parse(rawData2);


// const newData = data1.filter(item1 => {
//   return !data2.some(item2 => item2.partnumber === item1.partnumber);
// });


// fs.writeFileSync('hedef3.json', JSON.stringify(newData));




// her elemanı unique yapmak için kullanılacak
// const fs = require('fs');

// const file = fs.readFileSync('./magstore/unique-eski-yeni.json');

// const obj = JSON.parse(file);

// const uniqueObj = obj.reduce((acc, curr) => {
//   const existingItem = acc.find((item) => item.partnumber === curr.partnumber);
//   if (existingItem) {
//     existingItem.quantity += curr.quantity;
//   } else {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// fs.writeFileSync('./magstore/unique-eski-yeni2.json', JSON.stringify(uniqueObj));


// const fs = require('fs');

// const file = fs.readFileSync('./magstore/unique-eski-yeni.json');

// const obj = JSON.parse(file);

// const emptyParca = obj.filter(item => item.compatibledescription!=null ?  item.compatibledescription[0].parca==="":null);

// var list=[];
// list.push(emptyParca);


// fs.writeFileSync('./magstore/unique-eski-yeni3.json', JSON.stringify(list));
