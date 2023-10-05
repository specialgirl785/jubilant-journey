song1="";
song2="";

function preload(){
    song =loadSound("ETA.mp3");
    song =loadSound("supido.mp3");
}

function setup(){
    canvas= createCanvas(500,500)
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}