leftWristX = 0;
leftWristY  = 0;
rightWristX = 0;
rightWristY = 0;

function setup() 
{
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
}

function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}