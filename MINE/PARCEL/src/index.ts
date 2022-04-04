import { qs } from "./domUtils";

console.log("Index.ts is running");

let playground = qs("section .playground");
playground.innerHTML = "This is the playground #001";
playground.style.backgroundColor = "#ff0";
playground.style.padding = ".5em";
