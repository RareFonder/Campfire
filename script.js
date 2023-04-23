window.onload = () => {
  const lightBtn = document.getElementById('light-btn');
  const actions = document.getElementById('action-log');
  const RoomMusic = new Audio();
  RoomMusic.src = 'https://stackblitz.com/files/web-platform-yoksb7/github/RareFonder/Campfire/main/Dream (Ambience).mp3';
  RoomMusic.play();

  lightBtn.addEventListener('click', () => {
    stones.style.visibility = 'hidden';
    campfire.style.visibility = 'visible';
    document.body.style.background = 'white';
    lightBtn.style.color = 'black';
    lightBtn.style.borderColor = 'black';

    setTimeout(() => {
      const text = document.createElement('p');
      text.textContent = 'You light the campfire. Your surroundings brighten and the chill in the air is gone.';
      actions.appendChild(text);
      setTimeout(() => {
        text.classList.add('action-add');
      }, 50);
      setTimeout(() => {
        const text2 = document.createElement('p');
        text2.textContent = 'You spot a nearby forest. You ought to collect some wood.'
        actions.appendChild(text2);
        text.classList.add('action-add');
      }, 5000);
    }, 2000);
  });
};  