const homescreen = document.getElementById("homescreen");
const kitiscreen = document.getElementById("kitiscreen");
const kiti = document.getElementById("kiti");
const kitipet = document.getElementById("kitipet")
const kitipetHead = document.getElementById("kitipetHead");
const kitipetBody = document.getElementById("kitipetBody");
const back = document.getElementById("back");
const feed = document.getElementById("feed");
const feeding = document.getElementById("feeding");
const wash = document.getElementById("wash");
const washing = document.getElementById("washing");
const love = document.getElementById("love");
const loving = document.getElementById("loving")
const loveStatus0 = document.getElementById("loveStatus0")
const loveStatus1 = document.getElementById("loveStatus1")
const loveStatus2 = document.getElementById("loveStatus2")
const loveStatus3 = document.getElementById("loveStatus3")
const hungryStatus0 = document.getElementById("hungryStatus0")
const hungryStatus1 = document.getElementById("hungryStatus1")
const hungryStatus2 = document.getElementById("hungryStatus2")
const hungryStatus3 = document.getElementById("hungryStatus3")


//clock

let clock = document.getElementById("clock")

function getTime() {
    return new Date().toLocaleTimeString('en-US', 
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
})

back.addEventListener('click', function() {
  homescreen.classList.add('block');
  homescreen.classList.remove('none');

  kitiscreen.classList.add('none');
  kitiscreen.classList.remove('block');
})

//kitipet

let hungryLevel = 0
let loveLevel = 0

const loveLevelDisplay = (loveLevel) => {
  if (loveLevel === 0) {
    loveStatus0.classList.add('block');
    loveStatus0.classList.remove('none');

    loveStatus1.classList.add('none');
    loveStatus1.classList.remove('block');

    loveStatus2.classList.add('none');
    loveStatus2.classList.remove('block');

    loveStatus3.classList.add('none');
    loveStatus3.classList.remove('block');

    console.log("loveLevel0")

  } else if (loveLevel === 1) {

    loveStatus0.classList.add('none');
    loveStatus0.classList.remove('block');

    loveStatus1.classList.add('block');
    loveStatus1.classList.remove('none');

    loveStatus2.classList.add('none');
    loveStatus2.classList.remove('block');

    loveStatus3.classList.add('none');
    loveStatus3.classList.remove('block');
  } else if (loveLevel === 2) {

    loveStatus0.classList.add('none');
    loveStatus0.classList.remove('block');

    loveStatus1.classList.add('none');
    loveStatus1.classList.remove('block');

    loveStatus2.classList.add('block');
    loveStatus2.classList.remove('none');

    loveStatus3.classList.add('none');
    loveStatus3.classList.remove('block');

  } else if (loveLevel === 3) {

    loveStatus0.classList.add('none');
    loveStatus0.classList.remove('block');

    loveStatus1.classList.add('none');
    loveStatus1.classList.remove('block');

    loveStatus2.classList.add('none');
    loveStatus2.classList.remove('block');

    loveStatus3.classList.add('block');
    loveStatus3.classList.remove('none');

  }
}

const hungryLevelDisplay = (hungryLevel) => {
  if (hungryLevel === 0) {
    hungryStatus0.classList.add('block');
    hungryStatus0.classList.remove('none');

    hungryStatus1.classList.add('none');
    hungryStatus1.classList.remove('block');

    hungryStatus2.classList.add('none');
    hungryStatus2.classList.remove('block');

    hungryStatus3.classList.add('none');
    hungryStatus3.classList.remove('block');

    console.log("loveLevel0")

  } else if (hungryLevel === 1) {

    hungryStatus0.classList.add('none');
    hungryStatus0.classList.remove('block');

    hungryStatus1.classList.add('block');
    hungryStatus1.classList.remove('none');

    hungryStatus2.classList.add('none');
    hungryStatus2.classList.remove('block');

    hungryStatus3.classList.add('none');
    hungryStatus3.classList.remove('block');

  } else if (hungryLevel === 2) {

    hungryStatus0.classList.add('none');
    hungryStatus0.classList.remove('block');

    hungryStatus1.classList.add('none');
    hungryStatus1.classList.remove('block');

    hungryStatus2.classList.add('block');
    hungryStatus2.classList.remove('none');

    hungryStatus3.classList.add('none');
    hungryStatus3.classList.remove('block');


  } else if (hungryLevel === 3) {

    hungryStatus0.classList.add('none');
    hungryStatus0.classList.remove('block');

    hungryStatus1.classList.add('none');
    hungryStatus1.classList.remove('block');

    hungryStatus2.classList.add('none');
    hungryStatus2.classList.remove('block');

    hungryStatus3.classList.add('block');
    hungryStatus3.classList.remove('none');
  }
}

loveLevelDisplay(loveLevel)
hungryLevelDisplay(hungryLevel)


feed.addEventListener('click', function() {
  feeding.classList.add('feeding-animation');
  kitipetHead.classList.remove('kitipetHead-default-animation');
  kitipetBody.classList.remove('kitipetBody-default-animation');
  
})

feeding.addEventListener('animationend', function() {
  feeding.classList.remove('feeding-animation');
  hungryLevel += 1;
  hungryLevelDisplay(hungryLevel);
  kitipetHead.classList.add('kitipetHead-default-animation');
  kitipetBody.classList.add('kitipetBody-default-animation');
})
/*
love.addEventListener('click', function() {
  loving.classList.remove('none');
  loving.classList.add('block');
})

loving.addEventListener('animationend', function() {
  loving.classList.remove('block');
  loving.classList.add('none');
  loveLevel += 1;
  loveLevelDisplay(loveLevel);
})
*/

  




