var message = ["why are you stalking me? lol 📸"];
var textPos = 0;
var speed = 100;
typewriter = () => {
  document.querySelector("#typing").
    innerHTML=message[0].substring(0,textPos) + "<span>\u25ae</span>";
    if(textPos++ != message[0].length)
      setTimeout(typewriter,speed);
    }
window.addEventListener("load",typewriter)
