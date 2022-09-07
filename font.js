function setup(){
    video = createCapture(VIDEO)
    video.size(530, 400)
    video.position(100, 130)
    canvas = createCanvas(530, 400)
    canvas.position(750, 130)
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("model's been initialized")
}

function gotPoses(results){
    if(results.length>0){
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=floor(leftWristX-rightWristX)
}
}

function draw(){
    background("white")
    textSize(difference)
    fill("green")
    text("Mukundan", 50, 400)
}