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

var counter = document.querySelector('.boy-counter a');
var email = document.querySelector('input[type=email]');
var form = document.querySelector('.boy-form');
var list = document.querySelector('.boy-resultlist');
var button = document.querySelector('button');

var searchResult = [];

api.get_signUpTotal().then(function (blob) {
  return blob.json();
}).then(function (data) {
  return counter.innerHTML = data.total;
}).catch(function (err) {
  return console.log(err);
});

function rederResult(result) {
  searchResult.push(result);
  list.innerHTML = searchResult.reverse().join('');
  email.value = '';
}

function toggleLoading(toggle) {
  button.disabled = toggle;
  button.innerHTML = toggle ? 'LOADING...<span class="boy-loading"></span>' : 'check';
}

function submitForm(e) {
  e.preventDefault();
  if (email.value) {
    var data = {
      "email": email.value
    };
    toggleLoading(true);

    api.post_isSignUp(data).then(function (blob) {
      return blob.json();
    }).then(function (data) {
      if (data.success) {
        rederResult('<li>' + data.nickName + ' (' + email.value + ') @ ' + data.timeStamp + ' <span class="successMsg">\u5831\u540D\u6210\u529F\uFF01</span></li>');
        toggleLoading(false);
      } else {
        throw new Error(data.message);
      }
    }).catch(function (err) {
      rederResult('<li>(' + email.value + ') <span class="errorMsg">' + err.message + '</span></li>');
      toggleLoading(false);
    });
  } else {}
}

form.addEventListener('submit', submitForm);

},{}]},{},[1]);
