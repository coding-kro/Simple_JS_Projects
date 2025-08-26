const isFriend = document.getElementById('isWho');

const btn = document.getElementById('addFriend');

let check = 0;

btn.addEventListener('click', function () {
  if (check === 0) {
    isFriend.innerHTML = 'Friend';
    isFriend.style.color = 'green';
    btn.innerHTML = 'Unfollow';
    check = 1;
  } else {
    isFriend.innerHTML = 'Stranger';
    isFriend.style.color = 'red';
    btn.innerHTML = 'Follow';
    check = 0;
  }
});
