// Функция, вызываемая при клике на кнопку
function handleClick(buttonNumber) {
    let button = document.getElementById('button' + buttonNumber);
    if (button.innerHTML === 'BOOM!') {
      return; // Если кнопка уже имеет надпись 'BOOM!', ничего не делаем
    }
    
    // Сброс надписей всех кнопок
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = 'Click me';
    }
    
    button.innerHTML = 'BOOM!'; // Устанавливаем надпись 'BOOM!' на текущую кнопку
  }
  
  // Функция для генерации случайного числа от min до max
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  
  // При загрузке страницы назначаем случайной кнопке надпись 'BOOM!'
  window.onload = function() {
    let randomButton = getRandomInt(1, 3);
    console.log(randomButton);
    let button = document.getElementById('button' + randomButton);
    button.innerHTML = 'BOOM!';
  };