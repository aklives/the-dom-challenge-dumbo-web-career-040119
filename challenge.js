var seconds = 0;
const counter = document.querySelector('#counter');
var pause = false

function countSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}

let interval = setInterval(countSeconds, 1000);


const minus_button = document.getElementById('-')

function decrementSeconds(){
  seconds -= 1;
  counter.innerText = seconds;
}

minus_button.addEventListener("click", decrementSeconds)

const plus_button = document.getElementById('+')

function incrementSeconds(){
  seconds += 1;
  counter.innerText = seconds;
}

plus_button.addEventListener("click", incrementSeconds)

const like_button = document.getElementById('<3')
const like_ul = document.querySelector('.likes')

let times = null
function likeSecond(){
  let li_likes = document.createElement('li')
  li_likes.dataset.num = seconds
  let match = document.querySelector(`[data-num='${seconds}']`)
  if (match != null){
    if (match.dataset.times){
      let times = match.dataset.times
      times = parseInt(times) + 1
      match.innerHTML = `${seconds} has been liked ${times} times`
      match.dataset.times = times

    }
    else{
      let times = 2
      match.innerHTML = `${seconds} has been liked ${times} times`
      match.dataset.times = times

    }
  }
  else{

    li_likes.innerHTML = `${seconds} has been liked 1 time`
    like_ul.appendChild(li_likes)
  }
}



like_button.addEventListener("click", likeSecond)


const comment_list = document.querySelector('#list')
const comment_form = document.querySelector('#comment')
const submit_button = document.querySelector('#submit')

function addComment(){
  event.preventDefault()
  let p = document.createElement('p')
  p.innerText = comment_form.value
  comment_list.appendChild(p)
}

submit_button.addEventListener("click", addComment)

const pause_button = document.querySelector('#pause')

function onPause(){
  pause = !pause
  if (pause){
    clearInterval(interval);
    minus_button.disabled = true
    plus_button.disabled = true
    like_button.disabled = true
    submit_button.disabled = true

  }
  else{
    interval = setInterval(countSeconds, 1000);
    minus_button.disabled = false
    plus_button.disabled = false
    like_button.disabled = false
    submit_button.disabled = false
  }
}

pause_button.addEventListener("click", onPause)
