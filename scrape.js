const fs = require('fs');

async function fetchPage(url) {
  try {
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/<div class='post-body[^>]*>([\s\S]*?)<\/div>\s*<(div class='post-footer|h3 class='post-title)/i) || 
                  text.match(/<div class='post-body entry-content'[^\>]*>([\s\S]*?)<div style='clear: both;'>/i) ||
                  text.match(/<div class="post-body[^>]*>([\s\S]*?)<\/div>/i);
                  
    if (match) {
      return match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    }
    
    // Fallback if regex fails, just extract everything inside <body> and strip tags, maybe a bit messy
    const bodyMatch = text.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        return bodyMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 2000) + "... (truncated)";
    }
    return "Could not extract content";
  } catch(e) {
    return "Error: " + e.message;
  }
}

async function main() {
  const urls = [
    {name: "Jihveshwara", url: "https://swakulasaliindia.blogspot.com/p/jihveshwara_17.html"},
    {name: "Ananthaswamy", url: "https://swakulasaliindia.blogspot.com/p/sri-anantha.html"},
    {name: "Ankini", url: "https://swakulasaliindia.blogspot.com/p/blog-page_20.html"},
    {name: "Swakulasalis", url: "https://swakulasaliindia.blogspot.com/p/comunity.html"}
  ];
  
  let result = "";
  for (const item of urls) {
    console.log("Fetching " + item.name);
    const content = await fetchPage(item.url);
    result += `\n--- ${item.name} ---\n${content}\n`;
  }
  
  fs.writeFileSync('scraped_history.txt', result);
  console.log("Scraping complete, saved to scraped_history.txt");
}

main();
