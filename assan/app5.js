const fs = require('fs');

// İlk JSON dosyasını oku
const file1 = fs.readFileSync('bulunan.json');
const data1 = JSON.parse(file1);


const arr=[];
// Eşleşen nesnelerin listesini oluştur
const nonName = data


// Güncellenmiş JSON dosyasını kaydet
fs.writeFileSync('file1.json', JSON.stringify(data1, null, 2));
