const BASE_URL = `https://www.thef2e.com/api/`;
const api = {
  get_signUpTotal () {
    return fetch(`${BASE_URL}signUpTotal`)
  },

  post_isSignUp (data) {
    return fetch(`${BASE_URL}isSignUp`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

// return Promise
// fetch(url)
  // .then(blob => blob.json())
  // .then(data => locations.push(...data))
  // .catch((err) => (console.log(err)))

const counter = document.querySelector('.boy-counter a');
const email = document.querySelector('input[type=email]');
const form = document.querySelector('.boy-form');
const list = document.querySelector('.boy-resultlist');
let searchResult = [];

api.get_signUpTotal()
  .then(blob => blob.json())
  .then(data => counter.innerHTML = data.total)
  .catch((err) => (console.log(err)))

function rederResult (result) {
  searchResult.push(result)
  list.innerHTML = searchResult.join('');
  email.value = '';
}

function submitForm (e) {
  e.preventDefault()
  if (email.value) {
    var data = {
      "email": email.value
    }
    api.post_isSignUp(data)
    .then(blob => blob.json())
    .then((data) => {
      if (data.success) {
        rederResult(`<li>${data.nickName} (${email.value}) @ ${data.timeStamp} <span class="successMsg">報名成功！</span></li>`)
      } else {
        throw new Error(data.message)
      }
    })
    .catch((err) => {
      rederResult(`<li>(${email.value}) <span class="errorMsg">${err.message}</span></li>`)
    })
  } else {

  }
}

form.addEventListener('submit', submitForm);
