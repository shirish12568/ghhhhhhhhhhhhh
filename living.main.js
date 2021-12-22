img4="";
status="";

function preload() {
    img4=loadImage("51pd9P6i9aL._SX425_.jpg");
}

function setup() {
    canvas=createCanvas(670, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Is Loaded!");
    status=true;
    objectDetector.detect(img4, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function back() {
    window.location="index.html";
}

function draw() {
    image(img4, 0, 0, 670, 420);
}