const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function sanitizeHtmlFile(filePath) {
  try {
    // Read file content
    let content = fs.readFileSync(filePath, 'utf8');

    // Use Cheerio to parse and sanitize HTML
    const $ = cheerio.load(content, {
      xmlMode: false,
      decodeEntities: false
    });

    // Remove HTML comments
    $('*').contents().filter(function() {
      return this.type === 'comment';
    }).remove();

    // Remove unnecessary whitespace
    $('*').each((i, elem) => {
      if (elem.type === 'tag') {
        // Trim text nodes
        $(elem).contents().filter((i, node) => node.type === 'text')
          .each((i, textNode) => {
            const text = $(textNode).text().trim();
            $(textNode).replaceWith(text ? text : '');
          });
      }
    });

    // Remove empty class and id attributes
    $('[class=""]').removeAttr('class');
    $('[id=""]').removeAttr('id');

    // Convert back to string
    const sanitizedContent = $.html();

    // Write back to file
    fs.writeFileSync(filePath, sanitizedContent);

    console.log(`Sanitized: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseAndSanitize(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      traverseAndSanitize(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.tsx') || file.endsWith('.jsx')) {
      sanitizeHtmlFile(fullPath);
    }
  });
}

// Start from src directory
const srcDir = path.join(process.cwd(), 'src');
traverseAndSanitize(srcDir);

console.log('HTML sanitization complete.');
