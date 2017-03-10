const api = {
  numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  findMatcheLoc (query, locations) {
    return locations.filter(location => {
      // g: global (means any index of string); i: case insensitive,
      const regex = new RegExp(query, 'gi')
      return location.city.match(regex) || location.state.match(regex)
    })
  }
}

// -------------------------------------
// GET Data first
// set up functionality in place (filter data)
// Hooking it up to event listener
// as well as mutating DOM
// -------------------------------------
const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const locations = []

// return Promise
fetch(url)
  .then(blob => blob.json())
  .then(data => locations.push(...data))
  .catch((err) => (console.log(err)))


function displayMatches () {
  console.log(this.value);
  const matches = api.findMatcheLoc(this.value, locations)
  const reformat = matches.map(location => {
    const regex = new RegExp(this.value, 'gi')
    // UI 強化
    const reCityName = location.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const reStateName = location.state.replace(regex, `<span class="hl">${this.value}</span>`)

    return `
      <li>
        <span class="name">${reCityName}, ${reStateName}</span>
        <span class="population">${ api.numberWithCommas(location.population)}</span>
      </li>
    `
  }).join('')
  // Put reformat array as a single string
  suggestions.innerHTML = reformat;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// change event: unfocus the input field, press enter or click outside
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
