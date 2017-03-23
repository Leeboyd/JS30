(() => {
  const video = document.querySelector('.player')
  const canvas = document.querySelector('.photo')
  const ctx = canvas.getContext('2d')
  const strip = document.querySelector('.strip')
  const snap = document.querySelector('.snap')

  // use the Navigator and mediaDevices web APIs to ask permission to access the user's webcam
  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        // set the source object of the video element as the localMediaStream
        video.srcObject = localMediaStream
        video.play()
      })
      .catch(err => {
        console.error(`We require additional permission!`, err)
      })
  }
  // Draw the current video element on to the canvas.
  const paintToCanavas = () => {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height)
      // 濾鏡處理
      // let pixels = ctx.getImageData(0, 0, width, height)
      // pixels = greenScreen(pixels)
      // ctx.putImageData(pixels, 0, 0)
    }, 16)
  }

  const takePhoto = () => {
    snap.currentTime = 0
    snap.play()
    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.href = data
    link.innerHTML = `<img src="${data}" alt="your screenshot" />`
    strip.insertBefore(link, strip.firsChild)
  }

  getVideo()

  // Attach an event listener to the video HTML element that will call the paintToCanvas function on the 'canplay' event, 
  // and attach an event listener to the button HTML element that will call the takePhoto function on a 'click' event.
  video.addEventListener('canplay', paintToCanavas)
  document.querySelector('.takePhoto').addEventListener('click', takePhoto)
})()