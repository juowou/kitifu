const homescreen = document.getElementById("homeScreen");
const kitiscreen = document.getElementById("kitiScreen");
const friendScreen = document.getElementById("friendScreen")
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

kiti.addEventListener('click', function() {
  homescreen.classList.add('none');
  homescreen.classList.remove('block');

  kitiscreen.classList.add('block');
  kitiscreen.classList.remove('none');

  backOn.classList.add('block');
  backOn.classList.remove('none');
  backOff.classList.add('none');
  backOff.classList.remove('block');

})

backOn.addEventListener('click', function() {
  homescreen.classList.add('block');
  homescreen.classList.remove('none');

  kitiscreen.classList.add('none');
  kitiscreen.classList.remove('block');
  friendScreen.classList.remove('block');
  friendScreen.classList.add('none');

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

  
})

