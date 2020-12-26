const posts = require('./posts');
const paginate = require('../../src/_data/site').paginate;

module.exports = (coll) => {
  const allPosts = posts(coll);
  const postsPerPage = paginate;
  const paginated = [];
  const numberOfPages = Math.ceil(allPosts.length / postsPerPage);

  for (let i = 0; i < numberOfPages; i++) {
    const startFrom = i * postsPerPage;
    const item = {
      index: i,
      items: allPosts.slice(startFrom, startFrom + postsPerPage)
    };

    if (i === 0) item.first = true;
    if (i === numberOfPages - 1) item.last = true;

    paginated.push(item);
  }

  return paginated;
};
