img5="";
status="";

function preload() {
    img5=loadImage("elephant.jpeg");
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
    objectDetector.detect(img5, gotResult);
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
    image(img5, 0, 0, 670, 420);
}