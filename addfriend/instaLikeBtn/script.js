const box = document.getElementById('box');
const heart = document.getElementById('heart');

box.addEventListener('dblclick', function () {
  heart.style.transform = 'translate(-50%, -50%) scale(1)';
  heart.style.opacity = 1;

  setTimeout(function () {
    heart.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    heart.style.transform = 'translate(-50%, -50%) scale(0)';
  }, 3000);
});
