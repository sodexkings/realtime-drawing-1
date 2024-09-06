function setup(){
    video = createCapture (VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes)
}

function draw() {
    background('#FF0000');

    document.getElementById("square_size").innerHTML = "Width and Height of a Square will be ="+ difference +"px"
    fill('#40e0d0')
    stroke('#40e0d0')
square(noseX, noseY, difference)
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}

function gotposes(results){
    if(results.length > 0)
    {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose = " + noseX + "nose = " + noseY)
   
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
   difference = floor(leftWristX - rightWristX)
console.log("leftWristX =" +leftWristX+ " rightWristX = " + rightWristX + "difference = " + difference)   
}
}

noseX = 0;
noseY = 0;
difference = 0
rightWristX = 0
leftWristX = 0




