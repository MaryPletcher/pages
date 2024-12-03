
let mainButton = document.getElementById("mainButton");
var audio = new Audio('happy-positive-energic-jazz-243719.mp3');
mainButton.onclick = function(){
    audio.play();
    create()

};

 // Start slightly above the screen

const gravity = 0.1; // Acceleration due to gravity
const bounceFactor = 0.1; // Bounce energy loss
let numSentances = 0;
console.log(getStatement());

function create() {
    let yPosition = -50;
    let yVelocity = 0;   // Initial velocity
    numSentances++;
    id = numSentances.toString();
    const para = document.createElement("p");
    para.id = id;
    para.innerText = getStatement("thesomethingelse.txt");
    para.style.position = "absolute";
    document.body.appendChild(para);
    console.log(para);
    para.style.top = `${yPosition}px`;
    para.style.left = `${Math.random() * (window.innerWidth-150)}px`; 
    para.style.rotate = `${Math.floor(Math.random() * 7) - 3}deg`;
    highlight = getHighlight();
    para.style.backgroundColor = highlight;
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
    console.log(window.innerHeight);
    if (y + 3*sent.offsetHeight >= window.innerHeight) {
        // If it hits the bottom, apply bounce (reverse velocity and reduce it)
        yVelocity *= -bounceFactor; // Reverse the velocity and reduce it
        y = window.innerHeight - sent.offsetHeight; // Position it at the bottom
    }

    // Check for collision with other elements (simple overlap detection)
    left = sent.style.left;
    right = left + sent.offsetWidth;
    const otherElements = document.querySelectorAll('p');
    for (let other of otherElements) {
        if (other !== sent) {
            let otherTop = parseFloat(other.style.top);
            let otherBottom = otherTop + other.offsetHeight;
            let otherLeft = parseFloat(other.style.left);
            let otherRight = otherLeft + other.offsetWidth;
            if (y + sent.offsetHeight >= otherTop && y <= otherBottom) {
                // && 
                // (left <= otherRight && left > otherLeft) && (right < otherRight && right > otherLeft)
                // If the paragraph is overlapping another, reverse its velocity
                yVelocity *= -bounceFactor;
                y = otherTop - sent.offsetHeight; // Position it just above the other element
                break;
            }
        }
    }

    // If the element's velocity is too small, stop the animation
    if (Math.abs(yVelocity) < speed && y + sent.offsetHeight >= window.innerHeight) {
        console.log(`Element ${sent.id} stopped.`);
    } else {
        requestAnimationFrame(() => fall(sent, y, yVelocity)); // Continue the animation
    }


}

function getStatement() {
    const lines = [
        " (the something else was working on my love life) ",
        " (the something else was probably important) ",
        " (the something else was cleaning my apartment) ",
        " (the something else was finishing the lego kit i got a year ago) ",
        " (the something else was opening a savings account) ",
        " (the something else was learning to play the piano) ",
        " (the something else was learning a new language) ",
        " (the something else was getting out of bed) ",
        " (the something else was getting a new job) ",
        " (the something else was making breakfast) ",
        " (the something else was buying christmas gifts) ",
        " (the something else was exercising) ",
        " (the something else was being a normal functioning human) ",
        " (the something else was finishing that book) ",
        " (the something else was reaching out to my friends) ",
        " (the something else was writing) ",
        " (the something else was meditating) ",
        " (the something else was texting my mom) ",
        " (the something else was finishing my crochet project) ",
        " (the something else was calling my grandparents) ",
        " (the something else was texting my sisters) ",
        " (the something else was learning javascript) ",
        " (the something else was going outside) ",
        " (the something else was watching stupid internet videos) ",
        " (the something else was planning a trip abroad) ",
        " (the something else was camping) ",
        " (the something else was learning how to make perfect macarons) ",
        " (the something else was getting a haircut) ",
        " (the something else was getting a cat) ",
        " (the something else was learning about philosphy) ",
        " (the something else was probably important) ",
        " (the something else was probably important) ",
        " (the something else was probably important) ",
        " (the something else was probably important) ",
        " (the something else was probably important) "
      ];
      
      
      // Pick a random line
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      return randomLine;
}

function getHighlight() {
    const lines = [
        "#FD9A27",
        "#FD1BA6",
        "#22C6FD",
        "#A1FD29",
        "#FDFD38"
      ];
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    return randomLine;
}