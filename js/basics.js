const daysPerYear = 365;
console.log(daysPerYear);
const hoursPerDay=24
console.log(hoursPerDay)
const minutesPerHour=60
console.log(minutesPerHour)
const hoursPerYear = hoursPerDay * daysPerYear
console.log(hoursPerYear)
const minutesPerDay = minutesPerHour * hoursPerDay
console.log(minutesPerDay)

const secsPerMin = 60;
const daysPerWeek = 7;
const secPerWeek = (secsPerMin * minutesPerDay * daysPerWeek);
console.log(secPerWeek);

const secsPerYear = (secsPerMin * minutesPerDay * daysPerYear);
console.log(secsPerYear);

const radius = prompt ("Please enter the radius in inches...")
let radiussq = radius**2
alert(`The square of radius ${radius} is ${radiussq}`)
let circleArea = Math.PI * radiussq
alert(`The area of a circle a the radius of ${radius} inches is ${circleArea} square inches`)

let width =prompt("Enter the width in inches...")
let height =prompt("Enter the height in inches...")
let area = width * height
alert(`The area of a rectangle with the width of ${width} and height of ${height} inches is ${area} square inches`)

