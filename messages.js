
const smBubbleCenter = document.getElementById('smBubbleCenter')
const smBubbleML = document.getElementById('smBubbleML')
const smBubbleBC = document.getElementById('smBubbleBC')
const smBubbleMR = document.getElementById('smBubbleMR')
const smUserAva = document.getElementById('smUserAva')
const smText = document.getElementById('smText')
const smBubbleContainer = document.getElementById('smBubbleContainer')
const smBubbleBg = document.getElementById('smBubbleBg')
const pmChat = document.getElementById('pmChat')




const pmMessagesAssemble = () => {
    const pmMessagesKeys = Object.keys(pmMessages);

    for (let key of pmMessagesKeys) {
        const messages = pmMessages[key];

        // Create a container for the user's chat
        pmChat.innerHTML +=
            `<div id="pmChat${key}" class="pmChatUser none">
                <div id="pmChatContainer" class="pmChatContainer"></div>
            </div>`;

        // Find the newly created container for this user
        const userChatContainer = document.querySelector(`#pmChat${key} .pmChatContainer`);

        // Append each message to the user's container
        messages.forEach(message => {
            const pmUser = message.user;
            const pmMessageCode = message.messageCode;
            const pmText = message.text;
            const pmMessageAva = message.ava;

            console.log(`pmUser: ${pmUser}, pmMessageCode: ${pmMessageCode}, pmText: ${pmText}, pmMessageAva: ${pmMessageAva}`);

            userChatContainer.innerHTML +=
                `<div id="${pmMessageCode}" class="pmMessageContainer">
                    <div id="pmBubbleContainer" class="pmBubbleContainer">
                        <div id="pmBubbleLeft" class="pmBubbleLeft">
                            <img id="pmBubbleTL" class="pmBubbleTL" src="images/pmBubbleTL.svg">
                            <img id="pmBubbleML" class="pmBubbleML" src="images/pmBubbleML.svg">
                            <img id="pmBubbleBL" class="pmBubbleBL" src="images/pmBubbleBL.svg">
                        </div>
                        <div id="pmBubbleCenter" class="pmBubbleCenter">
                            <p id="pmText" class="pmText">${pmText}</p>
                            <img id="pmBubbleBC" class="pmBubbleBC" src="images/pmBubbleBC.svg">
                        </div>    
                        <div id="pmBubbleRight" class="pmBubbleRight">
                            <img id="pmBubbleTR" class="pmBubbleTR" src="images/pmBubbleTR.svg">
                            <img id="pmBubbleMR" class="pmBubbleMR" src="images/pmBubbleMR.svg">
                            <img id="pmBubbleBR" class="pmBubbleBR" src="images/pmBubbleBR.svg">
                        </div>
                        <div id="pmuserAva" class="pmUserAva">
                            <img id="friendAva${pmUser}" class="friendAva" src="${pmMessageAva}" alt="friendAva">
                        </div>
                    </div>  
                </div>`;
        });
    }
};

pmMessagesAssemble();

const pmChatContainer = document.getElementById("pmChatContainer")
const pmBubbleCenter = document.querySelectorAll('.pmBubbleCenter')
const pmBubbleML = document.querySelectorAll('.pmBubbleML')
const pmBubbleBC = document.querySelectorAll('.pmBubbleBC')
const pmBubbleMR = document.querySelectorAll('.pmBubbleMR')
const pmUserAva = document.querySelectorAll('.pmUserAva')
const pmText = document.querySelectorAll('.pmText')


const stretchPmBubble = () => {
    pmBubbleCenter.forEach((pmBubbleCenter, index) => {
        const pmBubbleCenterWidth = pmBubbleCenter.clientWidth;
        let newWidth = (pmBubbleCenterWidth/16) ; 
        const pmBubbleCenterHeight = pmBubbleCenter.clientHeight;
        let newHeight = (pmBubbleCenterHeight/16) -1; 
        console.log(newHeight);
        if (newHeight < 1) {
            newHeight = 0.25
        };

        pmBubbleBC[index].style.width = `${newWidth}rem`;
        pmBubbleML[index].style.height =`${newHeight + 0.2}rem`;
        pmBubbleMR[index].style.height =`${newHeight}rem`;
        pmUserAva[index].style.paddingTop = `${newHeight - 0.45}rem`

    }); 
    }

const stretchSmBubble = () => {
        smText.style.height = `${smText.scrollHeight}px`
        const smTextWidth = smText.clientWidth;
        let newWidth = (smTextWidth/16) ; 
        const smTextHeigh = smText.clientHeight;
        let newHeight = (smTextHeigh/16) -1; 
        console.log(newHeight);

        if (newHeight <= 0) {
            smBubbleContainer.style.top = `7.6rem`;
            newHeight = 0
        }
        smBubbleBg.style.height = `${newHeight}rem`;
        smUserAva.style.paddingTop = `${newHeight}rem`;
        smBubbleBC.style.width = `${newWidth}rem`;
        smBubbleML.style.height =`${newHeight + 0.4}rem`;
        smBubbleMR.style.height =`${newHeight + 0.4}rem`;
        
        smBubbleContainer.style.top = `${7.6 - newHeight}rem`

        
        console.log('stretchSmBubble')
        console.log(newHeight)
}

smText.addEventListener('input', stretchSmBubble)







