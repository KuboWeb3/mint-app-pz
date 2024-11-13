const fs = require("fs");

let addresses = [];

fs.readFileSync("addresses.txt", 'utf-8').split(/\r?\n/).forEach(line => {
    addresses.push({ address: line });
});

fs.writeFileSync("tokens.json", JSON.stringify(addresses), 'utf-8');