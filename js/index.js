let date = new Date()

let challengeDay = date.getDate() + 14
let challengeMonth = date.getMonth() + 1
let challengeYear = date.getFullYear()




simplyCountdown('#count', {
  year: challengeYear, // required
  month: challengeMonth, // required
  day: challengeDay, // required
  hours: 0, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
    days: { singular: 'DAY', plural: 'DAYS' },
    hours: { singular: 'HOUR', plural: 'HOURS' },
    minutes: { singular: 'MINUTE', plural: 'MINUTES' },
    seconds: { singular: 'SECOND', plural: 'SECONDS' }
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'counts', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false, //Use UTC or not - default : false
  onEnd: function () { alert('HOW? :o') }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'card', //section css class
  amountClass: 'card__number', // amount css class
  wordClass: 'card__word', // word css class
  zeroPad: false,
  countUp: false
});