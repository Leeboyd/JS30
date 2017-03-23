(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  var video = document.querySelector('.player');
  var canvas = document.querySelector('.photo');
  var ctx = canvas.getContext('2d');
  var strip = document.querySelector('.strip');
  var snap = document.querySelector('.snap');

  // use the Navigator and mediaDevices web APIs to ask permission to access the user's webcam
  var getVideo = function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (localMediaStream) {
      // set the source object of the video element as the localMediaStream
      video.srcObject = localMediaStream;
      video.play();
    }).catch(function (err) {
      console.error('We require additional permission!', err);
    });
  };
  // Draw the current video element on to the canvas.
  var paintToCanavas = function paintToCanavas() {
    var width = video.videoWidth;
    var height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(function () {
      ctx.drawImage(video, 0, 0, width, height);
      // 濾鏡處理
      // let pixels = ctx.getImageData(0, 0, width, height)
      // pixels = greenScreen(pixels)
      // ctx.putImageData(pixels, 0, 0)
    }, 16);
  };

  var takePhoto = function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    var data = canvas.toDataURL('image/jpeg');
    var link = document.createElement('a');
    link.href = data;
    link.innerHTML = '<img src="' + data + '" alt="your screenshot" />';
    strip.insertBefore(link, strip.firsChild);
  };

  getVideo();

  // Attach an event listener to the video HTML element that will call the paintToCanvas function on the 'canplay' event, 
  // and attach an event listener to the button HTML element that will call the takePhoto function on a 'click' event.
  video.addEventListener('canplay', paintToCanavas);
  document.querySelector('.takePhoto').addEventListener('click', takePhoto);
})();

},{}]},{},[1]);
