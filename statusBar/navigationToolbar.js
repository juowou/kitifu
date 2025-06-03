import { screens, currentScreen, screenDisplay } from "../homeScreen/shortcuts.js"

export const back = document.getElementById('back')
export const forward = document.getElementById('forward')

export let backArray = [ ]
export let forwardArray = [ ]

export const navigationArrayPush = (navigationArray, screen) => navigationArray.push(screen)

export const navigationIconDisplay = () => {

    back.style.display = backArray.length === 0 ? 'none' : 'block';
    forward.style.display = forwardArray.length === 0 ? 'none' : 'block';
}

export const navigationAction = (elementArray, opositeArray) => {

    console.log('click!')

    if (elementArray.length === 0) {
        console.log('cant go back/forward');
        return
    };

    const current = document.querySelector('.currentScreen');

    if(current) { 
        opositeArray.push(current.id);
    };

    console.log('opositeArray ' + opositeArray);

    const nextScreenId = elementArray.pop();
    const nextScreen = screens[nextScreenId];

    currentScreen(nextScreen);
    screenDisplay(nextScreen);

    console.log('elementArray ' + elementArray)
} 



