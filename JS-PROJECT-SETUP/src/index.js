console.log("Hello Webpack Project");

// let btns = document.getElementsByTagName("button");
// if (btns && btns.length > 0) {
//   console.log("there are btns", btns);
//   btns[0].onclick = function (e) {
//     console.log(e.target, "clicked", "first btn clicked");
//   };
// }

let btn = document.getElementById("click_me");
btn.onclick = (e) => {
  console.log("arrow function clicked", e);
};
