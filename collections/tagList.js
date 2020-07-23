const posts = require("./posts");

module.exports = (coll) => {
    const allPosts = posts(coll);
    const postsWithTags = allPosts.filter((item) => "tags" in item.data);
    const tagList = postsWithTags.map((item) => item.data.tags);
    const flattenedTag = [].concat.apply([], tagList);
    const uniqueTag = [...new Set(flattenedTag)];
    const tagWithItemLength = uniqueTag.map((tag) => {
        return [
            tag,
            coll.getFilteredByTag(tag).length
        ]
    });
    const sortedTag = tagWithItemLength.sort((a, b) => b[1] - a[1]);
    const tagObject = Object.assign({}, ...Array.from(sortedTag, ([k, v]) => ({[k]: v})));
    return tagObject;
}