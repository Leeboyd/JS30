(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var inputs = document.querySelectorAll('.controls input');
function updateStyle() {
  // #1 HTMLElement.dataset:
  // allow us to access custom data attributes (data-*) set on the element
  // It is a [object DOMStringMap], one entry for each custom data attribute.
  // Note that the dataset property itself can be read, but not directly written.

  // #2 with default value declaration
  var suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}
inputs.forEach(function (input) {
  return input.addEventListener('change', updateStyle);
});

},{}]},{},[1]);
