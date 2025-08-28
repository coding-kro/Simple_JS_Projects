let arr = [
  {
    dp: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

let storiya = document.querySelector('#storiya');

let clutter = '';
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
      </div>`;
});

storiya.innerHTML = clutter;

storiya.addEventListener('click', function (dets) {
  // console.log(arr[dets.target.id].story);
  document.querySelector('#full-screen').style.display = 'block';
  document.querySelector('#full-screen').style.backgroundImage = `url(
    ${arr[dets.target.id].story}
  )`;
  setTimeout(function () {
    document.querySelector('#full-screen').style.display = 'none';
  }, 3000);
});
