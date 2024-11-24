

let mainButton = document.getElementById("mainButton");
mainButton.onclick = function(){create()};

 // Start slightly above the screen
const speed = 2; // Pixels per frame
let numSentances = 0;


function create() {
    let yPosition = -50;
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
    fall(para, yPosition);
}



function fall(sent, y) {
    callId = numSentances.toString()
    //let sent = document.getElementById(callId);
    console.log("starting y: " + y);
    y += speed; // Increase the y-position
    console.log("y: " + y);
    // Update the paragraph's position
    sent.style.top = `${y}px`;
    console.log("sent.style.top: " + sent.style.top);

    // Reset if it goes off the screen
    if (y > window.innerHeight) {
        y = -50; // Reset to above the screen
    }
    else {
        requestAnimationFrame(function() { fall(sent, y); }); 
    }

}