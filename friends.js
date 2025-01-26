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
const pmChatContainer = document.getElementById("pmChatContainer")
const pmMessage = document.querySelectorAll(".pmMessage")

let scrollThumb = ''
let scrollTrack = ''
let scrollContainer = ''
let thumbPosition = 0
let containerPosition = 0
let minScroll = 0; // Minimum scroll value (top limit)
let thumbMaxScroll = 0;
let containerMaxScroll = 0; // Maximum scroll value (bottom limit)
let stepSize = 1;


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


let friendCards = {
    juowou: {
        name: "juowou",
        online: true,
        ava: "images/friendAva.svg"
    },
    nanu : {
        name: "nanu",
        online: true,
        ava: "images/friendAvaNanu.svg"
    },
    sophia : {
        name: "sophia",
        online: true,
        ava: "images/friendAvaSophia.svg"
    },
    inêsss : {
        name: "inêsss",
        online: true,
        ava: "images/friendAvaInes.svg"
    },
    daniellll : {
        name: "daniellll",
        online: false,
        ava: "images/friendAvaDaniel.svg"
    },
    mariaah : {
        name: "mariaah",
        online: false,
        ava: "images/friendAvaMariah.svg"
    },
    casaiss : {
        name: "casaiss",
        online: false,
        ava: "images/friendAvaCasais.svg"
    },
    ricardoooo : {
        name: "ricardoooo",
        online: false,
        ava: "images/friendAvaRicardo.svg"
    },
    marianaPAULA : {
        name: "marianaPAULA",
        online: true,
        ava: "images/friendAvaPaula.svg"
    },
    jecapepeca : {
        name: "jecapepeca",
        online: true,
        ava: "images/friendAvaJeca.svg"
    },
    
}

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

friendCard.forEach(friendCard => {
    friendCard.addEventListener('click', function() {
        
        const friendPm = document.getElementById('pmChat' + (friendCard.querySelector('.friendName').innerText));

        friendScreen.classList.add('none');
        friendScreen.classList.remove('block');
        
        friendPm.classList.remove('none');
        friendPm.classList.add('block');
        pmScreen.classList.remove('none');
        pmScreen.classList.add('block');
    
        isKitiScreen = false;
        isFriendScreen = false;
        isPmScreen = true;

        stretchPmBubble();
        scrollUpdate();
        
    
        //pelo sim pelo não
        backOn.classList.add('block');
        backOn.classList.remove('none');
        backOff.classList.add('none');
        backOff.classList.remove('block');

        backOn.addEventListener('click', function() {
            friendPm.classList.remove('block');
            friendPm.classList.add('none')
        })
    })
})

const pmBubbleCenter = document.querySelectorAll('.pmBubbleCenter')
const pmBubbleML = document.querySelectorAll('.pmBubbleML')
const pmBubbleBC = document.querySelectorAll('.pmBubbleBC')
const pmBubbleMR = document.querySelectorAll('.pmBubbleMR')
const pmText = document.querySelectorAll('.pmText')

const stretchPmBubble = () => {
    pmBubbleCenter.forEach((pmBubbleCenter, index) => {
        const pmBubbleCenterWidth = pmBubbleCenter.clientWidth;
        const newWidth = (pmBubbleCenterWidth/16) ; 
        const pmBubbleCenterHeight = pmBubbleCenter.clientHeight;
        const newHeight = (pmBubbleCenterHeight/16) - 1; 
        
        pmBubbleBC[index].style.width = `${newWidth}rem`;
        pmBubbleML[index].style.height =`${newHeight}rem`;
        pmBubbleMR[index].style.height =`${newHeight}rem`;
    });
}




const scrollUpdate = () => {
    if (isFriendScreen === true) {
        scrollThumb = scrollThumbFriendList;
        scrollTrack = scrollTrackFriendList;
        scrollContainer = friendList;
        thumbMaxScroll = 100;
        containerMaxScroll =   (((friendCard.length)-4) * 19) + (1.5 * 19);

    } else if (isPmScreen === true) {
        scrollThumb = scrollThumbPmMessages;
        scrollTrack = scrollTrackPmMessages;
        scrollContainer = pmChatContainer;
        containerMaxScroll = 1000
        thumbMaxScroll = 100;

    };


    
    window.addEventListener("wheel", (event) => {
    
        thumbPosition += event.deltaY;
        thumbPosition = Math.max(minScroll, Math.min(thumbPosition, thumbMaxScroll));
        containerPosition += event.deltaY;
        containerPosition = Math.max(minScroll, Math.min(containerPosition, containerMaxScroll));
    
        scrollContainer.style.transform = `translateY(${0 - (0.08 * (containerPosition))}rem)`; //velocidade do scroll
        scrollThumb.style.transform = `translateY(${0 + (0.066*((friendCard.length/7.2)) * thumbPosition)}rem)`;
        
    });
    
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

const resetScroll = () => {

    scrollPosition = 0;
    scrollContainer.style.transform = `translateY(${0 - (scrollPosition)}%)`;
    scrollThumb.style.transform = `translateY(${0 + (0.066 * scrollPosition)}rem)`;
}