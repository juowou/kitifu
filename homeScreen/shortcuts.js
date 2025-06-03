const kiti = document.getElementById("kiti");
const friends = document.getElementById("friends")

export const screens = {
    homeScreen : document.getElementById("homeScreen"),
    kitiScreen : document.getElementById("kitiScreen"),
    friendScreen : document.getElementById("friendScreen")
}

export const screensArray = document.querySelectorAll('.screen')

export const currentScreen = (iconScreen) => {

    const screensArray = document.querySelectorAll('.screen')
    const screen = screens[iconScreen]
    screensArray.forEach(screen => {
        screen.classList.remove('currentScreen');
    });

    if (iconScreen) {
        iconScreen.classList.add('currentScreen');
    }

    return iconScreen

}

export const screenDisplay = () => {

    const screensArray = document.querySelectorAll('.screen')

    screensArray.forEach(screen => {
        
        if (!screen.classList.contains('currentScreen')) {
            screen.style.display = 'none';
        } else {
            screen.style.display = 'block';
        }
    });
}

/*      main.js

icon.addEventListener('click', function () {
    currentScreen(iconScreen);
    screenDisplay();
})

*/


