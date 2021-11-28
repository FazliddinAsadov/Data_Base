const info = document.getElementById("info");

const btns = document.querySelector(".btn");

let i = [];

btns.addEventListener("click", () => {
  const arr = prompt("telfon raqam");
  if (arr.includes("998")) {
    i.unshift(`<ol>${arr}</ol>`);
  } else {
    i.push(`<ol>${arr}</ol>`);
  }

  info.innerHTML = i.join(" ");
});
