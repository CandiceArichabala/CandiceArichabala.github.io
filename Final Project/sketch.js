//may not work on safari
// Declare a "SerialPort" object
var serial;
var currentString;
let img;
let mySound;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "COM3";

//this array will hold transmitted data


function setup() {
  createCanvas(400,400);
 img=loadImage('mountain.png')
   mySound = loadSound('Wind.mp3');
  
  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
}


// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {
   currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  console.log(currentString);
     
}

function draw() {
   
  background(130,200,255);//light blue
   image(img,0,0,width,height);
    if (currentString == 1){
        background(0);//dark
       image(img,0,0,width,height);
       mySound.play();
    }
  
}


