//declare an empty array called cards
let cards = [];
//let cardText = [];
var link;



//add images to the cards array
function preload() {
  cards[0] = loadImage('1.png');
  cards[1] = loadImage('2.png');
  cards[2] = loadImage('3.png');
  cards[3] = loadImage('4.png');
  cards[4] = loadImage('5.png');
  cards[5] = loadImage('6.png');
  cards[6] = loadImage('7.png');
  cards[7] = loadImage('8.png');
  cards[8] = loadImage('9.png');
  cards[9] = loadImage('10.png');
  cards[10] = loadImage('11.png');
  cards[11] = loadImage('12.png');


  //cardText[0] = "There is strength in being soft";
 // cardText[1] = "embrace change and new beginnings, there are great things awaiting you in the unknown";
  // cardText[2] = "Be grateful for our shadows, for they only exist because of the presence of the light";
  //cardText[3] = "Sometimes things fall apart so you can build things back up the way you want them to be";
  // cardText[4] = "Remember that not all forms of abundance are monetary or material";
  //cardText[5] = "Justice";
 //  cardText[6] = "your work is not done yet there are bigger abundances waiting for you";
 // cardText[7] = "illusion/deception";
 //  cardText[8] = "protection of one's own energy";
 // cardText[9] = "Adaptability";
  //  cardText[10] = "You don’t have to be productive all the time. Sometimes the most productive thing you can do is nothing";
  //  cardText[11] = "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart";
  
  
}

//no looping otherwise a new image is drawn everytime the draw function loop (it strobes)


function setup() {
  createCanvas(900,1390);
  noLoop();
  
  xPos = width/2;
  yCard = height/4;
  //yText = height*.8;
  
  noLoop();
  
  button = createButton('Pick a Card');
  button.mousePressed(buttonPressed);
  button.position(255, 900);
  button.size( 390,40);
  button.style ('background-color', '#c7a673'); 
  button.style("font-family", "Bodoni");
  background(255, 237, 205);
  //frameRate(60);
  
  
link = createA("https://www.canva.com/design/DAFRZ-NErCw/JhC27UkgVhFddARp8aLwhQ/view?utm_content=DAFRZ-NErCw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
                       "Learn More about This Card", "_blank");
    link.position(370, 960); 
   
  
  
}

function buttonPressed() {
  
  //let numCards = 12
  
  //def = cards(def);
  // randoImg = random(cards);
  //wrds = shadow[sha] + ' ' ;
 // console.log(numCard);
  
  randNum = floor(random (cards.length)); // produces a random # between 0 and the rounds array length and then rounds down
  
  print (randNum);//for testing can delete or commenet out
  image(cards[randNum], xPos, yCard); // display the image (image, x, y, w, h)
  //rect (xPos, yText, width*.6, height*.3);
  //text (cardText[randNum], xPos, yText);
    
  
  //draw()
 }

function draw() {
  imageMode(CENTER);
  //rectMode(CENTER);
  randNum = floor(random (cards.length)); // produces a random # between 0 and the rounds array length and then rounds down
 // print (randNum);//for testing can delete or commenet out
  image(cards[randNum], xPos, yCard); // display the image (image, x, y, w, h)
  //text (cardText[randNum], xPos, yText);
 }

