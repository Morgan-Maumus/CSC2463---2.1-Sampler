let soundList = new Tone.Players({
  Spider: 'samples/spider---sound-3-made-with-Voicemod.mp3', 
  Creeper: "samples/571285__bangitssummer__creeper.mp3", 
  Villager: "samples/383221__1piemanpie__minecraft-villager-confused-sound.mp3", 
  Oof: "samples/oof.mp3"
})

let speed = 1;
const delay = new Tone.FeedbackDelay("8n", 0);


function setup() {
  createCanvas(400, 400);
  soundList.toDestination();
  soundList.connect(delay);
  delay.toDestination();

  let fourthButton = createButton("0.25");
  let halfButton = createButton("0.5");
  let quarterButton = createButton("0.75");
  let fullButtom = createButton("1");

  let spider = createButton("Spider");
  let creeper = createButton("Creeper");
  let villager = createButton("Villager");
  let oof = createButton("Oof");

  fourthButton.position(10,35);
  halfButton.position(50,35);
  quarterButton.position(90,35);
  fullButtom.position(130,35);

  spider.position(10, 75);
  creeper.position(10, 95);
  villager.position(10, 115);
  oof.position(10, 135);

  fourthButton.mousePressed(fourthSpeed);
  halfButton.mousePressed(halfSpeed);
  quarterButton.mousePressed(quarterSpeed);
  fullButtom.mousePressed(fullSpeed);

  spider.mousePressed(spiderSound);
  creeper.mousePressed(creeperSound);
  villager.mousePressed(villagerSound);
  oof.mousePressed(oofSound);
}

function draw() {
  background(220);

  textSize(20);
  textAlign(CENTER, CENTER);
  text("Playback Speed: " + soundList.player('Spider').playbackRate, 100, 25);
}

function keyPressed() { 
  if (key === '1') {
    soundList.player('Oof').start();
  }
}

function fourthSpeed() {
  soundList.player('Spider').playbackRate = 0.25;
  soundList.player('Creeper').playbackRate = 0.25;
  soundList.player('Villager').playbackRate = 0.25;
  soundList.player('Oof').playbackRate = 0.25;
}

function halfSpeed() {
  soundList.player('Spider').playbackRate = 0.5;
  soundList.player('Creeper').playbackRate = 0.5;
  soundList.player('Villager').playbackRate = 0.5;
  soundList.player('Oof').playbackRate = 0.5;
}

function quarterSpeed() {
  soundList.player('Spider').playbackRate = 0.75;
  soundList.player('Creeper').playbackRate = 0.75;
  soundList.player('Villager').playbackRate = 0.75;
  soundList.player('Oof').playbackRate = 0.75;
}

function fullSpeed() {
  soundList.player('Spider').playbackRate = 1;
  soundList.player('Creeper').playbackRate = 1;
  soundList.player('Villager').playbackRate = 1;
  soundList.player('Oof').playbackRate = 1;
}

function spiderSound() {
  soundList.player('Spider').start();
}

function creeperSound() {
  soundList.player('Creeper').start();
}

function villagerSound() {
  soundList.player('Villager').start();
}

function oofSound() {
  soundList.player('Oof').start();
}