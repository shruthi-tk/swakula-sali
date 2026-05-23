const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeUrl(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    let text = $('.post-body').text().replace(/\s+/g, ' ').trim();
    if (!text) {
      text = $('body').text().replace(/\s+/g, ' ').trim();
    }
    return text.substring(0, 3000); // just get up to 3000 chars to avoid junk
  } catch (err) {
    return "Error scraping: " + err.message;
  }
}

async function main() {
  const urls = [
    "http://www.swakulasali.co.in/p/swakulasali-samaja-weaver-hyderabad.html",
    "http://www.swakulasali.co.in/p/samyuktha-swakulasali.html",
    "https://swakulasaliindia.blogspot.com/p/b-e-swakula.html",
    "http://www.swakulasali.co.in/p/sri-jihveshwara-vidyabhirudhi.html",
    "http://www.swakulasali.co.in/p/14th-mahaparishad.html",
    "http://www.swakulasali.co.in/p/mahaparishad.html"
  ];
  
  let result = "";
  for (const url of urls) {
    console.log("Fetching " + url);
    const text = await scrapeUrl(url);
    result += `\n\n=== URL: ${url} ===\n${text}\n`;
  }
  
  fs.writeFileSync('additional_scraped.txt', result);
  console.log("Done scraping additional pages.");
}

main();
