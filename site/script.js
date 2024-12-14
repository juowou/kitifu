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

back.addEventListener('click', function() {
  homescreen.classList.add('block');
  homescreen.classList.remove('none');

  kitiscreen.classList.add('none');
  kitiscreen.classList.remove('block');
})

//kitipet

let hungryLevel = 3
let loveLevel = 0
let poopLevel = 3


let hungryTimer = {
  level3: '',
  level2: '',
  level1: '',
}

let storedHungryTimer = localStorage.getItem('storedHungryTimer'); 
let getHungryTimer = JSON.parse(storedHungryTimer); 

let poopTimer = {
  level3: '',
  level2: '',
  level1: '',
}

let storedPoopTimer = localStorage.getItem('storedPoopTimer'); 
let getPoopTimer = JSON.parse(storedPoopTimer); 


let hateTimer = {
  level1: '',
}

let storedHateTimer = localStorage.getItem('storedHateTimer'); 
let getHateTimer = JSON.parse(storedHateTimer); 

const setHungryTimer = () => {
  const getHours = new Date().getHours();
  console.log(getHours + ' getHours');
  if (hungryLevel === 2) {
    hungryTimer.level3 = (getHours + Math.floor(Math.random() * 3) + 1) % 24;
    console.log(hungryTimer.level3 + ' hungryLevel3');
  } else if (hungryLevel === 1) {
    hungryTimer.level2 = (getHours + Math.floor(Math.random() * 3) + 2) % 24;
    console.log(hungryTimer.level2 + ' hungryLevel2');
  } else if (hungryLevel === 0) {
    hungryTimer.level1 = (getHours + Math.floor(Math.random() * 3) + 4) % 24;
    console.log(hungryTimer.level1 + ' hungryLevel1');
  }
  
  localStorage.setItem('storedHungryTimer', JSON.stringify(hungryTimer));
}



const getHungry = () => {
  const currentHour = new Date().getHours();
  if (hungryTimer.level1 === currentHour) {
    console.log('hungryLevel +1 getHungry')
    hungryLevel += 1;
    hungryLevelDisplay(hungryLevel);
    hungryTimer.level1 = '';
    console.log(hungryTimer.level1);
  } else if (hungryTimer.level2 === currentHour) {
    console.log('hungryLevel +1 getHungry')
    hungryLevel += 1;
    hungryLevelDisplay(hungryLevel);
    hungryTimer.level2 = '';
    console.log(hungryTimer.level2);
  } else if (hungryTimer.level3 === currentHour) {
    console.log('hungryLevel +1 getHungry')
    hungryLevel += 1;
    hungryLevelDisplay(hungryLevel);
    hungryTimer.level3 = '';
    console.log(hungryTimer.level3);
  }
  else {
    console.log('hungryLevel +0 getHungry')
  }
}

setInterval(getHungry , 3600000);

const setPoopTimer = () => {
  const getHours = new Date().getHours();
  console.log(getHours + ' getHours');
  if (poopLevel === 2) {
    poopTimer.level3 = (getHours + Math.floor(Math.random() * 3) + 1) % 24;
    console.log(poopTimer.level3 + ' poopLevel3');
  } else if (poopLevel === 1) {
    poopTimer.level2 = (getHours + Math.floor(Math.random() * 3) + 2) % 24;
    console.log(poopTimer.level2 + ' poopTimerLevel2');
  } else if (poopLevel === 0) {
    poopTimer.level1 = (getHours + Math.floor(Math.random() * 3) + 4) % 24;
    console.log(poopTimer.level1 + 'poopLevel3');
  }
  
  localStorage.setItem('storedPoopTimer', JSON.stringify(poopTimer));

}

const getPoop = () => {
  const currentHour = new Date().getHours();
  if (poopTimer.level1 === currentHour) {
    console.log('pooplevel +1 getPoop')
    poopLevel += 1;
    poopLevelDisplay(poopLevel);
    poopTimer.level1 = '';
    console.log(poopTimer.level1);
  } else if (poopTimer.level2 === currentHour) {
    console.log('poopLevel +1 getPoop')
    poopLevel += 1;
    poopLevelDisplay(poopLevel);
    poopTimer.level2 = '';
    console.log(poopTimer.level2);
  } else if (poopTimer.level3 === currentHour) {
    console.log('poopLevel +1 getPoop')
    poopLevel += 1;
    poopLevelDisplay(poopLevel);
    poopTimer.level3 = '';
    console.log(poopTimer.level3);
  }
  else {
    console.log('poopLevel +0 getPoop')
  }
}

setInterval(getPoop , 3600000);



const setHateTimer = () => {
  var getHours = new Date().getHours();
  console.log(getHours + ' getHours');
  if (loveLevel === 3) {
    hateTimer.level1 = (getHours + Math.floor(Math.random() * 3) + 4) % 24;
    console.log(hateTimer.level1 + ' hateTimerLevel1');
  }
  
  localStorage.setItem('storedHateTimer', JSON.stringify(hateTimer));

}

const getHate = () => {
  const currentHour = new Date().getHours();
  if (hateTimer.level1 === currentHour) {
    console.log('loveLevel -1 getHate')
    loveLevel -= 1;
    loveLevelDisplay(loveLevel);
    hateTimer.level1 = '';
    console.log(hateTimer.level1);
  } else if (hateTimer.level2 === currentHour) {
    console.log('loveLevel -1 getHate')
    loveLevel -= 1;
    loveLevelDisplay(loveLevel);
    hateTimer.level2 = '';
    console.log(hateTimer.level2);
  } else if (hateTimer.level3 === currentHour) {
    console.log('loveLevel -1 getHate')
    loveLevel -= 1;
    loveLevelDisplay(loveLevel);
    loveLevel.level3 = '';
    console.log(hateTimer.level3);
  }
  else {
    console.log('loveLevel -0 getHate')
  }
}

setInterval(getHate , 3600000);


const loveLevelDisplay = (loveLevel) => {
  if (loveLevel === 0) {

    loveStatus0.classList.remove('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.add('none');

  } else if (loveLevel === 1) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.remove('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.add('none');

  } else if (loveLevel === 2) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.remove('none');
    loveStatus3.classList.add('none');

  } else if (loveLevel === 3) {

    loveStatus0.classList.add('none');
    loveStatus1.classList.add('none');
    loveStatus2.classList.add('none');
    loveStatus3.classList.remove('none');

    setHateTimer();
  }
}

const hungryLevelDisplay = (hungryLevel) => {
  if (hungryLevel === 3) {

    hungryStatus0.classList.remove('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.add('none');

    loveLevel -= 1;

  } else if (hungryLevel === 2) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.remove('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.add('none');

    setHungryTimer();

  } else if (hungryLevel === 1) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.remove('none');
    hungryStatus3.classList.add('none');

    setHungryTimer();

  } else if (hungryLevel === 0) {

    hungryStatus0.classList.add('none');
    hungryStatus1.classList.add('none');
    hungryStatus2.classList.add('none');
    hungryStatus3.classList.remove('none');

    setHungryTimer();

  }
}

const poopLevelDisplay = (poopLevel) => {
  if (poopLevel === 0) {

    poopStatus1.classList.add('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poopLevel === 1) {

    poopStatus1.classList.remove('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poopLevel === 2) {

    poopStatus1.classList.add('none');
    poopStatus2.classList.remove('none');
    poopStatus3.classList.add('none');

    setPoopTimer()

  } else if (poopLevel === 3) {
    poopStatus1.classList.add('none');
    poopStatus2.classList.add('none');
    poopStatus3.classList.remove('none');

    loveLevel -= 1;
  }
}

loveLevelDisplay(loveLevel)
hungryLevelDisplay(hungryLevel)
poopLevelDisplay(poopLevel)


feed.addEventListener('click', function() {
  if (hungryLevel !== 0) {

    feeding.classList.add('feeding-animation');
    kitipetHead.classList.remove('default-animation');
    kitipetBody.classList.remove('default-animation');

  } else {

    console.log('pet is full')

  }
})

feeding.addEventListener('animationend', function() {
  feeding.classList.remove('feeding-animation');
  hungryLevel -= 1;
  hungryLevelDisplay(hungryLevel);
  kitipetHead.classList.add('default-animation');
  kitipetBody.classList.add('default-animation');
})


wash.addEventListener('click', function () {
  if (poopLevel !== 0) {
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
  
  poopLevel -= 1;
  poopLevelDisplay(poopLevel);
});  

const lovingStart = () => {

  if (poopLevel !== 0 || hungryLevel !== 0) {
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
  loveLevel += 1;
  loveLevelDisplay(loveLevel);
} 


love.addEventListener('click', lovingStart)


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




