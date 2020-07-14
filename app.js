let game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    numInput = document.querySelector('#numinput'),
    submit = document.querySelector('#guess-value'),
    uiMessage = document.querySelector('.message');

const min=1,
      max=10,
      winNum = getrandomNum(min,max);
let guessLeft = 3;

minNum.textContent = min;
maxNum.textContent = max;


game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});


submit.addEventListener('click',function(){
  let geuss = numInput.value;
  // console.log(geuss);
  if(geuss == null || geuss < min || geuss > max){
    setMessage(`Plese enter number between ${min} & ${max}`,'red');
  }

  else if(geuss == winNum){
    gameOver(true,`${winNum} is correct ! welldone`);
  }

  else{
    guessLeft -= 1;

    if(guessLeft <= 0){
      gameOver(false,`game over ! you lost correct answer is ${winNum}`);
    }
    else{
      setMessage(`you have ${guessLeft} guesses left`,'red');
    } 

  }
});

function gameOver(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  setMessage(msg,color);
  numInput.disabled = true;
  numInput.style.borderColor = color;
  submit.value = 'play again';
  submit.className += 'play-again';
}

function getrandomNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg,clr){
  uiMessage.textContent = msg;
  uiMessage.style.color = clr;
}