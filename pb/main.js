
let sound = new Audio('./The Rolling Stones - Paint It Black.mp3');

function black(key){
    sound.play();
    switch(key){
        case "Adolf":
            document.getElementById(key).src = ("./assets/" + String(key) + "Black.jpg");
            break;
        case "Doc":
            document.getElementById(key).src = ("./assets/" + String(key) + "Black.jpg");
            break;
         case "PM":
             document.getElementById(key).src = ("./assets/" + String(key) + "Black.jpg");
             break;
    }
}
