
const todayEl = document.getElementById('today');
const utcTimeEl = document.getElementById('utc');

const date = new Date();

const daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const today = daysOfTheWeek[date.getDay()-1];


const updateTime = () => {
  const date = new Date()
  utcTimeEl.textContent =  `UTC Time: ${date.getTime()}`
} 


todayEl.textContent =  `Current Day of the week: ${today}`;

setInterval(updateTime,1)
