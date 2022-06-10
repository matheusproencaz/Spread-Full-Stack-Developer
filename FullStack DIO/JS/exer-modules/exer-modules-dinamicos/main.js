const btn = document.createElement("button");
const body = document.querySelector("body");

btn.innerText = "Botão";
body.appendChild(btn);

btn.addEventListener("click", async () => {
    const { paintRed } = await import('./modules/metodos.js');

    paintRed(body);
});