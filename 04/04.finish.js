(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _const = require('./const');

var myConst = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var result1 = myConst.inventors.filter(function (inventor) {
  return inventor.year <= 1599 && inventor.year >= 1500;
});
console.table(result1);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
var result2 = myConst.inventors.map(function (inventor, index) {
  return inventor.first + ' ' + inventor.last;
});
console.log(result2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var result3 = myConst.inventors.sort(function (a, b) {
  if (a.year < b.year) {
    return -1;
  } else {
    return 1;
  }
});
// better solution
// const result31 = myConst.inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
console.table(result3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var result4 = myConst.inventors.reduce(function (pre, cur) {
  return pre + (cur.passed - cur.year);
}, 0);
console.log(result4);

// 5. Sort the inventors by years lived

// 做錯啦，誤解題目
// const result5 = myConst.inventors
// .map((inventor) => (inventor.passed - inventor.year))
// .sort((a, b) => (a > b ? 1 : -1))
// console.log(result5);

var result51 = myConst.inventors.sort(function (a, b) {
  var aMan = a.passed - a.year;
  var bMan = b.passed - b.year;
  return aMan > bMan ? 1 : -1;
});

console.table(result51);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const categoryDOM = document.querySelector('.mw-category')
// const linkList = categoryDOM.querySelectorAll('a')
// const streetArray = Array.from(linkList)
// .map((tag)=> tag.text)
// .filter((street) => street.includes('de'))
//
// console.log(streetArray);

// 7. sort Exercise
// Sort the people alphabetically by last name
var sortedPeople = myConst.people.sort(function (a, b) {
  var _a$split = a.split(', '),
      _a$split2 = _slicedToArray(_a$split, 2),
      aFirst = _a$split2[0],
      aLast = _a$split2[1];

  var _b$split = b.split(', '),
      _b$split2 = _slicedToArray(_b$split, 2),
      bFirst = _b$split2[0],
      bLast = _b$split2[1];

  return aLast > bLast ? 1 : -1;
});

console.log(sortedPeople);
// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// my solution
// const summary = {}
//
// data.reduce((pre, cur)=> {
//   if (pre === cur) {
//     summary[pre] += 1
//   } else {
//     summary[cur] ? summary[cur]+=1 :summary[cur]=1
//   }
//   return cur
// }, '')
//
// console.log(summary)

// 8.1 better solution
var commute = data.reduce(function (pre, cur) {
  if (!pre[cur]) {
    pre[cur] = 0;
  }
  pre[cur]++;
  return pre;
}, {});
console.log(commute);

},{"./const":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var inventors = exports.inventors = [{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }, { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 }, { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }, { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }, { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }, { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }, { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }, { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 }, { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 }, { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }];

var people = exports.people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

},{}]},{},[1]);
