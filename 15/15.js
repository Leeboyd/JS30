(() => {
  const addItems = document.querySelector('.add-items')
  const itemsList = document.querySelector('.plates')
  const items = JSON.parse(localStorage.getItem('items')) || []

  const addItem = (e) => {
    e.preventDefault()
    const text = e.target.querySelector('[name=item]').value
    const item = {
      text,
      done: false
    }
    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))
    renderList(items, itemsList)
    e.target.reset() 
  }

  const renderList = (plates = [], platesList) => {
    if (!(plates instanceof Array)) return false

    platesList.innerHTML = plates.map((dish, i) => {
      return `
        <li>
          <input type='checkbox' data-index=${i} id='item${i}' ${dish.done ? 'checked' : ''}>
          <label for='item${i}'>${dish.text}</label>
        </li>
      `
    }).join('')
  }

  const toggleCheck = (e) => {
    if (!e.target.matches('input')) return
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    renderList(items, itemsList)
  }


  addItems.addEventListener('submit', addItem)
  itemsList.addEventListener('click', toggleCheck)
  document.onload = renderList(items, itemsList)
})()
