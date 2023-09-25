function processMermaidBlockList(page) {
  const mermaidRegex = /^[ \t]*```\s*mermaid[ \t]*$([^`]*(?:`[^`]+)*)```$/igm;
  page.content = page.content.replace(mermaidRegex, '<div class="mermaid">$1</div>');
  return page;
}

module.exports = {
  website: {
    assets: './dist',
    css: [
      'mermaid/mermaid.css'
    ],
    js: [
      'book/plugin.js'
    ]
  },
  hooks: {
    'page:before': processMermaidBlockList
  }
};
