// index.html javascript

import { qs } from "./domUtils";

console.log("We started this bitch");

let btn: Element = qs(".btn");
btn.addEventListener("click", (e: Event) => {
  console.log("we clicked this.... bitch");
});
console.log("Yeah bitch, we ended this thing");

export { btn };
