const fs = require('fs');
const VCard = require('vcard-creator').default


/* fs.readFile('gokcekmakina.com_users.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const [name] = line.split('@')
        const [email] = line.split(',');
        const myVCard = new VCard()
        myVCard
            .addName(name+'(gokcekmakina)')
            .addEmail(email)
        fs.mkdir('gokcek', { recursive: true }, (err) => {
            if (err) throw err;
        }
        )
        fs.writeFile(`gokcek/${name}(gokcekmakina).vcf`, myVCard.toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    )
}
) */
fs.readFile('gokcekgroup.com_users.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const [name] = line.split('@')
        const [email] = line.split(',');
        const myVCard = new VCard()
        myVCard
            .addName(name+'(gokcekgroup)')
            .addEmail(email)
        
        fs.writeFile(`gokcek/${name}(gokcekgroup).vcf`, myVCard.toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    )
}
)

fs.readFile('magelektronik.com_users.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const [name] = line.split('@')
        const [email] = line.split(',');
        const myVCard = new VCard()
        myVCard
            .addName(name+'(magelektronik)')
            .addEmail(email)
        
        fs.writeFile(`gokcek/${name}(magelektronik).vcf`, myVCard.toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    )
}
)

fs.readFile('magrubber.com_users.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const [name] = line.split('@')
        const [email] = line.split(',');
        const myVCard = new VCard()
        myVCard
            .addName(name+'(magrubber)')
            .addEmail(email)
        
        fs.writeFile(`gokcek/${name}(magrubber).vcf`, myVCard.toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    )
}
)
fs.readFile('gokcekismakinalari.com_users.txt', 'utf8', function (err, data) {
    if (err) throw err;
    const lines = data.split('\n');
    lines.forEach(line => {
        const [name] = line.split('@')
        const [email] = line.split(',');
        const myVCard = new VCard()
        myVCard
            .addName(name+'(gokcekismakinalari)')
            .addEmail(email)
        
        fs.writeFile(`gokcek/${name}(gokcekismakinalari).vcf`, myVCard.toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    )
}
)
