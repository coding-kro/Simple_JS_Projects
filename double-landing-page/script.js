const containerEl = document.querySelector('.container');
const leftEl = document.querySelector('.left');
const rigthEl = document.querySelector('.right');

leftEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-left');
});

leftEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-left');
});

rigthEl.addEventListener('mouseenter', () => {
  containerEl.classList.add('active-right');
});

rigthEl.addEventListener('mouseleave', () => {
  containerEl.classList.remove('active-right');
});
