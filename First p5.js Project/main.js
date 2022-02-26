function preload(){
  img=loadImage("Pic.jpg");
}

function setup(){
    canvas=createCanvas(640, 480);
}

function draw(){
    image(img, 100, 100, 450, 300);
    circle(30, 50, 70);
    rect(40, 40, 20, 30);
}

function take_snapshot(){
    save('Mypicture.png');
}