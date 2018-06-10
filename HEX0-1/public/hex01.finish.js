(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _timer = require('./timer');

var _timer2 = _interopRequireDefault(_timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//
(0, _timer2.default)();
//
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
        var time = parseDate(data.timeStamp);
        console.log(time);
        rederResult('<li>' + data.nickName + ' (' + email.value + ') @ ' + time + ' <span class="successMsg">\u5831\u540D\u6210\u529F\uFF01</span></li>');
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

function parseDate(timeStamp) {
  var dateObject = new Date(timeStamp);
  var year = dateObject.getFullYear(),
      month = dateObject.getMonth() + 1,
      day = dateObject.getDate(),
      hour = dateObject.getHours(),
      min = dateObject.getMinutes();
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
}

form.addEventListener('submit', submitForm);

},{"./timer":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderCoundown() {

  // set our end time
  var endTime = new Date(1528084800000);

  // store clock div to avoid repeatedly querying the DOM
  var timer = document.querySelector('.timer');

  var remainingTime = getRemainingTime(endTime);

  // calculate remaining time
  function getRemainingTime(deadline) {
    var now = new Date().getTime();
    return deadline - now;
  }

  // prefix one-digit with zero
  function leadingZero(value) {
    return ('0' + Math.floor(value)).slice(-2);
  }

  // show time repeatedly
  function renderTime() {
    var remainingTime = getRemainingTime(endTime);
    var seconds = leadingZero(remainingTime / 1000 % 60);
    var minutes = leadingZero(remainingTime / (60 * 1000) % 60);
    var hours = leadingZero(remainingTime / (60 * 60 * 1000) % 24);
    var days = leadingZero(remainingTime / (24 * 60 * 60 * 1000));

    timer.innerHTML = 'Time remaining: ' + days + ':' + hours + ':' + minutes + ':' + seconds;

    // if remaining time more than one sec., update timer
    if (remainingTime >= 1000) {
      requestAnimationFrame(renderTime);
    }
  }

  // init
  if (remainingTime >= 1000) {
    requestAnimationFrame(renderTime);
  } else {
    timer.innerHTML = '<b>\u6642\u9593\u5230\u56C9\uFF0C\u6311\u6230\u5DF2\u958B\u59CB</b>';
  }
}

exports.default = renderCoundown;

},{}]},{},[1]);
