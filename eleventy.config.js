const pluginTailwind = require("eleventy-plugin-tailwindcss");

module.exports = (config) => {

    config.addPlugin(pluginTailwind, {
        src: "src/assets/css/*"
    });

    config.setDataDeepMerge(true);

    config.addPassthroughCopy("src/assets/img/**/*");
    config.addPassthroughCopy({ "src/posts/img/**/*": "assets/img/" });

    config.addLayoutAlias('default', 'layouts/default.njk');
    config.addLayoutAlias('post', 'layouts/post.njk');

    config.addFilter("readableDate", require("./lib/readableDate"));
    config.addFilter("minifyJs", require("./lib/minification/minifyJs"));

    config.addTransform("minifyHtml", require("./lib/minification/minifyHtml"));

    config.addCollection("posts", require("./lib/collections/posts"));
    config.addCollection("tagList", require("./lib/collections/tagList"));
    config.addCollection("pagedPosts", require("./lib/collections/pagedPosts"));
    config.addCollection("pagedPostsByTag", require("./lib/collections/pagedPostsByTag"));
    
    return {
        dir: {
            input: "src",
            output: "dist"
        },
        // pathPrefix: "/subfolder/",
        templateFormats: ["md", "njk", "html"],
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }

}
