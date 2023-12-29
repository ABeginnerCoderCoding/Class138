status = "";
img = "";
function preload(){
img = loadImage("dt.jpg");
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
    text("Chair",345,25);
    noFill();
    stroke('#FF0000')
    rect(330,10,150,120)
}