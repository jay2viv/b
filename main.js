Status = "";

function setup()
{
    canvas = createCanvas( 500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    cocossd = ml5.objectDetector("cocossd", modelready);
    document.getElementById("object_name").innerHTML = "Status: Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 850, 500);
}

function preload()
{

}

function modelready()
{
    console.log("(: yay good job!!! :)")
    Status = true;
}