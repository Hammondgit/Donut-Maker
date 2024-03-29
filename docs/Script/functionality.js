const ClickButton = document.getElementById("DonutClick");
const AutoButton = document.getElementById("AutoClick");
const MultiButton = document.getElementById("MultiClicker");

const DonutCount = document.getElementById("DonutText");
const AutoCount = document.getElementById("AutoText");
const MultiCount = document.getElementById("MultiText");

const ShowAutoCost = document.getElementById("AutoCosts");
const ShowMultiCost = document.getElementById("MultiCosts");

const BonusEvent = document.getElementById("BonusEvent");

const StartGame = document.getElementById("StartGame");

const AudioButton = document.getElementById("audioButton");
const AudioSource = document.getElementById("audioPlayerSource");
const AudioPlayer = document.getElementById("audioPlayer");
const AudioCLick = document.getElementById("click");

const ShopClick = document.getElementById('ShopClick').onclick = function(){
 
   document.getElementById('ShopOverlay').hidden = false;
   document.getElementById('ShopWindow').hidden = false;
};

const ShopClose = document.getElementById("ShopClose").onclick = function(){

   document.getElementById('ShopOverlay').hidden = true;
   document.getElementById('ShopWindow').hidden = true;
};
 

let MyDonut = new Donut();
let MyAudio = new Music();

AudioButton.addEventListener('click',function(){
   // siwtch case for buying values? and a pause button
   if (AudioPlayer.classList.contains("Playing")){
      console.log("music not playing");
      AudioPlayer.pause();
      AudioPlayer.classList.remove("Playing");
      AudioButton.innerText = "play";
   }
   else{
      console.log("music is playing");  
      AudioPlayer.load();
      AudioPlayer.play();
      AudioPlayer.classList.add("Playing");
      AudioButton.innerText = "Pause";
   }
})

function UnlockDonutButtons(state) {
   ClickButton.disabled = state; 
   AutoButton.disabled = state;
   MultiButton.disabled = state;
}

if (!MyDonut.StartGame) {
   UnlockDonutButtons(true);
}

console.log(MyDonut.StartGame); // keep track of game state

StartGame.addEventListener('click', function () {
   if (MyDonut.StartGame) {
      MyDonut.StartGame = false;
      UnlockDonutButtons(true);
      StartGame.innerText = "Start Game";
      clearInterval(MyDonut.AutoId);
      MyDonut.Reset();
      MyAudio.Reset();
      console.log("stop");
      ClickButton.src = "/docs/image/BigDonutShadeSprite-03.png";
      AutoButton.src = "/docs/image/Button-off-Sprite-001.png";
      MultiButton.src = "/docs/image/Button-Multi-off-Sprite-001.png";
      console.log(MyDonut.StartGame);
   }
   else {
      console.log("start");
      ClickButton.src = "/docs/image/BigDonutSprite-03.png";
      AutoButton.src = "/docs/image/Button-on-Sprite-001.png";
      MultiButton.src = "/docs/image/Button-Multi-on-Sprite-001.png";
      MyDonut.StartGame = true;
      StartGame.innerText = "Stop game";
      UnlockDonutButtons(false);
      MyAudio.MusicPurchasing();
      MyAudio.MusicPlayer();
      console.log(MyDonut.StartGame);

   }
})


function HideBonusEvent() {
   BonusEvent.classList.add("Hide");
}


function UpdateDashboard() {
   //To Never make the donut below 0 for when cost comes into play 
   if (MyDonut.DonutCount <= 0) {
      MyDonut.DonutCount = 0;
   }

   DonutCount.value = Math.round(MyDonut.DonutCount); // Make a multiplayer VALUE to show up. in inxdex.
   AutoCount.value = MyDonut.AutoCount;
   MultiCount.value = Math.round(MyDonut.MultiCount);

   ShowAutoCost.value = MyDonut.AutoCosts;
   ShowMultiCost.value = MyDonut.MultiCosts;
   if (MyDonut.StartGame) {
      if (MyDonut.HasRandomEvent) {

         MyDonut.HasRandomEvent = false;
         
         BonusEvent.classList.remove('Hide');
         setTimeout(HideBonusEvent, 2500);
         console.log("random");
      }
   }
}



let RefreshIntervalId = setInterval(UpdateDashboard, 300);
let BonusEventId = setInterval(RunBonus, 10000);
let SnowingDonuts = setInterval(SpawnSnowingDonut, 2500);

function RunBonus(){
   console.log('run')
   if (MyDonut.StartGame) {
   MyDonut.BonusTimer();
   }
}

let ClickSound = new Audio("/docs/Sound/Click.wav");
ClickSound.volume = 0.2;


ClickButton.addEventListener('click', function () {
   ClickSound.play();
   console.log(ClickButton.disabled);
   MyDonut.DonutClick();
   if (MultiCount.value > 0) {
      MyDonut.DonutCount += Math.pow(1.2, MyDonut.MultiCount);
   }
})

ClickButton.addEventListener('mouseleave',function () {
console.log("out");


})


AutoButton.addEventListener('click', function () {
   ClickSound.play();
   if (DonutCount.value >= MyDonut.AutoCosts) {
      MyDonut.AutoClick();
      MyDonut.AutoCost();

      console.log(DonutCount.value);

   }
   else {
      console.log(MyDonut.AutoCosts);
      console.log("Not enough Donuts");
      console.log(DonutCount.value);
   }
})

MultiButton.addEventListener('click', function () {
   ClickSound.play();
   if (DonutCount.value >= MyDonut.MultiCosts) {
      MyDonut.MultiClick();
      MyDonut.MultiCost();
   }

})





/** To do List
 * Make a mechanics or thing that gets rid of donuts
 * add more stuff to the shop
 * css my website better
 * Rename my variables so that others can understand it better 
 * polish the game
 * Balance the game
 * optimize code
 *  */ 