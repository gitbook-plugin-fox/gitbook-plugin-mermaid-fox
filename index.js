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
        'page:before': function(page) {
            let enableDownload = true;
            let config = this.book.config.values.pluginsConfig['mermaid-fox'];
            if (!!config && 'download' in config) {
                enableDownload = config['download'];
            }
            const mermaidRegex = /^[ \t]*```\s*mermaid[ \t]*$([^`]*(?:`[^`]+)*)```$/igm;
            let download = '<svg width="15" height="15" viewBox="0 0 8 8" fill="#707070" xmlns="http://www.w3.org/2000/svg"><path d="m3 0v3h-2l3 3 3-3h-2v-3zm-3 7v1h8v-1z"/></svg>';
            let newContent = '<div><div class="mermaid">$1</div></div>';
            if (enableDownload) {
                newContent = '<div><div class="download" style="float:right;padding-right:35px;cursor:pointer">' + download + '</div><div class="mermaid">$1</div></div>';
            }
            page.content = page.content.replace(mermaidRegex, newContent);
            return page;
        }
    }
};