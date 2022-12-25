"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


const createDiv = (tagName, className, content) => {
  const div = document.createElement(tagName);
  if (className) {
    div.setAttribute("class", className);
  }
  if (content) {
    div.innerHTML = content;
  }
  return div;
}


