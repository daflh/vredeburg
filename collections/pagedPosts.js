const posts = require("./posts");
const paginate = require("../src/_data/site").paginate;

module.exports = (coll) => {
    const allPosts = posts(coll);
    let postsPerPage = paginate;
    let paginated = [];
    
    let i;
    let numberOfPages = Math.ceil(allPosts.length / postsPerPage);
    for (i = 0; i < numberOfPages; i++) {
        let startFrom = i * postsPerPage;
        let item = {
            index: i,
            items: allPosts.slice(startFrom, startFrom + postsPerPage)
        }
        if (i === 0) item.first = true;
        if (i === numberOfPages - 1) item.last = true;
        paginated.push(item);
    }

    return paginated;
}