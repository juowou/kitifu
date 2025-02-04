const friendList = document.getElementById("friendList");
const scrollThumbFriendList = document.getElementById("scrollThumbFriendList");
const scrollTrackFriendList = document.getElementById("scrollTrackFriendList");
const scrollThumbPmMessages = document.getElementById("scrollThumbPmMessages");
const scrollTrackPmMessages = document.getElementById("scrollTrackPmMessages");
const searchbarInput = document.getElementById("searchbarInput");
const searchbarContainer = document.getElementById("searchbarContainer");
const searchbarOutput = document.getElementById("searchbarOutput")
const searchbarImg = document.getElementById("searchbarImg")
const searchbarImgContainer = document.getElementById("searchbarImgContainer")
const friendCardsContainer = document.getElementById("friendCardsContainer")
const pmMessage = document.querySelectorAll(".pmMessage")
const friendListContainer = document.getElementById("friendListContainer")




searchbarContainer.addEventListener("click", function() {
    if (searchbarContainer.style.left === '1.4rem') {
        searchbarContainer.style.left = '0rem';
        searchbarImgContainer.style.left = '0rem'
      
        //searchBarInput.classList.remove('none');
    }
})

document.addEventListener('click', function(event) {
    if (!searchbarContainer.contains(event.target)) {
      searchbarContainer.style.left = '1.4rem';
      searchbarImgContainer.style.left = '1.4rem'
      //searchBarInput.classList.add('none');
    }
  });

searchbarOutput.addEventListener('input', function() {
    const userInput = searchbarOutput.innerText;
    searchbarInput.value = `${userInput}`
})




const friendListAssembly = () => {
    const friendCardsKeys = Object.keys(friendCards);
    
    for (let key of friendCardsKeys) {
        let display = 'none';
        let isOnline = friendCards[key].online;
        console.log('key.online ' + friendCards[key].online);
        if (isOnline === true) {
            display = 'block'
        } else {
            display = 'none'
        };

        friendCardsContainer.innerHTML += `<div id="friendCard" class="friendCard">
                    <div id="friendStatus" class="friendStatus">
                        <img class="online status ${display}" src="images/online.svg" alt="online">
                        <img class="offline status block" src="images/offline.svg" alt="offline">
                    </div>
                    <div id="friendName" class="friendName">${friendCards[key].name}</div>
                    <div id="friendAvaContainer" class="friendAvaContainer">
                        <img id="friendAva${friendCards[key]}" class="friendAva" src=${friendCards[key].ava} alt="friendAva">
                    </div>
                </div>`
        
        
    }
     
}


friendListAssembly()

const friendCard = document.querySelectorAll('.friendCard')





let containerTop = 50; // Initial position in percentage
let scrollSpeed = 1.5; 
let scrollThumb = ''
let scrollTrack = ''
let scrollContainer = ''
let thumbPosition = 0
let containerPosition = 0
let minScroll = 0; // Minimum scroll value (top limit)
let thumbMaxScroll = 22;
let scrollThumbSpeed = 0
let containerMaxScroll = 0; // Maximum scroll value (bottom limit)
let stepSize = 0;

const scrollUpdate = () => {
    if (isFriendScreen === true) {
        scrollThumb = scrollThumbFriendList;
        scrollTrack = scrollTrackFriendList;
        scrollContainer = friendList;
        thumbMaxScroll = 0;
        scrollSpeed = 5;
    
        containerMaxScroll = (((friendList.offsetHeight)-(friendListContainer.offsetHeight)) * 100 ) / (friendListContainer.offsetHeight);
        stepSize = (friendList.offsetHeight) * 0.1; 

    } else if (isPmScreen === true) {

        scrollThumb = scrollThumbPmMessages;
        scrollTrack = scrollTrackPmMessages;
        scrollContainer = pmChatContainer;
        containerMaxScroll = (((pmChatContainer.offsetHeight)-(pmChat.offsetHeight)) * 100 ) / (pmChat.offsetHeight);
        scrollSpeed = 5;
    };

    let isDragging = false;
    
    const moveThumb = (event) => {
    
        const track = scrollTrack.getBoundingClientRect();
      
        let y = event.clientY - track.top - scrollThumb.offsetHeight / 2;
        console.log(event.clientY);
    
        y = Math.max(0, Math.min(y, track.height - scrollThumb.offsetHeight));
    
        scrollThumb.style.transform = `translateY(${y * 0.066}rem)`;
        scrollContainer.style.transform = `translateY(${0 - (0.1 * y)}rem)`;
        
    }
    
    scrollThumb.addEventListener('mousedown', (e) => {
    
        isDragging = true;
        moveThumb(e);
        
    });
    
    scrollTrack.addEventListener('mousedown', (e) => {
    
        isDragging = true;
        moveThumb(e);
        
    });
    
    const scrollGrab = () => {
        let isMouseDown = false;
        let isMouseMove = false;
    
        scrollTrack.addEventListener("mousedown",function (e) {
          
            isMouseDown = true;
            console.log("mousedown");
            moveThumb(e);
          
        });
    
        scrollThumb.addEventListener("mousedown",function (e) {
          
            isMouseDown = true;
            console.log("mousedown");
            moveThumb(e);
          
        });
      
        document.addEventListener("mousemove" , function(e) {
            if(isMouseDown) {
            isMouseMove = true;
            console.log("mousemove");
          
            moveThumb(e);
          
        }
        });
      
        document.addEventListener("mouseup", function() {
            isMouseDown = false;
        });
      
    }
    
    scrollGrab()
}

document.addEventListener('wheel', function(event) {
    console.log('Wheel event triggered')
    if (event.deltaY > 0) {
      containerTop += scrollSpeed;
    } else {
      containerTop -= scrollSpeed;
    };

    containerTop = Math.max(0, Math.min(containerTop, containerMaxScroll)); 
  
    scrollContainer.style.top = `${- containerTop}%`;
    console.log(scrollContainer);
    console.log(containerTop + ' containerTop')
  });

const resetScroll = () => {
    scrollSpeed = 5;
    
    if (isPmScreen) {
        pmChatContainer.style.top = `-${(((pmChatContainer.offsetHeight)-(pmChat.offsetHeight)) * 100 ) / (pmChat.offsetHeight)}%`;
        containerTop = (((pmChatContainer.offsetHeight)-(pmChat.offsetHeight)) * 100 ) / (pmChat.offsetHeight)
    } else {
        containerTop = 50;
    }
}


let query = ''
let obj = ''
let results = ''
let searchBarInputValue = searchbarInput.value

const searchObjectKeys = (query, obj) => {
    const results = [];
    const lowerCaseQuery = query.toLowerCase();

    if (!query.trim()) {
        for (const key in obj) {
            results.push({
                key: key,
                name: obj[key].name,
                online: obj[key].online,
                ava: obj[key].ava
            });
        }
        return results; // Return all friends immediately
    }
  
    for (const key in obj) {
      if (key.toLowerCase().includes(lowerCaseQuery)) {
        results.push({
            key: key,
            name: obj[key].name,
            online: obj[key].online,
            ava: obj[key].ava
        });
      }
    }
    
    console.log(results.value + ' value')
    return results;
  }
  

  const updateSearchObjectKeys = () => {
    if (isFriendScreen) {
        query = searchBarInputValue;
        obj = friendCards;
        results = searchObjectKeys(query, obj);
        console.log(results)
    }
  }

 
  const displayFriendList = (results) => {
    friendCardsContainer.innerHTML = ""; // Clear previous results

    for (const key in results) {
        let display = 'none';
        let isOnline = results[key].online;
        console.log('key.online ' + results[key].online);
        if (isOnline === true) {
            display = 'block'
        } else {
            display = 'none'
        };

        friendCardsContainer.innerHTML += `<div id="friendCard" class="friendCard">
                    <div id="friendStatus" class="friendStatus">
                        <img class="online status ${display}" src="images/online.svg" alt="online">
                        <img class="offline status block" src="images/offline.svg" alt="offline">
                    </div>
                    <div id="friendName" class="friendName">${results[key].name}</div>
                    <div id="friendAvaContainer" class="friendAvaContainer">
                        <img id="friendAva${results[key]}" class="friendAva" src=${results[key].ava} alt="friendAva">
                    </div>
                </div>`
        
    }

    const friendCard = document.querySelectorAll('.friendCard');

    friendCard.forEach(friendCard => {
        friendCard.addEventListener('click', function() {
            console.log('click');
            
            
           
          
           
            const friendPm = document.getElementById('pmChat' + (friendCard.querySelector('.friendName').innerText));
    
            friendScreen.classList.add('none');
            friendScreen.classList.remove('block');
            pmScreen.classList.remove('none');
            pmScreen.classList.add('block');
            
            
            friendPm.classList.remove('none');
            friendPm.classList.add('block');
            
        
            isKitiScreen = false;
            isFriendScreen = false;
            isPmScreen = true;
    
            scrollUpdate();
            stretchPmBubble();
            resetScroll();
        
            //pelo sim pelo não
            backOn.classList.add('block');
            backOn.classList.remove('none');
            backOff.classList.add('none');
            backOff.classList.remove('block');
    
            backOn.addEventListener('click', function() {
                friendPm.classList.remove('block');
                friendPm.classList.add('none');
                isKitiScreen = true;
                isFriendScreen = false;
                isPmScreen = false;
                resetScroll();
            })
        })
    })
   
  };

searchbarOutput.addEventListener('input', function() {
    
    searchBarInputValue = searchbarOutput.innerText;
    console.log(searchbarInput.value);

    if (searchbarOutput.innerHTML.includes('<br>')) {
        searchbarOutput.innerHTML = searchbarOutput.innerHTML.replace(/<br>/g, ''); // Clear the content completely
    };

    updateSearchObjectKeys();
    searchObjectKeys(query,obj);
    displayFriendList(results);
    
})

friendCard.forEach(friendCard => {
    friendCard.addEventListener('click', function() {
        console.log('click');
        
        
       
      
       
        const friendPm = document.getElementById('pmChat' + (friendCard.querySelector('.friendName').innerText));

        friendScreen.classList.add('none');
        friendScreen.classList.remove('block');
        pmScreen.classList.remove('none');
        pmScreen.classList.add('block');
        
        
        friendPm.classList.remove('none');
        friendPm.classList.add('block');
        
    
        isKitiScreen = false;
        isFriendScreen = false;
        isPmScreen = true;

        scrollUpdate();
        stretchPmBubble();
        resetScroll();
    
        //pelo sim pelo não
        backOn.classList.add('block');
        backOn.classList.remove('none');
        backOff.classList.add('none');
        backOff.classList.remove('block');

        backOn.addEventListener('click', function() {
            friendPm.classList.remove('block');
            friendPm.classList.add('none');
            isKitiScreen = true;
            isFriendScreen = false;
            isPmScreen = false;
            resetScroll();
        })
    })
})