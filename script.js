window.addEventListener('load', () => {
  const lightBtn = document.getElementById('light-btn');
  const harvestWoodBtn = document.getElementById('harvest-wood');
  const actions = document.getElementById('action-log');
  const inventory = document.getElementById('inventory');
  const campfireSoundEffect = new Audio('https://stackblitz.com/files/web-platform-yoksb7/github/RareFonder/Campfire/main/lit-fireplace-6307.mp3');
  campfireSoundEffect.loop = true;

  const addAction = (text, specialWord, specialWordColor, delay) => {
    setTimeout(() => {
      const p = document.createElement('p');
      p.textContent = text;
      if (text.includes(specialWord)) {
        const span = document.createElement('span');
        span.textContent = specialWord;
        span.style.color = specialWordColor;
        span.style.fontWeight = 'bold';
        span.style.fontSize = '18px';
        p.innerHTML = text.replace(specialWord, span.outerHTML);
      }
      p.style.animation = 'move-up 1s forwards';
      actions.appendChild(p);
    }, delay);
  };

  let clicked = false;

  lightBtn.addEventListener('click', () => {
    if (!clicked) {
      lightBtn.style.borderColor = '#808080';
      lightBtn.style.color = '#808080';
      lightBtn.style.pointerEvents = 'none'; 
      clicked = true;
    }
    
    stones.style.visibility = 'hidden';
    campfire.style.visibility = 'visible';
    actions.style.visibility = 'visible';

    document.body.style.transition = 'background-color 1s';
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';

    campfireSoundEffect.play();

    addAction('You light the campfire. Your surroundings brighten and the chill in the air is gone.', '', '', 1500);
    addAction('You spot a nearby FOREST.', 'FOREST', '#318748', 5000);
    addAction('You ought to collect some WOOD.', 'WOOD', '#7d3b09', 7000);

    setTimeout(() => {
      harvestWoodBtn.style.visibility = 'visible';
    }, 8000);

    clicked = true;
  });

  let playerWood = 0;

  harvestWoodBtn.addEventListener('click', () => {
    inventory.style.visibility = 'visible';
    playerWood += 10;
    addAction('You haverested 10 wood.', '', '', 0);
    wood.innerHTML = `    Wood          ${playerWood}`;
  })
});  