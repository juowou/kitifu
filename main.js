import { setTime } from "./statusBar/clock.js";

setInterval(setTime , 1000);
setTime();


import { online, displayStatus } from "./statusBar/status.js";

displayStatus(online)


import {  back, forward, backArray, forwardArray, navigationArrayPush, navigationIconDisplay, navigationAction } from "./statusBar/navigationToolbar.js";

import { scroll } from "./tools/scroll.js";

import { friendCards } from "./friends/data.js";
import { friendListAssembly } from "./friends/assembly.js";

friendListAssembly(friendCards);

//back.addEventListener('click', navigationAction(backArray, forwardArray));
//forward.addEventListener('click', navigationAction(forwardArray, backArray))

back.addEventListener('click', function() {

    console.log('click!');
    
    navigationAction(backArray, forwardArray);
    navigationIconDisplay()

});

forward.addEventListener('click', function() {

    console.log('click!');
    navigationAction(forwardArray, backArray);
    navigationIconDisplay()

});


import { currentScreen, screenDisplay } from "./homeScreen/shortcuts.js";

currentScreen(homeScreen)
screenDisplay()
navigationIconDisplay()

kiti.addEventListener('click', function () {

    forwardArray.length = 0;
    const current = document.querySelector('.currentScreen');
    navigationArrayPush(backArray, current.id);
    console.log(backArray);

    currentScreen(kitiScreen);
    screenDisplay();
    navigationIconDisplay();


})

friends.addEventListener('click', function () {

    forwardArray.length = 0;
    const current = document.querySelector('.currentScreen');
    navigationArrayPush(backArray, current.id)

    currentScreen(friendScreen);
    screenDisplay();
    navigationIconDisplay();

    const friendListContent = document.getElementById('friendListContent');
    const friendListContainer = document.getElementById('friendListContainer');
    scroll(friendListContent, friendListContainer, friendScreen);

})

const friendList = document.getElementById('friendList')
const friendListContent = document.getElementById('friendListContent');
const friendListContainer = document.getElementById('friendListContainer')


//scrollGrab

