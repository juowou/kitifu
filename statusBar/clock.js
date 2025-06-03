
//clock

let clock = document.getElementById("clock")

export const getTime = () => {
  const newDate = new Date();
  return newDate.toLocaleTimeString('en-US', 
    { hour12: false, hour: 'numeric', minute: 'numeric' }).toString();
}
  
export const setTime = () => {
    var time = getTime();
    clock.innerText = time;
  }

