function processMermaidBlockList(page) {
  const mermaidRegex = /^[ \t]*```\s*mermaid[ \t]*$([^`]*(?:`[^`]+)*)```$/igm;
  let download='<svg width="15" height="15" viewBox="0 0 8 8" fill="#707070" xmlns="http://www.w3.org/2000/svg"><path d="m3 0v3h-2l3 3 3-3h-2v-3zm-3 7v1h8v-1z"/></svg>';
  page.content = page.content.replace(mermaidRegex, '<div><div class="download" style="float:right;padding-right:35px;cursor:pointer">'
                +download+'</div><div class="mermaid">$1</div></div>');
  return page;
}

module.exports = {
  website: {
    assets: 'dist',
    css: [
      'mermaid/mermaid.css'
    ],
    js: [
      'book/plugin.js',
	  'book/svg-pan-zoom.js'
    ]
  },
  hooks: {
    'page:before': processMermaidBlockList
  }
};