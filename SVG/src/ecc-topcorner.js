(function () {
  let cmd2 = document.getElementById("cmd2");
  cmd2.addEventListener("click", function () {
    let shape = document.getElementById("shape2"),
      nav = document.getElementById("nav");

    console.log(shape, nav);
    shape.setAttribute("viewBox", "0 0 100 100");
  });

  function positionShape(box) {
    let shapeContainer = document.getElementById("shape_container"),
      theShape = shapeContainer.firstElementChild,
      theShapeG = theShape.firstElementChild,
      theShapeDimensions = theShapeG.getBoundingClientRect(),
      style = `position:absolute; top:${Math.round(
        box.bottom
      )}px; left:${Math.round(
        box.left + box.width / 2 - theShapeDimensions.width / 2
      )}px; width:${Math.round(theShapeDimensions.width)}px`;

    shapeContainer.setAttribute("style", style);

    console.log("g:", theShapeDimensions, "box", box);

    // let
    // container = document.getElementById("subnav_container"),
    // old = document.getElementById("cloned_shape"),
    //   shape = document.getElementById("svg_to_clone"),

    //   clone = shape.cloneNode(true),
    //   style = `position:absolute; top:${Math.round(
    //     box.bottom
    //   )}px; left:${Math.round(box.left - 150 / 2)}px; width:150px; `;

    // if (old) {
    //   old.remove();
    // }

    // clone.id = "";
    // container.id = "cloned_shape";
    // container.setAttribute("class", "svg-container");
    // container.setAttribute("style", style);
    // container.appendChild(clone);

    // document.body.appendChild(container);

    // console.log(box, clone);
  }

  // get the coordinates of the clicked item
  let a = document.querySelectorAll("nav ul li a");
  for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function (e) {
      e.preventDefault();
      let x = e.clientX,
        y = e.clientY,
        box = e.target.getBoundingClientRect();
      positionShape(box);

      //   console.log(
      //     "box",
      //     box,
      //     "x",
      //     x,
      //     "y",
      //     y,
      //     e.currentTarget,
      //     e.currentTarget.offsetWidth,
      //     e.currentTarget.offsetHeight
      //   );
    });
  }
})();
