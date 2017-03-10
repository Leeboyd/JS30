    (() => {
      const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
      // closure 上一 checked todo
      let lastChecked

      function multiCheck (e) {
        // If the lastChecked variable is defined and the shift key was pressed
        // 防止 v1 第一次直接按shift 就進入回圈，導致全部都 checked
        if (lastChecked && e.shiftKey) {
          // 使當前 context checked property 跟 lastChecked 相同
          this.checked = lastChecked.checked
          // Declare two variables 
          let startIdx, endIdx
          // 找出當前和 lastChecked 之間的 index
          this.id > lastChecked.id ?
            [startIdx, endIdx] = [lastChecked.id, this.id] :
            [startIdx, endIdx] = [this.id, lastChecked.id]
          // 中間的 todo 不含當前和 lastChecked
          const middleInputs = Array.from(checkBoxes).slice(startIdx * 1 + 1, endIdx)
          middleInputs.forEach(checkbox => {
            checkbox.checked = this.checked
          })
        }
        lastChecked = this
      }

      checkBoxes.forEach(checkBox => checkBox.addEventListener('click', multiCheck));
    })()