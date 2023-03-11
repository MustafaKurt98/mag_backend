const fs = require('fs');

const file = fs.readFileSync('./magstore/unique-eski-yeni.json');

const obj = JSON.parse(file);

const uniqueObj = obj.reduce((acc, curr) => {
  const existingItem = acc.find((item) => item.partnumber === curr.partnumber);
  if (existingItem) {
    existingItem.quantity += curr.quantity;
  } else {
    acc.push(curr);
  }
  return acc;
}, []);

fs.writeFileSync('./magstore/unique-eski-yeni2.json', JSON.stringify(uniqueObj));
