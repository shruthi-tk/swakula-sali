const fs = require('fs');

async function fetchPage(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    // We want to extract text from all div class='post-body'
    const matches = text.matchAll(/<div class=['"]post-body[^>]*>([\s\S]*?)<\/div>\s*<(div class=['"]post-footer|h3 class=['"]post-title)/gi);
    
    let result = [];
    for (const match of matches) {
      let content = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      result.push(content);
    }
    
    if (result.length === 0) {
        // Fallback: extract everything inside 'main' or 'blog-posts'
        const mainMatch = text.match(/<div class=['"]blog-posts[^>]*>([\s\S]*?)<div class=['"]blog-pager['"]/i);
        if (mainMatch) {
            return mainMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }
        // Fallback 2: just body
        const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            return bodyMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }
    }
    
    return result.join('\n\n---\n\n');
  } catch(e) {
    return "Error: " + e.message;
  }
}

async function main() {
  console.log("Fetching home page...");
  const content = await fetchPage("http://www.swakulasali.co.in/");
  fs.writeFileSync('home_scraped.txt', content);
  console.log("Scraping complete, saved to home_scraped.txt. Length: " + content.length);
}

main();
