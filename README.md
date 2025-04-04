## Mermaid plugin for GitBook

Plugin for [GitBook](https://github.com/GitbookIO/gitbook) 3 which renders [Mermaid](https://github.com/knsv/mermaid) diagrams and flow charts detected in the book markdown.

Support `mermaid` version `10.6.1` so that it can cover the major features of `mermaid` in latest version.

### How to install it?

You can use install via **NPM**:

```
npm install gitbook-plugin-mermaid-fox
```

And use it for your book with in the book.json:

```
{
  "plugins": ["mermaid-fox"]
}
```

If error occur like `TypeError: cb.apply is not a function`,we can find solution at [Gitbook-cli install error TypeError: cb.apply is not a function inside graceful-fs](https://stackoverflow.com/questions/64211386/gitbook-cli-install-error-typeerror-cb-apply-is-not-a-function-inside-graceful)

### How to use it?

Just put the code into fenced code block and tag it **mermaid** key word like this:

    ```mermaid
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
    ```

## 2024-06 update

> Add zoom and SVG export feature for a better user experience.

* Using following config  in `book.js` to enable zoom or export

  ```javascript
  "mermaid-fox":{
      "zoom": true,
      "download": true
  }
  ```

  Default config:

  ```javascript
  "mermaid-fox":{
      "zoom": false,
      "download": true
  }
  ```

* svg export

  ![SVG Export Feature](/images/svg-export-feature.png "SVG Export Feature")

* zoom in and out

  ![SVG Zoom Feature](/images/svg-zoom-feature.png "SVG Zoom Feature")