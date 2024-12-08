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

let hungryLevel = 0
let loveLevel = 0
let poopLevel = 2

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

const poopLevelDisplay = (poopLevel) => {
  if (poopLevel === 0) {
    poopStatus1.classList.add('none');
    poopStatus1.classList.remove('block');

    poopStatus2.classList.add('none');
    poopStatus2.classList.remove('block');

    poopStatus3.classList.add('none');
    poopStatus3.classList.remove('block');
  } else if (poopLevel === 1) {
    poopStatus1.classList.add('block');
    poopStatus1.classList.remove('none');

    poopStatus2.classList.add('none');
    poopStatus2.classList.remove('block');

    poopStatus3.classList.add('none');
    poopStatus3.classList.remove('block');
  } else if (poopLevel = 2) {
    poopStatus1.classList.add('none');
    poopStatus1.classList.remove('block');

    poopStatus2.classList.add('block');
    poopStatus2.classList.remove('none');

    poopStatus3.classList.add('none');
    poopStatus3.classList.remove('block');
  } else if (poopLevel = 3) {
    poopStatus1.classList.add('none');
    poopStatus1.classList.remove('block');

    poopStatus2.classList.add('none');
    poopStatus2.classList.remove('block');

    poopStatus3.classList.add('block');
    poopStatus3.classList.remove('none');
  }
}

loveLevelDisplay(loveLevel)
hungryLevelDisplay(hungryLevel)
poopLevelDisplay(poopLevel)


feed.addEventListener('click', function() {
  if (hungryLevel < 3) {
    feeding.classList.add('feeding-animation');
    kitipetHead.classList.remove('default-animation');
    kitipetBody.classList.remove('default-animation');
  } else {
    return
  }
})

feeding.addEventListener('animationend', function() {
  feeding.classList.remove('feeding-animation');
  hungryLevel += 1;
  hungryLevelDisplay(hungryLevel);
  kitipetHead.classList.add('default-animation');
  kitipetBody.classList.add('default-animation');
})


wash.addEventListener('click', function () {
  if (poopLevel > 0) {
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
  console.log('yo');
  loving.classList.remove('none');
  loving.classList.add('block');

  kitipetHead.classList.remove('default-animation');
  kitipetHead.classList.add('loving-animation');

  kitipetBody.classList.remove('default-animation');
  kitipetBody.classList.add('loving-animation');

  lovingFrame1.addEventListener('animationend', lovingEnd)
}

const lovingEnd = () => {
  loving.classList.remove('block');
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





