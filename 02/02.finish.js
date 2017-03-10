(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// make each hand as global variables
var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setDate() {
	// plus 90˚ to reset hands start from 12
	var now = new Date();
	var seconds = now.getSeconds();
	var secondsDeg = seconds / 60 * 360 + 90;
	secondHand.style.transform = 'rotate(' + secondsDeg + 'deg)';

	var mins = now.getMinutes();
	var minsDeg = mins / 60 * 360 + 90;
	minsHand.style.transform = 'rotate(' + minsDeg + 'deg)';

	var hour = now.getHours();
	// let hourhand move slightly according to current minutes ((mins / 60 / 12) * 360)
	var hourDeg = hour / 12 * 360 + mins / 60 / 12 * 360 + 90;
	hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
}

setInterval(setDate, 1000);

},{}]},{},[1]);
