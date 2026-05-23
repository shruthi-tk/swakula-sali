const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('dump.html', 'utf8');
const $ = cheerio.load(html);
const text = $('body').text().replace(/\s+/g, ' ').trim();
fs.writeFileSync('dump_text.txt', text);
console.log("Extracted text length: " + text.length);
