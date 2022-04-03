import { qs } from "./domUtils";
console.log("We started this bitch");
var btn = qs(".btn");
btn.addEventListener("click", function (e) {
    console.log("we clicked this.... bitch");
});
console.log("Yeah bitch, we ended this thing");
export { btn };
