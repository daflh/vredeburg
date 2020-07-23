const htmlmin = require("html-minifier");

module.exports = (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        });
    }
    return content;

};