(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var BASE_URL = 'https://www.thef2e.com/api/';
var api = {
  get_signUpTotal: function get_signUpTotal() {
    return fetch(BASE_URL + 'signUpTotal');
  },
  post_isSignUp: function post_isSignUp(data) {
    return fetch(BASE_URL + 'isSignUp', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
};

// return Promise
// fetch(url)
// .then(blob => blob.json())
// .then(data => locations.push(...data))
// .catch((err) => (console.log(err)))

var counter = document.querySelector('.message a');
var email = document.querySelector('input[type=email]');
var form = document.querySelector('.boy-form');

api.get_signUpTotal().then(function (blob) {
  return blob.json();
}).then(function (data) {
  return counter.innerHTML = data.total;
}).catch(function (err) {
  return console.log(err);
});

function submitForm(e) {
  e.preventDefault();
  if (email.value) {
    var data = {
      "email": email.value
    };
    api.post_isSignUp(data).then(function (blob) {
      return blob.json();
    }).then(function (data) {
      console.log(data);
    });
  } else {}
}

form.addEventListener('submit', submitForm);

},{}]},{},[1]);
