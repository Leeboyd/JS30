(() => {
  // The SpeechRecognition
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  const recognition = new SpeechRecognition()
  // This makes sure that results are available while we are speaking and not after we are done speaking.
  recognition.interimResults = true

  // use document.createElement to create a paragraph and append it to the .words div
  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  // Add transcripts
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      // each 0th element of the list is the text data we need
      .map(result => result[0].transcript)
      .join('')

    const NSFWScript = transcript.replace(/poop|poo|shit|dump|bitch/gi, '💩')
    p.textContent = NSFWScript
      
    // to avoid the <p> get replaced in the DOM
    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }
  })

  // set recognition.addEventListener('end', recognition.start) again
  // so that works for more than one paragraph
  recognition.addEventListener('end', recognition.start)
  recognition.start()
})()

