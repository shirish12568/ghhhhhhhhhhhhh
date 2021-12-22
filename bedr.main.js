img2="";
status="";

function preload() {
    img2=loadImage("ad34ad8485eb2eb9fce806826b65375d.jpg");
}

function setup() {
    canvas=createCanvas(700, 420);
    canvas.center();

    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Is Loaded!");
    status=true;
    objectDetector.detect(img2, gotResult);
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
    image(img2, 0, 0, 700, 420);
}