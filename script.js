const homescreen = document.getElementById("homeScreen");
const kitiscreen = document.getElementById("kitiScreen");
const friendScreen = document.getElementById("friendScreen")
const pmScreen = document.getElementById('pmScreen')

const backOn = document.getElementById("backOn")
const backOff = document.getElementById("backOff")
const kiti = document.getElementById("kiti");
const friends = document.getElementById("friends")



const newDate = new Date();
//clock

let clock = document.getElementById("clock")

function getTime() {
  const newDate = new Date();
  return newDate.toLocaleTimeString('en-US', 
    { hour12: false, hour: 'numeric', minute: 'numeric' }).toString();
}
  
function setTime() {
    var time = getTime();
    clock.innerText = time;
  }

setInterval(setTime , 1000);
setTime();


//switch screens

let isKitiScreen = false
let isFriendScreen = false
let isPmScreen = false

kiti.addEventListener('click', function() {
  homescreen.classList.add('none');
  homescreen.classList.remove('block');

  kitiscreen.classList.add('block');
  kitiscreen.classList.remove('none');

  backOn.classList.add('block');
  backOn.classList.remove('none');
  backOff.classList.add('none');
  backOff.classList.remove('block');

  resetScroll();

  isKitiScreen = true;
  isFriendScreen = false;
  isPmScreen = false;

})

backOn.addEventListener('click', function() {
  homescreen.classList.add('block');
  homescreen.classList.remove('none');

  kitiscreen.classList.add('none');
  kitiscreen.classList.remove('block');
  friendScreen.classList.remove('block');
  friendScreen.classList.add('none');
  pmScreen.classList.remove('block');
  pmScreen.classList.add('none');
  

  backOn.classList.remove('block');
  backOn.classList.add('none');
  backOff.classList.remove('none');
  backOff.classList.add('block');

  resetScroll()
})


friends.addEventListener('click', function() {
  homescreen.classList.add('none');
  homescreen.classList.remove('block');

  friendScreen.classList.add('block');
  friendScreen.classList.remove('none');

  backOn.classList.add('block');
  backOn.classList.remove('none');
  backOff.classList.add('none');
  backOff.classList.remove('block');

  isKitiScreen = false;
  isFriendScreen = true;
  isPmScreen = false;

  resetScroll();

scrollUpdate()
  
})

