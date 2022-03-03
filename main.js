function preload(){

}
function setup(){
canvas = createCanvas(600,400);
canvas.position(400,260);
cam = createCapture(VIDEO);
cam.hide();
}
function draw(){
image(cam, 0, 0, 600, 400)
}