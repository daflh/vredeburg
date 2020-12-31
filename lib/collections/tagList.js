function fromEntries (iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;

    return obj;
  }, {});
}

/* Collection output format:
{
  tagName: numberOfPostsWithTagName,
  ...
}
*/
module.exports = (coll) => {
  const posts = require('./posts')(coll);

  const tagListArr = posts
    .reduce((tags, post) => {
      if ('tags' in post.data) {
        tags = tags.concat(post.data.tags);
      }

      return [...new Set(tags)];
    }, [])
    .map((tag) => ([
      tag,
      coll.getFilteredByTag(tag).length
    ]))
    .sort((a, b) => b[1] - a[1]);
    
  return fromEntries(tagListArr);
};
