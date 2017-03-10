import * as myConst from './const'
  // Get your shorts on - this is an array workout!
  // ## Array Cardio Day 1

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const result1 = myConst.inventors.filter((inventor) => inventor.year <= 1599 && inventor.year >= 1500)
  console.table(result1);

  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  const result2 = myConst.inventors.map((inventor, index) => (`${inventor.first} ${inventor.last}`))
  console.log(result2);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const result3 = myConst.inventors.sort((a, b) => {
    if (a.year < b.year) {
      return -1
    } else {
      return 1
    }
  })
  // better solution
  // const result31 = myConst.inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
  console.table(result3);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
  const result4 = myConst.inventors.reduce((pre, cur) => (pre + (cur.passed - cur.year)), 0)
  console.log(result4);

  // 5. Sort the inventors by years lived

  // 做錯啦，誤解題目
  // const result5 = myConst.inventors
  // .map((inventor) => (inventor.passed - inventor.year))
  // .sort((a, b) => (a > b ? 1 : -1))
  // console.log(result5);

  const result51 = myConst.inventors.sort((a, b) => {
    const aMan = a.passed - a.year
    const bMan = b.passed - b.year
    return aMan > bMan ? 1 : -1
  })

  console.table(result51);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  // const categoryDOM = document.querySelector('.mw-category')
  // const linkList = categoryDOM.querySelectorAll('a')
  // const streetArray = Array.from(linkList)
  // .map((tag)=> tag.text)
  // .filter((street) => street.includes('de'))
  //
  // console.log(streetArray);

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const sortedPeople = myConst.people.sort((a, b)=> {
    const [aFirst, aLast] = a.split(', ')
    const [bFirst, bLast] = b.split(', ')

    return aLast > bLast ? 1 : -1
  })

  console.log(sortedPeople);
  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  // my solution
  // const summary = {}
  //
  // data.reduce((pre, cur)=> {
  //   if (pre === cur) {
  //     summary[pre] += 1
  //   } else {
  //     summary[cur] ? summary[cur]+=1 :summary[cur]=1
  //   }
  //   return cur
  // }, '')
  //
  // console.log(summary)

  // 8.1 better solution
  const commute = data.reduce((pre, cur) => {
    if (!pre[cur]) {
      pre[cur] = 0
    }
    pre[cur]++
    return pre
  }, {})
  console.log(commute)
