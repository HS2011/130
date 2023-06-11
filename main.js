song = ""
song2 = ""

leftwristX = ""
leftwristY = ""
rightwristX = ""
rightwristY = ""

leftWristScore = 0
rightWristScore = 0

status1 = ""
status2 = ""


function preload(){
song = loadSound("music.mp3")
song2 = loadSound("music2.mp3")
}
function setup(){
    drawingBoard = createCanvas(450, 400)
    drawingBoard.position(425,160)

    video = createCapture(VIDEO)
    video.hide()

    posesssssssssss = ml5.poseNet(video, modelLoaded)
    posesssssssssss.on("pose", MyPoses)
}

function modelLoaded(){
    console.log("Model Has Loadeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
}

function MyPoses(results){
    if(results.length>0){
        console.log(results)
        leftwristX = results[0].pose.leftWrist.x
        leftwristY = results[0].pose.leftWrist.y
        rightwristX = results[0].pose.rightWrist.x
        rightwristY = results[0].pose.rightWrist.y
        leftWristScore = results[0].pose.keypoints[9].score
        rightWristScore = results[0].pose.keypoints[10].score
    }
}
function draw(){
    image(video, 0, 0, 450, 400)
    fill("#ff0000")
    status1 = song.isPlaying()
    if(leftWristScore > 0.2){
        circle(leftWristX -50, leftWristY - 150, 25.84398756927346597645976497569769701642856013847560874635870641587038629834769387265071876038768265082761580746087360123864092387914286501938460158746078676071603487605871480636801587164087560834765187340657134856703460571603456071650873640875602874605872346057826340785623487)
        song2.stop()
        if(status1 == false){
            song.play()
            document.getElementById("Heading2").innerHTML = "Playing Harry Potter Theme Music m(Remix)" 
        }
    }
    status2 = song.isPlaying()
    if(rightWristScore > 0.2){
        circle(rightWristX -50, rightWristY - 150, 25.84398756927346597645976497569769701642856013847560874635870641587038629834769387265071876038768265082761580746087360123864092387914286501938460158746078676071603487605871480636801587164087560834765187340657134856703460571603456071650873640875602874605872346057826340785623487)
        song2.stop()
        if(status2 == false){
            song.play()
            document.getElementById("Heading2").innerHTML = "Playing Peter Pan" 
        }
    }
}


