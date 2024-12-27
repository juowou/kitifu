const homescreen = document.getElementById("homescreen");
const kitiscreen = document.getElementById("kitiscreen");
const kiti = document.getElementById("kiti");
const kitipet = document.getElementById("kitipet")
const kitipetHead = document.getElementById("kitipetHead");
const kitipetBody = document.getElementById("kitipetBody");
const backIcon = document.getElementById("backIcon");
const feedIcon = document.getElementById("feedIcon");
const feeding = document.getElementById("feeding");
const washIcon = document.getElementById("washIcon");
const washing = document.getElementById("washing");
const loveIcon = document.getElementById("loveIcon");
const lovingFrame1 = document.getElementById("lovingFrame1")
const loveStatus0 = document.getElementById("loveStatus0")
const loveStatus1 = document.getElementById("loveStatus1")
const loveStatus2 = document.getElementById("loveStatus2")
const loveStatus3 = document.getElementById("loveStatus3")
const hungryStatus0 = document.getElementById("hungryStatus0")
const hungryStatus1 = document.getElementById("hungryStatus1")
const hungryStatus2 = document.getElementById("hungryStatus2")
const hungryStatus3 = document.getElementById("hungryStatus3")
const poopStatus = document.getElementById("poopStatus")
const poopStatus1 = document.getElementById("poopStatus1")
const poopStatus2 = document.getElementById("poopStatus2")
const poopStatus3 = document.getElementById("poopStatus3")



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

backIcon.addEventListener('click', function() {
  homescreen.classList.add('block');
  homescreen.classList.remove('none');

  kitiscreen.classList.add('none');
  kitiscreen.classList.remove('block');
})

//kitipet

  //getLocalStorage

let storedHungry = JSON.parse(localStorage.getItem('hungry'))
let storedLove = JSON.parse(localStorage.getItem('love'));
let storedPoop = JSON.parse(localStorage.getItem('poop'));

const updateStats = () => {
  if (storedHungry !== null && storedLove !== null && storedPoop !== null) {
    console.log('updateStats')
    hungry = storedHungry;
    love = storedLove;
    poop = storedPoop;

  } else {
    console.log('updateStats localStorage null')
    localStorage.setItem('hungry', JSON.stringify(hungry));
    storedHungry = JSON.parse(localStorage.getItem('hungry'));
    localStorage.setItem('love', JSON.stringify(love));
    storedLove = JSON.parse(localStorage.getItem('love'));
    localStorage.setItem('poop', JSON.stringify(poop));
    storedPoop = JSON.parse(localStorage.getItem('poop'));

    
  };
  loveLevelDisplay(storedLove.level);
    hungryLevelDisplay(storedHungry.level);
    poopLevelDisplay(storedPoop.level);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');
  updateStats();
});

// level 1 = bad; level 4 = good;
let hungry = {
  level: 1,
  timer: [''],
} 

let poop = {
  level: 1,
  timer: [''],
} 

let love = {
  level: 1,
  timer: [''],
} 


const setHungryTimer = () => {
  const getHours = new Date().getMinutes();
  console.log(getHours + ' getHours');
  if (hungry.level === 2) {
    hungry.timer[0] = getHours + Math.floor(Math.random() * 3) + 1;
    console.log(hungry.timer + ' hungryTimer from hungryLevel2');

  
  } else if (hungry.level === 3) {
    hungry.timer[1] = getHours + Math.floor(Math.random() * 3) + 2;
    console.log(hungry.timer + ' hungryTimer from hungryLevel3');
  } else if (hungry.level === 4) {
    hungry.timer[2] = getHours + Math.floor(Math.random() * 3) + 4;
    console.log(hungry.timer + ' hungryTimer from hungryLevel4');
  };
  localStorage.setItem('hungry', JSON.stringify(hungry));
  console.log('hungryStored updated')
  
}

const getHungry = () => {
  const currentMinutes = new Date().getMinutes();
  if (hungry.timer.includes(currentMinutes)) {
    console.log(hungry.level + '-1 getHungry')
    hungry.level -= 1;
    hungryLevelDisplay(hungry.level);
    hungry.timer.splice(hungry.timer.indexOf(currentMinutes), 1);
  };
  console.log(currentMinutes);
  
  localStorage.setItem('hungry', JSON.stringify(hungry));
  console.log('hungryStored updated')
}

setInterval(getHungry, 60000);

const setPoopTimer = () => {
  var getHours = new Date().getMinutes();
  console.log(getHours + ' getHours');
  if (poop.level === 2) {
    poop.timer[0] = getHours + Math.floor(Math.random() * 3) + 1;
    console.log(poop.timer + ' poopTimer from poopLevel2');
  } else if (poop.level === 3) {
    poop.timer[1] = getHours + Math.floor(Math.random() * 3) + 2;
    console.log(poop.timer + ' poopTimer from poopLevel3');
  } else if (poop.level === 4) {
    poop.timer[2] = getHours + Math.floor(Math.random() * 3) + 4;
    console.log(poop.timer + ' poopTimer from poopLevel4');
  };

  localStorage.setItem('poop', JSON.stringify(poop));
  console.log('poopStored updated')
  
}

const getPoop = () => {
  const currentMinutes = new Date().getMinutes();
  if (poop.timer.includes(currentMinutes)) {
    console.log(poop.level + '-1 getPoop')
    poop.level -= 1;
    poopLevelDisplay(poop.level);
    poop.timer.splice(poop.timer.indexOf(currentMinutes), 1);
  };

  localStorage.setItem('poop', JSON.stringify(poop));
  console.log('poopStored updated')
}

setInterval(getPoop , 3600000);



const setHateTimer = () => {
  var getHours = new Date().getMinutes();
  console.log(getHours + ' getHours');
  if(love.level === 2) {
  love.timer[0] = getHours + Math.floor(Math.random() * 3) + 1;
  console.log(love.timer + ' hateTimer from loveTimer2');
  } else if (love.level === 3) {
    love.timer[1] = getHours + Math.floor(Math.random() * 3) + 2;
    console.log(love.timer + ' hateTimer from loveLevel3');
  } else if (love.level === 4) {
    love.timer[2] = getHours + Math.floor(Math.random() * 3) + 4;
    console.log(love.timer + ' loveTimer from loveLevel4');
  };

  localStorage.setItem('love', JSON.stringify(love));
  console.log('loveStored updated')
  
}

const getHate = () => {
  const currentMinutes = new Date().getMinutes();
  if (love.timer.includes(currentMinutes)) {
    console.log(love.level + '-1 getHate')
    love.level -= 1;
    loveLevelDisplay(love.level);
    love.timer.splice(love.timer.indexOf(currentMinutes), 1);
  };

  localStorage.setItem('love', JSON.stringify(love));
  console.log('loveStored updated')
}

setInterval(getHate , 3600000);


const hungryLevelDisplay = () => {
  if (hungry.level === 1) {

    hungryStatus0.classList.remove('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.add('none');

  } else if (hungry.level === 2) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.remove('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.add('none');

    setHungryTimer();

  } else if (hungry.level === 3) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.remove('none');
    hungryStatus3.classList.add('none');

    setHungryTimer();

  } else if (hungry.level === 4) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.remove('none');

    setHungryTimer();

  }
}

const loveLevelDisplay = () => {
  if (love.level === 1) {

    loveStatus0.classList.remove('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.add('none');

  } else if (love.level === 2) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.remove('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.add('none');

    setHateTimer();

  } else if (love.level === 3) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.remove('none');
    loveStatus3.classList.add('none');

    setHateTimer();

  } else if (love.level === 4) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.remove('none');

    setHateTimer();

  }
}

const poopLevelDisplay = () => {
  if (poop.level === 4) {

    poopStatus1.classList.add('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poop.level === 3) {

    poopStatus1.classList.remove('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poop.level === 2) {

    poopStatus1.classList.add('none');
    poopStatus2.classList.remove('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poop.level === 1) {
    poopStatus1.classList.add('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.remove('none');

  }
}




feedIcon.addEventListener('click', function() {
  if (hungry.level !== 4) {

    feeding.classList.add('feeding-animation');
    kitipetHead.classList.remove('default-animation');
    kitipetBody.classList.remove('default-animation');

  } else {

    console.log('pet is full')

  }
})

feeding.addEventListener('animationend', function() {
  feeding.classList.remove('feeding-animation');
  hungry.level += 1;
  console.log(hungry.level)

  localStorage.setItem('hungry', JSON.stringify(hungry));
  console.log('hungryStored updated');

  hungryLevelDisplay(hungry.level);
  kitipetHead.classList.add('default-animation');
  kitipetBody.classList.add('default-animation');
})


washIcon.addEventListener('click', function () {
  if (poop.level < 4) {
    kitipetHead.classList.remove('default-animation');
    kitipetBody.classList.remove('default-animation');

    washing.classList.add('washing-animation');
    
    poopStatus.classList.add('none');
    poopStatus.classList.remove('block');
  }
});

washing.addEventListener('animationend', function () {
  washing.classList.remove('washing-animation');

  kitipetHead.classList.add('default-animation');
  kitipetBody.classList.add('default-animation');

  poopStatus.classList.add('block');
  poopStatus.classList.remove('none');
  
  poop.level += 1;

  localStorage.setItem('poop', JSON.stringify(poop));
  console.log('poopStored updated')

  poopLevelDisplay(poop.level);
});  

const lovingStart = () => {

  if (hungry.level !== 4 || poop.level !== 4) {
    console.log('pet is pooped and or hungry')
  } else {
    loving.classList.remove('none');

    kitipetHead.classList.remove('default-animation');
    kitipetHead.classList.add('loving-animation');

    kitipetBody.classList.remove('default-animation');
    kitipetBody.classList.add('loving-animation');

    lovingFrame1.addEventListener('animationend', lovingEnd)
  }
}

const lovingEnd = () => {

  loving.classList.add('none');

  kitipetHead.classList.add('default-animation');
  kitipetHead.classList.remove('loving-animation');

  kitipetBody.classList.add('default-animation');
  kitipetBody.classList.remove('loving-animation');
  console.log('loveLevel +1')
  love.level += 1;

  localStorage.setItem('love', JSON.stringify(love));
  console.log('loveStored updated')

  loveLevelDisplay(love.level);
} 


loveIcon.addEventListener('click', lovingStart)


const petting = () => {
  let isMouseDown = false;
  let isMouseMove = false;

  kitipet.addEventListener("mousedown",function () {
    isMouseDown = true;
    console.log("mousedown");
  })

  document.addEventListener("mousemove" , function() {
    if(isMouseDown) {
    isMouseMove = true;
    console.log("mousemove");
    lovingStart()
  }
  });

  document.addEventListener("mouseup", function() {
    isMouseDown = false;
  });

}
petting()


// local storage






