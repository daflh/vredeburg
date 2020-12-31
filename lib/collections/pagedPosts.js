const siteData = require('../../src/_data/site');

module.exports = (coll) => {
  const allPosts = require('./posts')(coll);

  const maxPostsPerPage = siteData.paginate;
  const numberOfPages = Math.ceil(allPosts.length / maxPostsPerPage);
  const pagedPosts = [];

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * maxPostsPerPage;
    const sliceTo = sliceFrom + maxPostsPerPage;

    pagedPosts.push({
      number: pageNum,
      posts: allPosts.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages
    });
  }

  return pagedPosts;
};
