export const friendListAssembly = (friendCards) => {
    const friendCardsKeys = Object.keys(friendCards);
    
    // Sort keys: online first (true comes before false when sorted in descending order)
    const sortedKeys = friendCardsKeys.sort((a, b) => {
    if (friendCards[b].online === friendCards[a].online) {
        return friendCards[a].name.localeCompare(friendCards[b].name);
    }
    return friendCards[b].online - friendCards[a].online;
});
    
    for (let key of sortedKeys) {
        let display = '';
        let color = '';
        let isOnline = friendCards[key].online;
        
        if (isOnline === true) {
            display = 'block';
            color = 'online'
        } else {
            display = 'none';
            color = 'offline'

        };

        friendCardsContainer.innerHTML += `<div id="${friendCards[key].name}FriendCard" class="friendCard">
                    <div id="friendStatus" class="friendStatus">
                        <img class="online status ${display}" src="images/online.svg" alt="online">
                        <img class="offline status block" src="images/offline.svg" alt="offline">
                    </div>
                    <div id="friendName" class="friendName ${color}">${friendCards[key].name}</div>
                    <div id="friendAvaContainer" class="friendAvaContainer">
                        <img id="friendAva${friendCards[key].name}" class="friendAva" src=${friendCards[key].ava} alt="friendAva">
                    </div>
                </div>`;
    }
}