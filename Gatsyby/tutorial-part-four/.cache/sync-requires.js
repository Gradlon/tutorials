// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Gradlon\\Desktop\\tutorials\\Gatsyby\\tutorial-part-four\\src\\templates\\blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\Gradlon\\Desktop\\tutorials\\Gatsyby\\tutorial-part-four\\.cache\\dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\Gradlon\\Desktop\\tutorials\\Gatsyby\\tutorial-part-four\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Gradlon\\Desktop\\tutorials\\Gatsyby\\tutorial-part-four\\src\\pages\\index.js")),
  "component---src-pages-my-files-js": preferDefault(require("C:\\Users\\Gradlon\\Desktop\\tutorials\\Gatsyby\\tutorial-part-four\\src\\pages\\my-files.js"))
}

