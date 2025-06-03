const statusOnline = document.getElementById('statusOnline');
const statusOffline = document.getElementById('statusOffline');

export let online = navigator.onLine 

export const displayStatus = (online) => {
    if (online) {
        statusOnline.style.display = 'block';
        statusOffline.style.display = 'none';
    } 

    else {
        statusOnline.style.display = 'none';
        statusOffline.style.display = 'block';
    }
}