// make each hand as global variables
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	// plus 90˚ to reset hands start from 12
	const now = new Date()
	const seconds = now.getSeconds()
	const secondsDeg = ((seconds / 60) * 360) + 90
	secondHand.style.transform = `rotate(${secondsDeg}deg)`

	const mins = now.getMinutes();
	const minsDeg = ((mins / 60) * 360) + 90;
	minsHand.style.transform = `rotate(${minsDeg}deg)`

	const hour = now.getHours();
	// let hourhand move slightly according to current minutes ((mins / 60 / 12) * 360)
	const hourDeg = ((hour / 12) * 360) + ((mins / 60 / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate, 1000)
