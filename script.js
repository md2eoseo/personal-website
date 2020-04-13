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

  HTML.block1.addEventListener("mouseenter", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock1");
    });
    animation_showing();
  });
  HTML.block1.addEventListener("mouseleave", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock1");
    });
  });
  HTML.block2.addEventListener("mouseenter", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock2");
    });
    animation_showing();
  });
  HTML.block2.addEventListener("mouseleave", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock2");
    });
  });
  HTML.block3.addEventListener("mouseenter", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock3");
    });
    animation_showing();
  });
  HTML.block3.addEventListener("mouseleave", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock3");
    });
  });
  HTML.block4.addEventListener("mouseenter", function () {
    HTML.block.forEach((ele) => {
      ele.classList.add("onBlock4");
    });
    animation_showing();
  });
  HTML.block4.addEventListener("mouseleave", function () {
    HTML.block.forEach((ele) => {
      ele.classList.remove("onBlock4");
    });
  });
}

function animation_showing() {
  gsap.fromTo(
    ".content",
    { scale: 0, opacity: 0 },
    {
      duration: 1,
      scale: 1,
      opacity: 1,
    }
  );
}
