    leftWristX=0;
    rightWristX=0;
    difference=0;
    noseX=0;
    noseY=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(530, 400);
    video.position(100, 130);
    canvas = createCanvas(530, 400);
    canvas.position(750, 130);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("model's been initialized");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}

function draw(){
    background("white");
    document.getElementById("size_of_font").innerHTML="Th' font size : "+difference+" px";
    textSize(difference);
    fill("green");
    text("Mukundan", noseX, noseY);
}