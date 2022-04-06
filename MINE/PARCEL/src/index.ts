import { qs } from "./domUtils";

console.log("Index.ts is running");

let playground = qs("section .playground");
playground.innerHTML = "This is the playground #001";
playground.style.backgroundColor = "#ff0";
playground.style.padding = ".5em";

let ol = document.createElement("ol");
let li = document.createElement("li");

ol.setAttribute("value", "3");

// Create a array of the attributes NamedNodeMap which is a collection of attributes but not an array
let attr = ol.attributes;
[...attr].forEach((a) => {
  console.log(a.name, a.value);
});
