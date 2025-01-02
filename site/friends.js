const friendList = document.getElementById("friendList");
const scrollThumb = document.getElementById("scrollThumb")

let scrollPosition = 0;
const minScroll = 0; // Minimum scroll value (top limit)
const maxScroll = 30; // Maximum scroll value (bottom limit)
const stepSize = 1;




window.addEventListener("wheel", (event) => {

   if (event.deltaY > 0) {
        scrollPosition += stepSize;
    } else {
        scrollPosition -= stepSize;
    };

    scrollPosition = Math.max(minScroll, Math.min(scrollPosition, maxScroll));

      
    friendList.style.transform = `translateY(${0 - (0.2 * scrollPosition)}rem)`;
    scrollThumb.style.transform = `translateY(${0 + (0.2 * scrollPosition)}rem)`;
});
