const fs = require('fs');


fs.readFile('mag_guncel.json', 'utf-8', async (err, res) => {
    res = JSON.parse(res);
    var list = [];
    console.log(list);
    fs.writeFile('list.json', JSON.stringify(list), (err) => {
        if (err) {
            console.log(err);
        }
    })


})

