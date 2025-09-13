const btnEl = document.getElementById('btn');

const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    'https://emoji-api.com/emojis?access_key=08d917cab134f7c8b995158e58f0656d8b72b3a9'
  );

  let data = await response.json();

  console.log(data);

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojicode: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerHTML = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojicode;
});
