
const BASE_URL = "https://api.thecatapi.com/v1/images/search";

const API_KEY = "";

const getGatinhos = async() => {
    const img = document.querySelector("img");

    fetch(`${BASE_URL}?api_key=${API_KEY}`, { 
        method: "GET",
    })
    .then(res => res.json())
    .then((res) => {
        img.src = res[0].url
    })
    .catch(err => console.log(err));
};

getGatinhos();

const btn = document.querySelector("button");
btn.addEventListener('click', getGatinhos);