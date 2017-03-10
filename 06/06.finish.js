(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var api = {
  numberWithCommas: function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  findMatcheLoc: function findMatcheLoc(query, locations) {
    return locations.filter(function (location) {
      // g: global (means any index of string); i: case insensitive,
      var regex = new RegExp(query, 'gi');
      return location.city.match(regex) || location.state.match(regex);
    });
  }
};

// -------------------------------------
// GET Data first
// set up functionality in place (filter data)
// Hooking it up to event listener
// as well as mutating DOM
// -------------------------------------
var url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var locations = [];

// return Promise
fetch(url).then(function (blob) {
  return blob.json();
}).then(function (data) {
  return locations.push.apply(locations, _toConsumableArray(data));
}).catch(function (err) {
  return console.log(err);
});

function displayMatches() {
  var _this = this;

  console.log(this.value);
  var matches = api.findMatcheLoc(this.value, locations);
  var reformat = matches.map(function (location) {
    var regex = new RegExp(_this.value, 'gi');
    // UI 強化
    var reCityName = location.city.replace(regex, '<span class="hl">' + _this.value + '</span>');
    var reStateName = location.state.replace(regex, '<span class="hl">' + _this.value + '</span>');

    return '\n      <li>\n        <span class="name">' + reCityName + ', ' + reStateName + '</span>\n        <span class="population">' + api.numberWithCommas(location.population) + '</span>\n      </li>\n    ';
  }).join('');
  // Put reformat array as a single string
  suggestions.innerHTML = reformat;
}

var searchInput = document.querySelector('.search');
var suggestions = document.querySelector('.suggestions');

// change event: unfocus the input field, press enter or click outside
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

},{}]},{},[1]);
