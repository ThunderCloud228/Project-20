var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3;
var bg, bgImg;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
}

function setup() {
    createCanvas(1000,800);

    bg = createSprite(500,400,10,10);
    bg.addImage("garden", bgImg);

    //creating tom and jerry sprites
    cat = createSprite(840,630,10,10);
    cat.addAnimation("stable", catImg1);
    cat.scale = 0.1;
    
    mouse = createSprite(125,630,10,10);
    mouse.addAnimation("stable", mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(255);

    //evaluation of the collision of the cat and mouse
    if(cat.x - mouse.x <= (cat.width - mouse.width)/2) {
        cat.x = 200;
        cat.scale = 0.125;

        cat.velocityX = 0;
        cat.addAnimation("catHappy", catImg3);
        mouse.addAnimation("mouseHappy", mouseImg3);

        cat.changeAnimation("catHappy", catImg3);
        mouse.changeAnimation("mouseHappy", mouseImg3);
    }


    drawSprites();
}


function keyPressed() {
    //For moving and changing animation
    if(keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing", mouseImg2);
        //mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.addAnimation("catTeasing", catImg2);
        cat.changeAnimation("catTeasing", catImg2);
        cat.scale = 0.15;
        //cat.frameDelay = 25;
    }
}
