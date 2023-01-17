const fs = require('fs');


fs.readFile('products.json', 'utf-8', async (err, res) => {
    res = JSON.parse(res);
    var list = [];
    res.map((item) => {
        item.image.map((item2) => {
            if(item2.includes('raidator-banner')){
                list.push(item);
            }else if(item2.includes('heatcore-banner')) {
                list.push(item);
            }else if(item2.includes('oilcooler-banner')){
                list.push(item);
            }
        })
    },
    )
    console.log(list);
    fs.writeFile('list.json', JSON.stringify(list), (err) => {
        if (err) {
            console.log(err);
        }
    })


})

