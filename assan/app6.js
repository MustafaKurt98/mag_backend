// obje bolucu
const fs = require('fs');

fs.readFile('ilk1500-2126.json', 'utf8', (err, data) => {
  if (err) throw err;

  const objeler = JSON.parse(data);

  const ilk_1000_obje = objeler.slice(500, 627);

  const yeni_dosya = JSON.stringify(ilk_1000_obje);

  fs.writeFile('kalan-127.json', yeni_dosya, (err) => {
    if (err) throw err;
    console.log('Yeni dosya oluşturuldu!');
  });
});