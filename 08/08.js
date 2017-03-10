    // 將邏輯隱藏在匿名 function scope 裡，避免污染全域
    (() => {
      // myCanvas 定義畫布長寬
      const myCanvas = document.querySelector('#draw')
      myCanvas.width = window.innerWidth
      myCanvas.height = window.innerHeight

      const ctx = myCanvas.getContext('2d')
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      // current & last mouse location
      const mouse = { x: 0, y: 0 },
        last_mouse = { x: 0, y: 0 }
      // line hue & line width
      let hue = 0,
        increaseLineWidth = true
      // mousedown event handler function
      const quickDraw = () => {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
        ctx.beginPath()
        ctx.moveTo(last_mouse.x, last_mouse.y)     // Starting point
        ctx.lineTo(mouse.x, mouse.y)               // Ending point
        ctx.closePath()              // Create path starting from moveTo and ending at lineTo
        ctx.stroke()                 // 畫上畫布
        // Ternary operator to reset/increase hue value                 
        hue >= 360 ? hue = 0 : hue++ 
        // Ternary operator to increase/decrease line width
        increaseLineWidth ? ctx.lineWidth++ : ctx.lineWidth-- 
        // Width of line increases or decreases, staying within a value of 1-100.
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) increaseLineWidth = !increaseLineWidth
      }
      // mousemove Event Handler function
      const setMouseLocation = (e) => {
        // Update values based on previous & current mouse locations using array destructuring
        [last_mouse.x, last_mouse.y] = [mouse.x, mouse.y];
        [mouse.x, mouse.y] = [e.offsetX, e.offsetY]
      }
      // Attach event listeners
      myCanvas.addEventListener('mousemove', setMouseLocation)
      myCanvas.addEventListener('mousedown', () => myCanvas.addEventListener('mousemove', quickDraw))
      myCanvas.addEventListener('mouseup', () => myCanvas.removeEventListener('mousemove', quickDraw))
      myCanvas.addEventListener('mouseout', () => myCanvas.removeEventListener('mousemove', quickDraw))
    })() 
    // Immediately invoke anonymous function 