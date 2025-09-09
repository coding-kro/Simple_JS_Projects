const testimonial = [
  {
    name: 'Cherise G',
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=formate&fit=crop&w=880&q=80',
    text: 'This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.',
  },
  {
    name: 'John Doe',
    photoUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHwyfDB8fHww',
    text: 'John Doe is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!',
  },
  {
    name: 'Jane Smith',
    photoUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHwyfDB8fHww',
    text: 'Jane Smith has helped my team and I stay on the same page. Previously, we were all over the board. Using Jane Smith has definitely saved us time and money.',
  },
  {
    name: 'Olivia S',
    photoUrl:
      'https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHwyfDB8fHww',
    text: 'Everyone’s on the same page. Many of our people are not very organized naturally, so Olivia S is a godsend!',
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

function updateTestmonial() {
  const { name, photoUrl, text } = testimonial[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx = (idx + 1) % testimonial.length;
}

setInterval(updateTestmonial, 5000);
