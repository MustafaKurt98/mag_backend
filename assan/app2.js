const fs = require('fs');

// Dosya okuma işlemi
const data = fs.readFileSync('unique5-mag_guncel.json');
const jsonData = JSON.parse(data);

// Yeni bir dizi oluşturmak için filter() yöntemini kullanın
const partnumbers = jsonData.filter(item => Array.isArray(item.image) && item.image.length === 0)
    .map(item => ({ partnumber: item.partnumber }));

// Yeni dosyaya yazdırma işlemi
const newData = JSON.stringify(partnumbers);
fs.writeFileSync('photo-done.json', newData);
