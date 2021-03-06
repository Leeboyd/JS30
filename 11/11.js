(() => {
  const player = document.querySelector('.player')
  const video = player.querySelector('.viewer')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filled')
  const toggle = player.querySelector('.toggle')
  const skipButtons = player.querySelectorAll('[data-skip]')
  const ranges = player.querySelectorAll('.player__slider')

  let togglePlay = () => video[video.paused ? 'play' : 'pause']()
  let updateButton = () => toggle.textContent = video.paused ? '►' : '❚ ❚'
  let handleProgress = () => progressBar.style.flexBasis = `${video.currentTime / video.duration * 100}%`
  let scrub = (e) => video.currentTime = ((e.offsetX / progress.offsetWidth) * video.duration)

  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updateButton)
  video.addEventListener('pause', updateButton)
  video.addEventListener('timeupdate', handleProgress)
  toggle.addEventListener('click', togglePlay)

  let mousedown = false
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
  progress.addEventListener('mousedown', () => mousedown = true)
  progress.addEventListener('mouseup', () => mousedown = false)

  skipButtons.forEach(button => {
    button.addEventListener('click', () => video.currentTime += parseFloat(button.dataset.skip))
  })

  ranges.forEach(range => {
    range.addEventListener('change', () => video[range.name] = range.value)
    range.addEventListener('mousemove', () => video[range.name] = range.value)
  })
})();