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

const counter = document.querySelector('.boy-counter a');
const email = document.querySelector('input[type=email]');
const form = document.querySelector('.boy-form');
const list = document.querySelector('.boy-resultlist');
const button = document.querySelector('button');

let searchResult = [];

api.get_signUpTotal()
  .then(blob => blob.json())
  .then(data => counter.innerHTML = data.total)
  .catch((err) => (console.log(err)))

function rederResult (result) {
  searchResult.push(result)
  list.innerHTML = searchResult.reverse().join('');
  email.value = '';
}

function toggleLoading (toggle) {
  button.disabled = toggle
  button.innerHTML = toggle ? `LOADING...<span class="boy-loading"></span>` : `check`;
}

function submitForm (e) {
  e.preventDefault()
  if (email.value) {
    var data = {
      "email": email.value
    }
    toggleLoading(true);

    api.post_isSignUp(data)
    .then(blob => blob.json())
    .then((data) => {
      if (data.success) {
        let time = parseDate(data.timeStamp)
        console.log(time)
        rederResult(`<li>${data.nickName} (${email.value}) @ ${time} <span class="successMsg">報名成功！</span></li>`)
        toggleLoading(false);
      } else {
        throw new Error(data.message)
      }
    })
    .catch((err) => {
      rederResult(`<li>(${email.value}) <span class="errorMsg">${err.message}</span></li>`);
      toggleLoading(false);
    })
  } else {

  }
}

function parseDate (timeStamp) {
  let dateObject = new Date(timeStamp);
  let year = dateObject.getFullYear(),
    month = dateObject.getMonth() + 1,
    day = dateObject.getDate(),
    hour = dateObject.getHours(),
    min = dateObject.getMinutes();
  return `${year}-${month}-${day} ${hour}:${min}`;
}

form.addEventListener('submit', submitForm);