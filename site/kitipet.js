const kitipet = document.getElementById("kitipet")
const kitipetHead = document.getElementById("kitipetHead");
const kitipetBody = document.getElementById("kitipetBody");
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

//kitipet

  //getLocalStorage

  let storedHungry = JSON.parse(localStorage.getItem('hungry'))
  let storedLove = JSON.parse(localStorage.getItem('love'));
  let storedPoop = JSON.parse(localStorage.getItem('poop'));
  
  const updateStats = () => {
    if (storedHungry !== null || storedLove !== null || storedPoop !== null) {
      console.log('updateStats')
      hungry = storedHungry;
      love = storedLove;
      poop = storedPoop;
  
      loveLevelDisplay(storedLove.level);
      hungryLevelDisplay(storedHungry.level);
      poopLevelDisplay(storedPoop.level);
  
      getHungry();
  
    } else {
  
      loveLevelDisplay(love.level);
      hungryLevelDisplay(hungry.level);
      poopLevelDisplay(poop.level);
  
      console.log('updateStats localStorage null')
      localStorage.setItem('hungry', JSON.stringify(hungry));
      storedHungry = JSON.parse(localStorage.getItem('hungry'));
      localStorage.setItem('love', JSON.stringify(love));
      storedLove = JSON.parse(localStorage.getItem('love'));
      localStorage.setItem('poop', JSON.stringify(poop));
      storedPoop = JSON.parse(localStorage.getItem('poop'));
  
      
    };
    
  
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    updateStats();
  });
  
  // level 1 = bad; level 4 = good;
  let hungry = {
    level: 1,
    timer: [],
  } 
  
  let poop = {
    level: 1,
    timer: [],
  } 
  
  let love = {
    level: 1,
    timer: [],
  } 
  
  //set e get
  // há um bug aqui que é: se a hora de um timer coincidir com a hora do outro, 
  // o getTimer vai remover os dois timers, mas só vai fazer -1, em vez de -2, 
  // o que vai crashar toda esta logica no localStorage e depois vai ser preciso limpa-lo :) 
  // mas tou me a cagar, isso nunca vai acontecer ahahahah ( ⊙ _ ⊙)
  
  const setHungryTimer = () => {
    
    const currentDate = new Date();  
    console.log(currentDate + ' currentDate');
    if (hungry.level === 2) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 4));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      hungry.timer.push(dateUpdateNumeric);
      console.log(hungry.timer + ' hungry.timers dateUpdateNumeric');
    
    } else if (hungry.level === 3) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 8));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      hungry.timer.push(dateUpdateNumeric);
      console.log(hungry.timer + ' hungry.timers dateUpdateNumeric');
  
    } else if (hungry.level === 4) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 16));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      hungry.timer.push(dateUpdateNumeric);
      console.log(hungry.timer + ' hungry.timers dateUpdateNumeric');
  
    };
  
    localStorage.setItem('hungry', JSON.stringify(hungry));
    console.log('hungryStored updated');
    console.log(storedHungry);
    
  }
  
  const getHungry = () => {
    const newDate = new Date();
    console.log('getHungry');
  
    currentDate = updateDateNumeric(newDate);
    if (hungry.timer.some(time => time !== '' && time <= currentDate)) {
      console.log(hungry.level + '-1 getHungry')
      hungry.level -= 1;
      hungryLevelDisplay(hungry.level);
      hungry.timer = hungry.timer.filter(time => time === '' || time > currentDate);
      localStorage.setItem('hungry', JSON.stringify(hungry));
    } else {
      console.log(currentDate + ' < ' + hungry.timer)
    };
  
    console.log(currentDate);
    
    localStorage.setItem('hungry', JSON.stringify(hungry));
    hungryLevelDisplay(storedHungry.level);
    console.log('hungryStored updated')
  }
  
  
  setInterval(getHungry, 360000);
  
  const setPoopTimer = () => {
    const currentDate = new Date();  
    console.log(currentDate + ' currentDate');
    if (poop.level === 2) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 4));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      poop.timer.push(dateUpdateNumeric);
      console.log(poop.timer + ' poop.timers dateUpdateNumeric');
    
    } else if (poop.level === 3) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 8));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      poop.timer.push(dateUpdateNumeric);
      console.log(poop.timer + ' poop.timers dateUpdateNumeric');
  
    } else if (poop.level === 4) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 16));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      poop.timer.push(dateUpdateNumeric);
      console.log(poop.timer + ' poop.timers dateUpdateNumeric');
  
    };
  
    localStorage.setItem('poop', JSON.stringify(poop));
    console.log('storedPoop updated');
    console.log(storedPoop);
  }
  
  const getPoop = () => {
    console.log('getPoop');
  
    currentDate = updateDateNumeric(newDate);
    if (poop.timer.some(time => time !== '' && time <= currentDate)) {
      console.log(poop.level + '-1 getPoop')
      poop.level -= 1;
      poopLevelDisplay(poop.level);
      poop.timer = poop.timer.filter(time => time === '' || time > currentDate);
      localStorage.setItem('poop', JSON.stringify(poop));
    };
    console.log(currentDate);
    
    localStorage.setItem('poop', JSON.stringify(poop));
    poopLevelDisplay(storedPoop.level);
    console.log('storedPoop updated')
  }
  
  setInterval(getPoop , 3600000);
  
  
  
  const setHateTimer = () => {
    const currentDate = new Date();  
    console.log(currentDate + ' currentDate');
    if (love.level === 2) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 4));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      love.timer.push(dateUpdateNumeric);
      console.log(love.timer + ' love.timers dateUpdateNumeric');
    
    } else if (love.level === 3) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 8));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      love.timer.push(dateUpdateNumeric);
      console.log(love.timer + ' love.timers dateUpdateNumeric');
  
    } else if (love.level === 4) {
  
      currentDate.setHours(currentDate.getHours() + (Math.floor(Math.random() * 3) + 16));
      console.log(currentDate + ' currentDate updated');
  
      const dateUpdateNumeric = updateDateNumeric(currentDate);
      console.log(dateUpdateNumeric + ' dateUpdate numeric');
  
      love.timer.push(dateUpdateNumeric);
      console.log(love.timer + ' love.timers dateUpdateNumeric');
  
    };
  
    localStorage.setItem('love', JSON.stringify(love));
    console.log('storedLove updated');
    console.log(storedLove);
    
  }
  
  const getHate = () => {
    console.log('getHate');
  
    currentDate = updateDateNumeric(newDate);
    if (love.timer.some(time => time !== '' && time <= currentDate)) {
      console.log(love.level + '-1 getHate')
      love.level -= 1;
      loveLevelDisplay(love.level);
      love.timer = love.timer.filter(time => time === '' || time > currentDate);
      localStorage.setItem('love', JSON.stringify(love));
    } else{
      console.log(currentDate + ' > ' + love.timer)
    };
    console.log(currentDate );
    
    localStorage.setItem('love', JSON.stringify(love));
    loveLevelDisplay(storedLove.level);
    console.log('storedLove updated')
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
  
      console.log(storedHungry.timer[0]);
  
    } else if (hungry.level === 3) {
  
      hungryStatus0.classList.add('none');
      hungryStatus1.classList.add('none');
      hungryStatus2.classList.remove('none');
      hungryStatus3.classList.add('none');
  
    
  
    } else if (hungry.level === 4) {
  
      hungryStatus0.classList.add('none');
      hungryStatus1.classList.add('none');
      hungryStatus2.classList.add('none');
      hungryStatus3.classList.remove('none');
  
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
  
  
    } else if (love.level === 3) {
  
      loveStatus0.classList.add('none');
      loveStatus1.classList.add('none');
      loveStatus2.classList.remove('none');
      loveStatus3.classList.add('none');
  
  
    } else if (love.level === 4) {
  
      loveStatus0.classList.add('none');
      loveStatus1.classList.add('none');
      loveStatus2.classList.add('none');
      loveStatus3.classList.remove('none');
  
  
    }
  }
  
  const poopLevelDisplay = () => {
    if (poop.level === 4) {
  
      poopStatus1.classList.add('none');
      poopStatus2.classList.add('none');
      poopStatus3.classList.add('none');
  
  
    } else if (poop.level === 3) {
  
      poopStatus1.classList.remove('none');
      poopStatus2.classList.add('none');
      poopStatus3.classList.add('none');
  
  
    } else if (poop.level === 2) {
  
      poopStatus1.classList.add('none');
      poopStatus2.classList.remove('none');
      poopStatus3.classList.add('none');
  
  
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
    setHungryTimer();
  
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
  
    setPoopTimer();
  
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
    
    
    if (love.level < 4){
      love.level += 1;
      console.log('loveLevel +1')
      localStorage.setItem('love', JSON.stringify(love));
      console.log('loveStored updated');
  
      setHateTimer();
  
      loveLevelDisplay(love.level);
    }
  
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
  