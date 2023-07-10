const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = docuument.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreBtnEl = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

// Images searching
async function searchImages() {
    inputData = inputSearchEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsEl.innerHTML = "";
    }

    const results = data.results;

   
    page ++;

    if (page > 1) {
        showMoreBtnEl.style.display = "block";
    };
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1; 
    searchImages();
});

showMoreBtnEl.addEventListener("click", () => {
    searchImages();
});