window.onload = () => {
  const lightBtn = document.getElementById('light-campfire');
  const RoomMusic = new Audio();
  RoomMusic.src = 'https://stackblitz.com/files/web-platform-yoksb7/github/RareFonder/Campfire/main/Dream (Ambience).mp3'
  RoomMusic.play();

  lightBtn.addEventListener('click', () => {
    stones.style.visibility = 'hidden';
    campfire.style.visibility = 'visible';
    document.body.style.background = 'white';
    lightBtn.style.color = 'black';
    lightBtn.style.borderColor = 'black';
  });
};  