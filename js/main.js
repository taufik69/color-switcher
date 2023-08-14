const btn = document.querySelector(".btn");
let color_ul = document.querySelector(".color_ul");
let allItem = color_ul.querySelectorAll("li");
allItem.forEach((item, i) => {
  item.addEventListener("click", (items) => {
    let { id } = items.target;
    if (id == "black") {
      document.body.classList.toggle("black_theme");
    } else if (id == "yellow") {
      document.body.classList.toggle("yellow_theme");
      allItem[i].style.border = "1px solid green";
    } else if (id == "red") {
      document.body.classList.toggle("red_theme");
      allItem[i].style.border = "1px solid black";
    } else {
      document.body.classList.toggle("normal_theme");
    }
  });
});

// btn.addEventListener("click", () => {
//   document.body.classList.toggle("black_theme");
//   if (document.body.classList.contains("black_theme")) {
//     btn.innerHTML = "day";
//   } else {
//     btn.innerHTML = "Night";
//   }
// });
