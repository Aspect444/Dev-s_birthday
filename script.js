noseX=0;
noseY=0;

function preload() {
  mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
  canvas = createCanvas(450, 400);
  canvas.position(900, 300);
  video = createCapture(VIDEO);
  video.size(300,300)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x + 30;
    noseY = results[0].pose.nose.y + 60;
  }
}

function draw() {
  image(video, 0, 0, 450, 400);
  image(mustache, noseX, noseY, 80, 35);
}

function take_snapshot(){    
  save('Me_with_a_mustache.png');
}