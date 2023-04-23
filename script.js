window.onload = () => {
  const lightBtn = document.getElementById('light-campfire')
  
  lightBtn.addEventListener('click', () => {
    stones.style.visibility = 'hidden';
    campfire.style.visibility = 'visible';
  });
};