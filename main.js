function takeSnapshot(){

}

function preload(){
nose=loadImage("mustache.png")
}

function setup(){

    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw(){
    image(video,0,0,300,300)
image(nose,250,250,50,50)
}

function modelLoaded(){
    console.log("poseNet is ready");
}

function gotPoses(result){
    if (result.length>0) {
        console.log(result);
    }
}