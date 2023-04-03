    let time = document.querySelector('.time');
    let btnStart = document.querySelector('.start');
    let score = document.querySelector('.timer');
    let timer;

    function startTimer() {
      score.textContent -= 1;
      if (score.textContent <= 0) {
        timer = clearInterval(timer);
      }
    }

    function clickOn() {
      timer = clearInterval(timer);

      if (time.value > 0) {
        score.textContent = time.value;
        timer = setInterval(startTimer, 1000)
      } else {timer = clearInterval(timer)}
    }

    btnStart.addEventListener('click', clickOn);  