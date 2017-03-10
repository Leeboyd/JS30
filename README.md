# Javascript 30
> 練習內容：_ES6、原生ＪＳ_

**Exercise 1: Drum**

> Complete Date: Feb 16, 2016

+ 偵測鍵盤事件
+ 原生ＤＯＭ節點事件監聽
+ 其他：音效播放、Array.from方法
+ 參考：
    + [Array.from](http://wiki.jikexueyuan.com/project/es6/array.html)

**Exercise 2: JSCLOCK**

> Complete Date: Feb 20, 2016

+ 原生時間API
+ js 操作節點 style 更動

**Exercise 3: CSS Variables**

> Complete Date: Feb 20, 2016

+ 原生 CSS 變數
+ HTMLElement.dataset
+ 變數宣告預設值
+ 參考：
    + [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
    + [Using CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

**Exercise 4: Array Cardio Day 1**

> Complete Date: Feb 21, 2017

+ Array.prototype 方法, e.g. reduce()
+ HTMLElement.querySelector 簡易爬蟲
+ console.table(), Array destructuring

**Exercise 5: CSS Flex**

> Complete Date: Feb 22, 2017

+ CSS Flexbox
+ CSS Animation (transition)
+ 參考：
  + [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  + [Flexbox Froggy](http://flexboxfroggy.com/)

**Exercise 6: Fetch (XMLHttpRequest)**

> Complete Date: Feb 23, 2017

+ Fetch API
+ new RegExp(pattern, flags)
+ HTML mutation
+ 參考：
  + [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) 
  + [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 
  
**Exercise 7: Array Cardio Day 2**

> Complete Date: Mar 2, 2017

  + [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
  + [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
  + [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
  + [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

**Exercise 8: Canvas**

> Complete Date: Mar 3, 2017

+ 邏輯順序， `'mousemove'` 事件更新滑鼠座標位置，當 `'mousedown'` 時，於 `'mousemove'` 事件時再掛上畫圖的處理
+ `'mouseup'`、`'mouseout'` 移除事件監聽處理
+ 參考 [nitishdayal](https://github.com/nitishdayal/JavaScript30) 重構，使用匿名函數隱藏邏輯，避免污染全域scope

**Exercise 9: Dev Tools Domination**

> Complete Date: Mar 3, 2017

**Exercise 10: Hold Shift and Check**

> Complete Date: Mar 4, 2017

+ 第一版，邏輯順序，在上一個 `checked` 的 todo，按住 `shift` 點另一個 todo 時，兩 todo 之間的都要 `checked`
+ [nitishdayal](https://github.com/nitishdayal/JavaScript30) 版，防止 v1 第一次直接按shift，導致全部都 `checked`,
使用 `index` 讓程式更直覺。

**Exercise 11: HTML5 player**

> Complete Date: Mar 4, 2017

+ 一步一步實作播放器的行為
  * toggle 按鈕與影片 `play`/`pause`，並切換按鈕顯示
  * 快進與退格
  * 進度條樣式
  * 點擊/拖曳進度條，並更新影片進度

**Exercise 12: KeyCode Detection**

> Complete Date: Mar 6, 2017

+ 有趣的 Key Sequence Detection

**Exercise 13: Scroll Event**

> Complete Date: Mar 8, 2017

+ 計算視窗、`scrollY`等各種高度，以實現CSS transition
+ `debounce()` 以達效能優化

**Exercise 14: By Reference vs By Value**

> Complete Date: Mar 10, 2017

<iframe src="//www.slideshare.net/slideshow/embed_code/key/4W9ccEGKpyBJXN" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/boylee18/js-basic-by-value-versus-by-reference" title="JS Basic: By value versus By reference" target="_blank">JS Basic: By value versus By reference</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/boylee18">Boy Lee</a></strong> </div>

+ 更詳細說明參考我的 Medium 👉 [JS基礎：Primitive type v.s Object types](https://medium.com/@jobboy0101/js%E5%9F%BA%E7%A4%8E-primitive-type-v-s-object-types-f88f7c16f225#.cqguxnzci)

# 參考資料

1. [Javascript 30](https://javascript30.com/)
