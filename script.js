"use strict";
import { gsap } from "gsap";
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
  HTML.block2.addEventListener("mouseover", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock2");
    });
  });
  HTML.block2.addEventListener("mouseout", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock2");
    });
  });
  HTML.block3.addEventListener("mouseover", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock3");
    });
  });
  HTML.block3.addEventListener("mouseout", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock3");
    });
  });
  HTML.block4.addEventListener("mouseover", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock4");
    });
  });
  HTML.block4.addEventListener("mouseout", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock4");
    });
  });
}
