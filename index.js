const key = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const form = document.querySelector("form");
const inputSearch = docuument.getElementById("input-search");
const results = document.querySelector(".results");
const moreImg = document.getElementById("more-img");

function imageSearch() {
    inputData = inputSearch.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

}