img3="";
status="";

function preload() {
    img3=loadImage("hqdefault.jpg");
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
    objectDetector.detect(img3, gotResult);
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
    image(img3, 0, 0, 670, 420);
}