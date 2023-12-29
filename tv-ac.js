status = "";
img = "";
function preload(){
img = loadImage("tv-ac.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetecter = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetecter.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("TV",180,125);
    noFill();
    stroke('#FF0000')
    rect(165,110,300,180)
    fill("#FF0000");
    text("Plant",95,315);
    noFill();
    stroke('#FF0000')
    rect(80,300,60,110)
}