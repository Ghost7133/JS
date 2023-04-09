function userInput() {
    let userInputPairs = prompt("Введите количество пар от 1 до 8");
    if (userInputPairs <= 8 && userInputPairs != 0) {
      return userInputPairs;
    } else {
      alert("Что-то пошло не так...");
      userInput();
    }
  }
  
  // создание игрового поля
  function generateField() {
    const gameField = document.createElement("div");
    gameField.classList.add("gameField");
  
    const p = document.createElement("p");
    p.textContent = "Время до окончания";
    p.classList.add("p");
  
    const timer = document.createElement("p");
    timer.classList.add("timer");
    timer.textContent = "210";
  
    const btnStart = document.createElement("button");
    btnStart.classList.add("btnStart");
    btnStart.textContent = "Начать игру";
  
    const btnRestart = document.createElement("button")
    btnRestart.classList.add("btnRestart")
    btnRestart.textContent = "Перезапустить таймер"
  
    const container = document.querySelector(".containerForGame");
    container.append(p, timer, btnStart, btnRestart, gameField);
    addCardsToGameField(getCards(userInput()), gameField);
  
    btnStart.addEventListener("click", () => {
      startTimer(timer, btnStart);
      guessPairs();
    });
  
    btnRestart.addEventListener("click", () => {
      location.reload()
    });
  }
  
  function startTimer(timer, btnStart) {
    let count = timer.textContent;
    x = setInterval(() => {
      count--;
      timer.textContent = count;
      if (count === 0) {
        clearInterval(x);
        timerToEnd.textContent = "время вышло";
      }
    }, 1000);
    btnStart.setAttribute("disabled", true);
  }
  
  // получить массив пар карт
  function getCards(textFromUserInput) {
    const pairsCard = [];
    for (let i = 1; i <= textFromUserInput; i++) {
      pairsCard.push(i);
      pairsCard.push(i);
    }
    shufflePairs(pairsCard);
    console.log(pairsCard);
    return pairsCard;
  }
  
  // Перемешать массив
  function shufflePairs(arr) {
    arr.sort(() => Math.random() - 0.5);
  }
  
  // добавление карт на поле
  function addCardsToGameField(cards, gameField) {
    for (let i = 0; i < cards.length; i++) {
      let item = document.createElement("div");
      item.classList.add("cardItem");
      let txt = document.createElement("p");
      txt.classList.add("cardText");
      txt.textContent = cards[i];
      item.append(txt);
      gameField.append(item);
    }
  }
  
  function guessPairs() {
    let firstGuess;
    let secondGuess;
    let firstGuessBlock;
    let secondGuessBlock;
    let gameFields = document.querySelector(".gameField");
    gameFields.style.pointerEvents = "auto";
    let count = 0;

    gameFields.addEventListener("click", () => {
        let card = event.target
        let txt = card.children
        let elem = txt[0]
        if (count < 1) {
            count++
            firstGuess = elem
            firstGuessBlock = card
            firstGuess.style.fontSize = "10vh"
            card.style.backgroundColor = "white"
        }else if(count < 2) {
            count++
            secondGuess = elem
            secondGuessBlock = card
            secondGuess.style.fontSize = "10vh"
            card.style.backgroundColor = "white"
        }
    })
    setTimeout(() =>{
        if (count == 2) {
            
        }
    })
}
