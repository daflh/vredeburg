(async function() {

    let timeout;

    const params = new URL(window.location.href).searchParams;
    let query = params.get("q");
    let start = Number(params.get("start")) || 1;
    let size = Number(params.get("size")) || 12;

    const posts = await fetch("/index.json").then(res => res.json());

    const wrapper = document.getElementById("wrapper");
    const searchBox = document.getElementById("searchbox");
    const info = document.getElementById("info");

    if (query !== null) {
        query = query.toLowerCase();
        searchBox.value = query;
    }

    searchBox.addEventListener("keyup", function(e) {
        this.value = this.value.toLowerCase();
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            query = this.value;
            history.replaceState(null, null, `?q=${this.value}&start=${start}&size=${size}`);
            display();
        }, 500);
    });

    display();

    function display() {
        wrapper.innerHTML = "";
        if (query === null || query === "") return info.textContent = "Enter keywords in the search box above";
        let filteredPosts = posts.filter(post => {
            let postTitle = post.title.toLowerCase();
            return postTitle.indexOf(query) !== -1;
        });
        if (filteredPosts.length === 0) return info.textContent = `No results found for "${query}"`;
        let resultsFound = filteredPosts.length;
        let slicedPosts = filteredPosts.slice(start - 1, start + size - 1);
        let lastSliced = start + slicedPosts.length - 1;
        let show = start < lastSliced ? `items ${start}-${lastSliced}` : `item ${start}`;
        info.textContent = `Showing ${show} of ${resultsFound} result${resultsFound > 1 ? "s" : ""} found`;
        slicedPosts.forEach(post => {
            let {url, title, date} = post;
            wrapper.innerHTML += `
            <div class="flex-single sm:flex-double md:flex-triple self-stretch p-2 mb-2">
                <a href="${url}">
                    <div class="rounded bg-gray-100 shadow-md h-full px-6 py-5">
                        <div class="font-semibold text-lg mb-2 text-gray-900">${title}</div>
                        <p class="text-gray-600 text-base mb-1" title="Published date">${date}</p>
                    </div>
                </a>
            </div>
            `;
        });

    }

})();