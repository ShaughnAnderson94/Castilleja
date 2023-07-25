import { randomNouns } from "./utilities/prompt.js";
import { randomizerArray } from "./utilities/RandomizerArray.js";
let Button1 = document.querySelector('#B1');
let Button2 = document.querySelector('#B2');
let Button3 = document.querySelector('#B3');

// Randomize drawing prompt
let prompt = document.querySelector('#prompt');
const randomIndex = Math.floor(Math.random() * randomNouns.length);
 prompt.innerHTML ='Draw a ' + randomNouns[randomIndex];

const canvas = document.querySelector('#draw');
//  we dont draw on canvas but on its context this
// gets us that
const context = canvas.getContext('2d');

// here we set the canvas to take up the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
if(randomizerArray[0] % 10 != 0){
context.lineJoin = 'round';
context.lineCap = 'round';
}

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
//Randomly Set color
if( randomizerArray[0]/6 < 16){
 hue = 0;
}
if( 17 < randomizerArray[0] &&  randomizerArray[0] < 33){
     hue = 60;
    }
    if( 34 < randomizerArray[0] &&  randomizerArray[0] < 50){
         hue = 120;
        }
        if( 51 < randomizerArray[0] &&  randomizerArray[0] < 66){
             hue = 180;
            }
            if( 67 <randomizerArray[0] &&  randomizerArray[0] < 83){
                 hue = 240;
                }
                if( 84 < randomizerArray[0] && randomizerArray[0] < 100){
                     hue = 300;
                    }
console.log(randomizerArray);
function draw(e){
    // fun trick ends function early if no mouse down
    if(isDrawing == false){return}
    //draws line from lastXY to offset
context.beginPath();
context.moveTo(lastX,lastY);
context.lineTo(e.offsetX, e.offsetY);
context.strokeStyle = `hsl(${hue}, 100%, 50% )`;
context.stroke();
// Randomly set width
context.lineWidth =4;
if(randomizerArray[1] % 2 == 0)
{context.lineWidth =12;}
if(randomizerArray[1] % 3 == 0)
{context.lineWidth =1;}
if(randomizerArray[1] % 7 == 0)
{context.lineWidth =100;}
if(randomizerArray[1] % 15 == 0)
{context.lineWidth =200;}
if(randomizerArray[1] % 20 == 0)
{context.lineWidth =1000;}


//updates where line started
if(randomizerArray[2] % 10 != 0){
lastX = e.offsetX;
lastY =e.offsetY;
}
}
//follows mouse movement on canvas and runs draw
canvas.addEventListener('mousemove', (draw));
// make it so we only draw while clicking and we
//kno to start drawing from where mouse is clicked
canvas.addEventListener('mousedown', (e) =>{ isDrawing =true;
    lastX = e.offsetX;
    lastY =e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing =false);
// if mouse leaves window releases
canvas.addEventListener('mouseout', () => isDrawing =false);