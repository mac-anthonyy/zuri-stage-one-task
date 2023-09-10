
let todayEl = document.getElementById('today');
const utcTimeEl = document.getElementById('utc');

const date = new Date();

const daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const today = daysOfTheWeek[date.getDay()];
console.log(date)


const updateTime = () => {
  const date = new Date()
  utcTimeEl.textContent =  `UTC Time: ${date.getTime()}`
} 

todayEl.textContent =  `Current Day of the week: ${today}`;

setInterval(updateTime,1)
