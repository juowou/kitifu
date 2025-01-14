const friendList = document.getElementById("friendList");
const scrollThumb = document.getElementById("scrollThumb");
const scrollTrack = document.getElementById("scrollTrack")
const searchbarInput = document.getElementById("searchbarInput");
const searchbarContainer = document.getElementById("searchbarContainer");
const searchbarOutput = document.getElementById("searchbarOutput")
const searchbarImg = document.getElementById("searchbarImg")
const searchbarImgContainer = document.getElementById("searchbarImgContainer")


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

