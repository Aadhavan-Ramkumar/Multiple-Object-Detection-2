var Backpack = ""
var Status = ""

function preload() {
    Backpack = loadImage("Backpack.jpeg")
}

function setup() {
    Canvas = createCanvas(500, 375)
    Canvas.position(400, 175)
    ObjectDetector = ml5.objectDetector("cocossd", ModelLoaded)
    document.getElementById("Status").innerHTML = "Status: Detecting Objects"
}

function draw() {
    image(Backpack, 0, 0, 500, 375)
}

function ModelLoaded() {
    console.log("Model Loaded!")
    Status = true
    ObjectDetector.detect(Backpack, GetResults)
}

function GetResults(Error, Results) {
    if (Error) {
        console.error(Error)
    }
    console.log(Results)
    Objects = Results
}