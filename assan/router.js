const puppeteer = require("puppeteer");
const fs = require("fs");
const cheerio = require('cheerio');

const found = undefined;
var kalanparca = []
//18878 ürün kalmış
//12506 ürün bulmuş
//32360 ürün varmış
//976 ürün bulamamış
//süreyi 15 sn cektım 3 gün kaldı on numara teşekkür eder ve gidiy öptüm
fs.readFile("./aaa.json", "utf8", function (err, datas) {
  if (err) {
    console.log(err);
  }
  var veri22 = JSON.parse(datas);
  if (found == undefined) {
    let ar2 = [];

    veri22.map((keypart, index) => {
      setTimeout(() => {
        (async () => {
          try {
            const browser = await puppeteer.launch({
              headless: false,
              slowMo: 100,
            });
            const page = await browser.newPage();
            await page.goto("https://avspare.com/");
            //   await page.select(
            //     "#ctl00_ctl48_g_e2dc8536_73cb_49a0_9418_8bb9ef07e451_ctl00_ddlSehirler",
            //     "veri[index].plate.toString()"
            //   );
            var tarih = keypart.partnumber;
            //var tarih = "1P1216";
            await page.$eval(
              ".form-control.mr-sm-2.find_all.d-inline-block.w-auto",
              (e, tarih) => e.setAttribute("value", tarih),
              tarih
            );

            await page.click(".btn.btn-success.my-2.my-sm-0");
            await page.waitForTimeout(2000);

            let element = await page.$(".res_row a");
            if (element == null) {
              console.log("---" + keypart.partnumber + "---")
              kalanparca.push(keypart.partnumber)
              await page.close();
              await browser.close();
            } else {
              console.log("bulundu" + keypart.partnumber);

              await page.click(".res_row a");
              await page.waitForTimeout(2000);
              //col md-9 olanlar
              let elementColMd9 = await page.$(".col-md-9.col-lg-8.mb-4");
              if (elementColMd9 == null) {
                await page.waitForSelector(".col-12.col-lg-11.mb-4");

                let value = await page.$$eval(
                  ".col-12.col-lg-11.mb-4 h1 span",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                console.log(value)
                // let value2 = await page.$$eval(
                //   ".col-12.col-lg-11.mb-4 .mt-4.mb-3",
                //   (tds) =>
                //     tds.map((td) => {
                //       return td.innerText;
                //     })
                // );

                let value2 = await page.$$eval(
                  ".col-12.col-lg-11.mb-4 .mt-4.mb-3",
                  (tds) => {
                    // return td.innerHTML
                    var arr = []

                    for (var ij = 1; ij < tds[0].innerText.split("\n").length - 1; ij++) {
                      arr.push(tds[0].innerText.split("\n")[ij])
                    }

                    return arr
                  }
                );
                console.log(value2)
                let value3 = await page.$$eval(
                  ".col-12.col-lg-11.mb-4 .bold1",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                console.log(value3)
                let value4 = await page.$$eval(
                  ".col-12.col-lg-11.mb-4 .block_solid",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                var avsParArr = []

                let elementBaslik = await page.$(".col-12.col-lg-11.mb-4 .card-body .div_show_more");
                if (elementBaslik) {
                  let baslik1 = await page.$$eval(
                    ".col-12.col-lg-11.mb-4 .card-body .div_show_more",
                    (tds) => {
                      // return td.innerHTML
                      var arr = []
                      let dss = tds[0].innerHTML.split("<br>").map((key23, index23) => {
                        arr.push(key23)
                      })
                      return arr
                    }
                  );

                  if (baslik1.length > 0) {
                    baslik1.map((keyParca) => {
                      const $1 = cheerio.load(keyParca);

                      // Etiketler arasındaki metni çekin
                      const textBaslik = $1('span').text();
                      const textMakineAdi = $1('a');
                      var elementsArray = [];
                      textMakineAdi.each((i, element33) => {
                        elementsArray.push($1(element33).text());  // Diziye etiketlerin içeriklerini ekleyin
                      });
                      const objPart = {
                        parca: textBaslik.trim(),
                        list: elementsArray
                      }
                      avsParArr.push(objPart)

                    })

                  }

                }

                const jsonObject = {
                  name: value[0].trim(),
                  code: value2,
                  netweight: value3.length > 0 ? value3[0] : null,
                  relatedPart: value4.length > 0 ? value4[0] : null,
                  partNumber: keypart.partnumber,
                  compatibledescription: avsParArr.length > 0 ? avsParArr : null,
                };
                console.log(jsonObject)
                fs.readFile("./aaa2.json", "utf8", function (err, datas) {
                  var obj = JSON.parse(datas);
                  obj.push(jsonObject);
                  jsonStr = JSON.stringify(obj);
                  fs.writeFile("./aaa2.json", jsonStr, function (err) {
                    if (err) throw err;
                    console.log("Saved!");
                  });
                });
                await page.close();
                await browser.close();
              } else {
                await page.waitForSelector(".col-md-9.col-lg-8.mb-4");

                let value = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 h1 span",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                let value2 = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 .mt-4.mb-3",
                  (tds) => {
                    // return td.innerHTML
                    var arr = []

                    for (var ij = 1; ij < tds[0].innerText.split("\n").length - 1; ij++) {
                      arr.push(tds[0].innerText.split("\n")[ij])
                    }

                    return arr
                  }
                );
                let value3 = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 .bold1",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                let value4 = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 .block_solid",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                let baslik = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 .card.mb-4 .card-header h2",
                  (tds) =>
                    tds.map((td) => {
                      return td.innerText;
                    })
                );
                // const brContent = await page.evaluate(() => {
                //   let br = document.querySelector('br');
                //   return br.innerHTML;
                // });
                let baslik142 = await page.$(
                  ".col-md-9.col-lg-8.mb-4 .card.mb-4 .card-body .div_show_more b"

                );
                // console.log(baslik142)

                let baslik1 = await page.$$eval(
                  ".col-md-9.col-lg-8.mb-4 .card.mb-4 .card-body .div_show_more",
                  (tds) => {
                    // return td.innerHTML
                    var arr = []
                    let dss = tds[0].innerHTML.split("<br>").map((key23, index23) => {
                      arr.push(key23)
                    })
                    return arr
                  }
                );
                var avsParArr = []
                baslik1.map((keyParca) => {
                  const $1 = cheerio.load(keyParca);

                  // Etiketler arasındaki metni çekin
                  const textBaslik = $1('span').text();
                  const textMakineAdi = $1('a');
                  var elementsArray = [];
                  textMakineAdi.each((i, element33) => {
                    elementsArray.push($1(element33).text());  // Diziye etiketlerin içeriklerini ekleyin
                  });
                  const objPart = {
                    parca: textBaslik,
                    list: elementsArray
                  }
                  avsParArr.push(objPart)

                })





                const jsonObject = {
                  name: value[0],
                  code: value2,
                  netweight: value3.length > 0 ? value3[0] : null,
                  relatedPart: value4.length > 0 ? value4[0] : null,
                  partNumber: keypart.partnumber,
                  compatibledescription: avsParArr
                };
                fs.readFile("./aaa2.json", "utf8", function (err, datas) {
                  var obj = JSON.parse(datas);
                  obj.push(jsonObject);
                  jsonStr = JSON.stringify(obj);
                  fs.writeFile("./aaa2.json", jsonStr, function (err) {
                    if (err) throw err;
                    console.log("Saved!");
                  });
                });
                await page.close();
                await browser.close();
              }
            }
          } catch (err) {
            console.log(err)
          }
        })();
      }, 13000 * index);
    });
    fs.writeFile('bulunamayan.json', JSON.stringify(kalanparca), (erk, resk) => {
      console.log(erk)
    })
  } else {
    console.log("Bu noter zaten kayitli");
  }
});

const express = require("express");
const DutyRouter = express.Router();
DutyRouter.post("/dutyAll", () => { });
module.exports = DutyRouter;
