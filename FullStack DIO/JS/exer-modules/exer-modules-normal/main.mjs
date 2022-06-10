import { mostraIdade, mostraCidade, mostraHobby } from "./funcoes.mjs";

let h2s = document.querySelectorAll("h2");

h2s[0].innerText = mostraIdade("Robson", 33);
h2s[1].innerText = mostraCidade("Robson", "Blumenau");
h2s[2].innerText = mostraHobby("Robson", "Pescar");