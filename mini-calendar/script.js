const monthNameEL = document.getElementById('month-name');
const dayNameEL = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const data = new Date();
const month = data.getMonth();
monthNameEL.innerHTML = data.toLocaleString('en', {
  month: 'long',
});

dayNameEL.innerHTML = data.toLocaleString('en', {
  weekday: 'long',
});

dayNumberEl.innerHTML = data.getDate();

yearEl.innerHTML = data.getFullYear();
