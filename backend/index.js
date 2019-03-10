const Dragon = require('./dragon')

const fooey = new Dragon({ birthdate: new Date(), nickname: 'fooey' })
const baloo = new Dragon({
  nickname: 'baloo',
  birthdate: new Date(),
  traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
})

setTimeout(() => {
  const gooby = new Dragon()
  console.log('gooby', gooby)
}, 3000)

console.log('fooey', fooey)
console.log('baloo', baloo)
