(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  // The SpeechRecognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  var recognition = new SpeechRecognition();
  // This makes sure that results are available while we are speaking and not after we are done speaking.
  recognition.interimResults = true;

  // use document.createElement to create a paragraph and append it to the .words div
  var p = document.createElement('p');
  var words = document.querySelector('.words');
  words.appendChild(p);

  // Add transcripts
  recognition.addEventListener('result', function (e) {
    var transcript = Array.from(e.results)
    // each 0th element of the list is the text data we need
    .map(function (result) {
      return result[0].transcript;
    }).join('');

    var NSFWScript = transcript.replace(/poop|poo|shit|dump|bitch/gi, '💩');
    p.textContent = NSFWScript;

    // to avoid the <p> get replaced in the DOM
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
  });

  // set recognition.addEventListener('end', recognition.start) again
  // so that works for more than one paragraph
  recognition.addEventListener('end', recognition.start);
  recognition.start();
})();

},{}]},{},[1]);
