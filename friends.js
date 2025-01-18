const friendList = document.getElementById("friendList");
const scrollThumb = document.getElementById("scrollThumb");
const scrollTrack = document.getElementById("scrollTrack")
const searchbarInput = document.getElementById("searchbarInput");
const searchbarContainer = document.getElementById("searchbarContainer");
const searchbarOutput = document.getElementById("searchbarOutput")
const searchbarImg = document.getElementById("searchbarImg")
const searchbarImgContainer = document.getElementById("searchbarImgContainer")
const friendCardsContainer = document.getElementById("friendCardsContainer")


let scrollPosition = 0
const minScroll = 0; // Minimum scroll value (top limit)
const maxScroll = 90; // Maximum scroll value (bottom limit)
const stepSize = 1;


const resetScroll = () => {
    scrollPosition = 0;
    friendList.style.transform = `translateY(${0 - (scrollPosition)}%)`;
    scrollThumb.style.transform = `translateY(${0 + (0.066 * scrollPosition)}rem)`;
}

window.addEventListener("wheel", (event) => {

    scrollPosition += event.deltaY;
    scrollPosition = Math.max(minScroll, Math.min(scrollPosition, maxScroll));


    friendList.style.transform = `translateY(${0 - (scrollPosition)}%)`;
    scrollThumb.style.transform = `translateY(${0 + (0.066 * scrollPosition)}rem)`;
});


let isDragging = false;


const moveThumb = (event) => {

    const track = scrollTrack.getBoundingClientRect();
  
    let y = event.clientY - track.top - scrollThumb.offsetHeight / 2;
    console.log(event.clientY);

    y = Math.max(0, Math.min(y, track.height - scrollThumb.offsetHeight));

    scrollThumb.style.transform = `translateY(${y * 0.066}rem)`;
    friendList.style.transform = `translateY(${0 - (0.1 * y)}rem)`;
    
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
                        <img id="friendAva1" class="friendAva" src=${friendCards[key].ava} alt="friendAva">
                    </div>
                </div>`
    }
     
}

friendListAssembly()