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


