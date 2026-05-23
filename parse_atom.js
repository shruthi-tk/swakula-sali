const fs = require('fs');

async function main() {
  try {
    const res = await fetch("http://www.swakulasali.co.in/feeds/posts/default?alt=json");
    const data = await res.json();
    
    let result = "";
    if (data.feed && data.feed.entry) {
      for (const entry of data.feed.entry) {
        const title = entry.title.$t;
        const content = (entry.content && entry.content.$t) || (entry.summary && entry.summary.$t) || "";
        // Strip html
        const cleanContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        result += `\n\n=== TITLE: ${title} ===\n${cleanContent}\n`;
      }
    } else {
        result = "No entries found in feed.";
    }
    
    fs.writeFileSync('atom_feed.txt', result);
    console.log("Atom feed parsed. Length: " + result.length);
  } catch (err) {
    console.error(err);
  }
}

main();
