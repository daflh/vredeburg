module.exports = (coll) => {
    const posts = [...coll.getFilteredByGlob("src/posts/*.md")];
    posts.reverse();
    return posts;
}