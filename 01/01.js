const api = {
	getAudioDom(event) {
		// 	const 不能重複賦值
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		const block = document.querySelector(`.key[data-key="${event.keyCode}"]`);
		if (!audio) return
		// 每次播放前，都歸零
		block.classList.add('playing')
		audio.currentTime = 0
		audio.play()
	},

	removeClass(event) {
		if (event.propertyName !== "transform") return
		event.target.classList.remove('playing')
	}
}
// 偵測鍵盤事件，
// 找到對應得按鍵的音訊節點,
// error handling，沒有找到的處理
// 播放影音


// css transition 事件後
// 使之回復原狀

// Array.from http://wiki.jikexueyuan.com/project/es6/array.html
const blocks = Array.from(document.querySelectorAll('.key'))
// 轉成真正array 之後才能用 array 方法
blocks.forEach(key => key.addEventListener('transitionend', api.removeClass))

// 找到對應 key 的 div，
// 使之樣式放大
window.addEventListener('keydown', api.getAudioDom)
