const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

// Regular
console.log('VS')

// Interpolated - Dynamically update the string value logged out using %s
let testTerm = '👻'
console.log('Testing interpolated: %s <-- Boo!', testTerm)
// Interpolated - using ES6 template strings
console.log(`Testinh ES6 interpolated: ${testTerm} <-- Boo!`)

// Styled - Apply styling to a log event using %c
console.log('%c Styling stuff maybe?', 'font-size:1.2em; color: blue;')

// Warnings - Displays a log event preceded with a caution sign
console.warn(`Warnings: This is self-invoke warning.`)

// Error - Displays a log event highlighted in red with an 'x'
console.error('Error: This is an error.')

// Info - Displays a log event preceded by an 'i'
console.info('Info: This is not the site you are looking for.')

// Clearing - Clear all previously logs
console.clear()

// Testing - A very basic assert statement which accept two args
//       1. the expression we want to evaluate the truthiness of,
//       2. a message yo display if the assertion fails.
console.assert(dogs.every((dog) => dog.age >= 2), 'Not every dog.')

// Grouping - Logs out related information in a collapsible group
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`Dog name: ${dog.name}`)
  console.log(`${dog.name} age (dog years): ${dog.age * 7}`);
  console.groupEnd(`${dog.name}`)
})

// Count - Log out a given statement followed by a colon + the amount of times
// this particular statement has already been logged

// Time - Logs out the time taken to perform a given action
console.time('Fetch data timer')
fetch('https://api.github.com/users/nitishdayal')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetch data timer')
    console.log(data)
  })

// Table - Log out array/object data in a table format

// Provide properties to be displayed in the table as an array of string values 
// corresponding with property names
console.table(dogs, ["age"]);