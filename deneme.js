const PDFDocument = require('pdfkit');
const fs = require('fs');


const doc = new PDFDocument(
    { autoFirstPage: false }
);

const images = ['./img/denz_a10_catalog.jpg', './img/denz_a10_catalog2.jpg'];

// Her resim için bir döngü oluşturun
for (const image of images) {
    // Yeni bir sayfa ekleyin
    doc.addPage({ size: [621, 842] });

    // Resmi PDF belgesine ekleyin
    doc.image(image, 0, 0);
}

// PDF dosyasını kaydedin
doc.pipe(fs.createWriteStream('resimler.pdf'));
doc.end();