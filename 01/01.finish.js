(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var api = {
	getAudioDom: function getAudioDom(event) {
		// 	const 不能重複賦值
		var audio = document.querySelector('audio[data-key="' + event.keyCode + '"]');
		var block = document.querySelector('.key[data-key="' + event.keyCode + '"]');
		if (!audio) return;
		// 每次播放前，都歸零
		block.classList.add('playing');
		audio.currentTime = 0;
		audio.play();
	},
	removeClass: function removeClass(event) {
		if (event.propertyName !== "transform") return;
		event.target.classList.remove('playing');
	}
};
// 偵測鍵盤事件，
// 找到對應得按鍵的音訊節點,
// error handling，沒有找到的處理
// 播放影音


// css transition 事件後
// 使之回復原狀

// Array.from http://wiki.jikexueyuan.com/project/es6/array.html
var blocks = Array.from(document.querySelectorAll('.key'));
// 轉成真正array 之後才能用 array 方法
blocks.forEach(function (key) {
	return key.addEventListener('transitionend', api.removeClass);
});

// 找到對應 key 的 div，
// 使之樣式放大
window.addEventListener('keydown', api.getAudioDom);

},{}]},{},[1]);
