let width = 1920;
let height = 1080;

const sounds = new Tone.Players
(
  {
    dirt: "media/dirt.mp3",
    oof: "media/minecraft_oof.mp3",
    scientist: "media/scientist.mp3",
    BROTHER: "media/THAT_BROTHERS_FLOATING.mp3",

  }
)

let soundNames = ['dirt','oof','scientist','BROTHER'];

const delay = new Tone.FeedbackDelay("8n", 0.5);


let dirtbutton;
let oofbutton;
let scientistbutton;
let BROTHERbutton;
let slider;

function setup() 
{
  createCanvas(width, height);
  sounds.connect(delay);
  delay.toDestination();

  slider = createSlider(0., 1., 0.5, 0.05);
  slider.mouseReleased( ()=>
  {
    delay.delayTime.value = slider.value();
  })

  dirtbutton = createButton("dirt");
  dirtbutton.position((1920 / 6), 500);
  dirtbutton.mousePressed( () => playSound("dirt")   );
  dirtbutton.size(100, 100);

  oofbutton = createButton("oof");
  oofbutton.position((1920 / 3), 500);
  oofbutton.mousePressed( ()  => playSound("oof")   );
  oofbutton.size(100, 100);

  scientistbutton = createButton("scientist");
  scientistbutton.position((1920 / 2), 500);
  scientistbutton.mousePressed( ()  => playSound("scientist")   );
  scientistbutton.size(100, 100);

  BROTHERbutton = createButton("BROTHER");
  BROTHERbutton.position((1920 / 1.5), 500);
  BROTHERbutton.mousePressed( ()  => playSound("BROTHER")   );
  BROTHERbutton.size(100, 100);
}

function draw()
{
  background(220);
  textSize(75);
  textAlign(CENTER, CENTER);
  text('Press these buttons', (1920 / 2), 70);
  textSize(30);
  text("Delay Slider", 85, 1065);
}

function keyPressed()
 {
  console.log("key is: ", key);
  if(key === "1")
  {
    sounds.player('dirt').start();
    
  } 
  else if(key === "2")
  {
    sounds.player('oof').start();
   
  } 
  else if(key === "3")
  {
    sounds.player('scientist').start();
  
  }
    else if(key === "4")
    {
      sounds.player('BROTHER').start();
      
    }
}

function playSound(whichSound='dirt') 
{
  sounds.player(whichSound).start();

}

