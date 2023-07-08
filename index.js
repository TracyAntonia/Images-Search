const key = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const form = document.querySelector("form");
const inputSearch = docuument.getElementById("input-search");
const results = document.querySelector(".results");
const moreImg = document.getElementById("more-img");

async function imageSearch() {
    inputData = inputSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        results.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const imageList = document.createElement("div");
        imageList.classList.add("results");
        const image = dicument.createElement("img");
        imageList.src = result.urls.small;
        imageList.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        // imageLink.target = 
        imageLink.textContent = result.alt_description;
        
        imageList.appendChild()
    }       
    );
}
