const body = document.querySelector("body");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const footer = document.querySelector("footer");

let mode = false;

btn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    btn.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");

    mode = !mode;
    if(mode){
        return (
            h1.innerText = "Dark mode ON!", 
            btn.innerText = "Light Mode"
        )
    }

    h1.innerText = "Light mode ON!";
    btn.innerText = "Dark Mode"
});

