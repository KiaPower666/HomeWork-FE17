function play(playerChoice) {
    let choices = ['камень', 'ножницы', 'бумага'];
    let computerChoice = choices[Math.round(Math.random() * 2)];
    let result = '';
  
    if (playerChoice === computerChoice) {
      result = "Ничья!";
    } else if (
      (playerChoice === 'камень' && computerChoice === 'ножницы') ||
      (playerChoice === 'ножницы' && computerChoice === 'бумага') ||
      (playerChoice === 'бумага' && computerChoice === 'камень')
    ) {
      result = "Вы победили!";
    } else {
      result = "Компьютер победил!";
    }
  
    document.getElementById('result').innerHTML =
      "Компьютер выбрал: " + computerChoice + "<br>" + result;
  }