

let mainButton = document.getElementById("mainButton");
mainButton.onclick = function(){create()};

 // Start slightly above the screen

const gravity = 0.1; // Acceleration due to gravity
const bounceFactor = 0.1; // Bounce energy loss
let numSentances = 0;


function create() {
    let yPosition = -50;
    let yVelocity = 0;   // Initial velocity
    numSentances++;
    id = numSentances.toString();
    const para = document.createElement("p");
    para.id = id;
    para.innerText = "(the something else was probably important)";
    para.style.position = "absolute";
    document.body.appendChild(para);
    console.log(para);
    para.style.top = `${yPosition}px`;
    para.style.left = `${Math.random() * window.innerWidth}px`; 
    fall(para, yPosition, yVelocity);
}



function fall(sent, y, yVelocity) {
    const speed = 2; // Pixels per frame
    yVelocity += gravity; // Apply gravity to the velocity (acceleration)
    y += yVelocity; // Move the element based on the velocity
    // y += speed; // Increase the y-position
    
    // Update the paragraph's position
    sent.style.top = `${y}px`;

    // Check if it hits the bottom of the screen
    if (y + sent.offsetHeight >= window.innerHeight) {
        // If it hits the bottom, apply bounce (reverse velocity and reduce it)
        yVelocity *= -bounceFactor; // Reverse the velocity and reduce it
        y = window.innerHeight - sent.offsetHeight; // Position it at the bottom
    }

    // Check for collision with other elements (simple overlap detection)
    const otherElements = document.querySelectorAll('p');
    for (let other of otherElements) {
        if (other !== sent) {
            const otherTop = parseFloat(other.style.top);
            const otherBottom = otherTop + other.offsetHeight;
            if (y + sent.offsetHeight >= otherTop && y <= otherBottom) {
                // If the paragraph is overlapping another, reverse its velocity
                yVelocity *= -bounceFactor;
                y = otherTop - sent.offsetHeight; // Position it just above the other element
                break;
            }
        }
    }

    // If the element's velocity is too small, stop the animation
    if ( Math.abs(yVelocity) < speed && y + sent.offsetHeight >= window.innerHeight) {
        console.log(`Element ${element.id} stopped.`);
    } else {
        requestAnimationFrame(() => fall(sent, y, yVelocity)); // Continue the animation
    }

    // // Reset if it goes off the screen
    // if (y > window.innerHeight -50) {
    //     //y = -50; // Reset to above the screen
    //     //bounce and stop
    // }
    // else {
    //     requestAnimationFrame(function() { fall(sent, y); }); 
    // }

}