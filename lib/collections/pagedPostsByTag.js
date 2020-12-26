const tags = require("./tagList");
const paginate = require("../../src/_data/site").paginate;

module.exports = (coll) => {
    const tagList = Object.keys(tags(coll));
    let tagWithPosts = tagList.map((tag) => ({
        name: tag,
        items: [...coll.getFilteredByTag(tag)].reverse()
    }));
    let postsPerPage = paginate;
    let paginated = [];

    tagWithPosts.forEach((tag) => {
        let numberOfPages = Math.ceil(tag.items.length / postsPerPage);

        for (let i = 0; i < numberOfPages; i++) {
            let startFrom = i * postsPerPage;
            let item = {
                name: tag.name,
                index: i,
                items: tag.items.slice(startFrom, startFrom + postsPerPage)
            };

            if (i === 0) item.first = true;
            if (i === numberOfPages - 1) item.last = true;

            paginated.push(item);
        }
    });

    return paginated;
};