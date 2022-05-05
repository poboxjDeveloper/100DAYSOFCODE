(function () {
  let cmd2 = document.getElementById("cmd2");
  cmd2.addEventListener("click", function () {
    let shape = document.getElementById("shape2"),
      nav = document.getElementById("nav");

    console.log(shape, nav);
    shape.setAttribute("viewBox", "0 0 100 100");
  });

  // get the coordinates of the clicked item
  let a = document.querySelectorAll("nav ul li a");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function (e) {
      e.preventDefault();
      let x = e.clientX,
        y = e.clientY;
      console.log("x", x, "y", y, e.currentTarget, e.currentTarget.offsetWidth);
    });
  }
})();
