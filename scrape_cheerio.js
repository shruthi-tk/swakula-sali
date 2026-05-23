const cheerio = require('cheerio');
const fs = require('fs');

async function main() {
  try {
    const res = await fetch("http://www.swakulasali.co.in/");
    const html = await res.text();
    const $ = cheerio.load(html);
    
    let text = "";
    
    // Blogspot typically uses .post-body for post content
    const posts = $('.post-body');
    if (posts.length > 0) {
      posts.each((i, el) => {
        text += `\n--- POST ${i+1} ---\n`;
        text += $(el).text().replace(/\s+/g, ' ').trim();
      });
    } else {
      // Fallback: extract the whole body text
      text = $('body').text().replace(/\s+/g, ' ').trim();
    }
    
    fs.writeFileSync('home_cheerio_scraped.txt', text);
    console.log("Scraped " + text.length + " characters.");
  } catch (err) {
    console.error(err);
  }
}

main();
