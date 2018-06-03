function renderCoundown () {
  
  // set our end time
  const endTime = new Date(1528084800000);

  // store clock div to avoid repeatedly querying the DOM
  const timer = document.querySelector('.timer');
  
  let remainingTime = getRemainingTime(endTime);

  // calculate remaining time
  function getRemainingTime(deadline) {
    const now = new Date().getTime();
    return deadline - now;
  }
  
  // prefix one-digit with zero
  function leadingZero(value) {
    return ('0' + Math.floor(value)).slice(-2);
  }

  // show time repeatedly
  function renderTime() {
    let remainingTime = getRemainingTime(endTime);
    let seconds = leadingZero((remainingTime / 1000) % 60);
    let minutes = leadingZero((remainingTime / (60 * 1000)) % 60);
    let hours = leadingZero((remainingTime / (60 * 60 * 1000)) % 24);
    let days = leadingZero(remainingTime / (24 * 60 * 60 * 1000));

    timer.innerHTML = `Time remaining: ${days}:${hours}:${minutes}:${seconds}`;

    // if remaining time more than one sec., update timer
    if (remainingTime >= 1000) {
      requestAnimationFrame(renderTime);
    }
  }
  
  // init
  if (remainingTime >= 1000) {
    requestAnimationFrame(renderTime);
  } else {
    timer.innerHTML = `<b>時間到囉，挑戰已開始</b>`;
  }
  
}

export default renderCoundown;