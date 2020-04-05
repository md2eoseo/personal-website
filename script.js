"use strict";
window.addEventListener("DOMContentLoaded", start);

const HTML = {};

function start() {
  console.log("start()");

  HTML.center = document.querySelector("#center");
  HTML.block = document.querySelectorAll(".block");
  HTML.block1 = document.querySelector("#block1");
  HTML.block2 = document.querySelector("#block2");
  HTML.block3 = document.querySelector("#block3");
  HTML.block4 = document.querySelector("#block4");

  HTML.block1.addEventListener("mouseover", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock1");
    });
  });
  HTML.block1.addEventListener("mouseout", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock1");
    });
  });
}
