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

let AudioButton = document.getElementById("audioButton");
const AudioSource = document.getElementById("audioPlayerSource");
const AudioPlayer = document.getElementById("audioPlayer");

let MyDonut = new Donut();
let MyAudio = new Audios();



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




function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 } 


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
      console.log(MyDonut.StartGame);
   }
   else {
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

   console.log('update dash');
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
let SnowingDonuts = setInterval(SpawnSnowingDonut, 5000);

function RunBonus(){
   console.log('run')
   if (MyDonut.StartGame) {
   MyDonut.BonusTimer();
   }
}

ClickButton.addEventListener('click', function () {
   //console.log("donut was click");
   MyDonut.DonutClick();
   if (MultiCount.value > 0) {
      MyDonut.DonutCount += Math.pow(1.2, MyDonut.MultiCount);
   }
})


AutoButton.addEventListener('click', function () {
   //console.log("Donut auto click");


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
   console.log("Donut multi click");
   
   if (DonutCount.value >= MyDonut.MultiCosts) {
      MyDonut.MultiClick();
      MyDonut.MultiCost();
   }

})




/** To do List
 * sound efftcts
 * Make a mechanics or thing that gets rid of donuts
 * Make a shop
 * Snowing donuts
 * Sytsle my website
 * ReName var in all files
 * Balance the game 
 *  */ 