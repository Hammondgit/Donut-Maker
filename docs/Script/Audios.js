
var PixelGalaxy = document.getElementById("PixelGalaxy");
var FromPastToPresent = document.getElementById("FromPastToPresent");  
var LaNoireMenuTheme = document.getElementById("LaNoireMenuTheme");
var MilkoiPaperAndCats = document.getElementById("MilkoiPaperAndCats");
var Dovahkiin = document.getElementById("Dovahkiin");
var ProfessorLaytonAndLastTimeTravel = document.getElementById("ProfessorLaytonAndLastTimeTravel");
var YoureGoingToHaveaBadTime = document.getElementById("YoureGoingToHaveaBadTime");
var WeirdMachine = document.getElementById("WeirdMachine");
var NeverGonnaGiveYouUp = document.getElementById("NeverGonnaGiveYouUp");

var PurchasingPixelGalaxy = document.getElementById("PurchasingPixelGalaxy");
var PurchasingFromPastToPresent = document.getElementById("PurchasingFromPastToPresent");  
var PurchasingLaNoireMenuTheme = document.getElementById("PurchasingLaNoireMenuTheme");
var PurchasingMilkoiPaperAndCats = document.getElementById("PurchasingMilkoiPaperAndCats");
var PurchasingDovahkiin = document.getElementById("PurchasingDovahkiin");
var PurchasingProfessorLaytonAndLastTimeTravel = document.getElementById("PurchasingProfessorLaytonAndLastTimeTravel");
var PurchasingYoureGoingToHaveaBadTime = document.getElementById("PurchasingYoureGoingToHaveaBadTime");
var PurchasingNeverGonnaGiveYouUp = document.getElementById("PurchasingNeverGonnaGiveYouUp");
var PurchasingWeirdMachine = document.getElementById("PurchasingWeirdMachine");


class Audios {

   constructor(){
      this.Reset();
 
      }



   Reset(){
      FromPastToPresent.disabled = true;
      LaNoireMenuTheme.disabled = true;
      MilkoiPaperAndCats.disabled = true;
      Dovahkiin.disabled = true;
      ProfessorLaytonAndLastTimeTravel.disabled = true;
      YoureGoingToHaveaBadTime.disabled = true; 
      NeverGonnaGiveYouUp.disabled = true; 
      WeirdMachine.disabled = true;

      PurchasingFromPastToPresent.disabled = true;
      PurchasingLaNoireMenuTheme.disabled = true;
      PurchasingMilkoiPaperAndCats.disabled = true;
      PurchasingDovahkiin.disabled = true;
      PurchasingProfessorLaytonAndLastTimeTravel.disabled =true;
      PurchasingYoureGoingToHaveaBadTime.disabled = true;
      PurchasingNeverGonnaGiveYouUp.disabled = true;
      PurchasingWeirdMachine.disabled = true;
   }

      MusicPurchasing(){

         PurchasingFromPastToPresent.disabled = false;
         PurchasingLaNoireMenuTheme.disabled = false;
         PurchasingMilkoiPaperAndCats.disabled = false;
         PurchasingDovahkiin.disabled = false;
         PurchasingProfessorLaytonAndLastTimeTravel.disabled = false;
         PurchasingYoureGoingToHaveaBadTime.disabled = false;
         PurchasingNeverGonnaGiveYouUp.disabled = false;
         PurchasingWeirdMachine.disabled = false;

         PurchasingFromPastToPresent.onclick = function(){
            if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
            FromPastToPresent.disabled = false;
            PurchasingFromPastToPresent.disabled = true;
            }
            else{
               console.log("Auiod is not enough");
            }
          }
   
        PurchasingLaNoireMenuTheme.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
            LaNoireMenuTheme.disabled = false;
            PurchasingLaNoireMenuTheme.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
         }


        PurchasingMilkoiPaperAndCats.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
           MilkoiPaperAndCats.disabled = false;
           PurchasingMilkoiPaperAndCats.disabled = true;
        }
       else{
         console.log("Auiod is not enough");
       }       
       }
     
        PurchasingDovahkiin.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
           Dovahkiin.disabled = false;
           PurchasingDovahkiin.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
         }
     
        PurchasingProfessorLaytonAndLastTimeTravel.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
           ProfessorLaytonAndLastTimeTravel.disabled = false;
           PurchasingProfessorLaytonAndLastTimeTravel.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
         }
     
        PurchasingYoureGoingToHaveaBadTime.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
           YoureGoingToHaveaBadTime.disabled = false;
           PurchasingYoureGoingToHaveaBadTime.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
         }
     
        PurchasingNeverGonnaGiveYouUp.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
           NeverGonnaGiveYouUp.disabled = false;
           PurchasingNeverGonnaGiveYouUp.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
      }
      PurchasingWeirdMachine.onclick = function(){
         if(MyDonut.DonutCount >= 10){
            MyDonut.DonutCount -= 10;
            WeirdMachine.disabled = false;
            PurchasingWeirdMachine.disabled = true;
         }
         else{
            console.log("Auiod is not enough");
         }
      }

   }


      MusicPlayer(){
        PixelGalaxy.onclick = function(){
            CurrentSong.value = "Pixel Galaxy";
            AudioSource.setAttribute('src',"/docs/Music/PixelGalaxy.mp3");
         }
         
         FromPastToPresent.onclick = function(){
            CurrentSong.value = "From Past To Present";
            AudioSource.setAttribute('src',"/docs/Music/FromPastToPresent.mp3");
         }
         
         LaNoireMenuTheme.onclick = function(){
            CurrentSong.value = "LA Noire Menu Theme";
            AudioSource.setAttribute('src',"/docs/Music/LANoireMenuTheme.mp3");
         }
         
         MilkoiPaperAndCats.onclick = function(){
            CurrentSong.value = "Milkoi Paper And Cats";
            AudioSource.setAttribute('src',"/docs/Music/MilkoiPaperAndCats.mp3");
         }
         
         Dovahkiin.onclick = function(){
            CurrentSong.value = "Dovahkiin";
            AudioSource.setAttribute('src',"/docs/Music/Dovahkiin.mp3");
         }
         
         ProfessorLaytonAndLastTimeTravel.onclick = function(){ 
            CurrentSong.value = "Professor Layton And Last Time Travel";
            AudioSource.setAttribute('src',"/docs/Music/ProfessorLaytonAndLastTimeTravel.mp3");
         }
         
         YoureGoingToHaveaBadTime.onclick = function(){
            CurrentSong.value = "Youre Going To Have a Bad Time";
            AudioSource.setAttribute('src',"/docs/Music/YoureGoingToHaveaBadTime.mp3");
         }
         
         NeverGonnaGiveYouUp.onclick = function(){
            CurrentSong.value = "?";
            AudioSource.setAttribute('src',"/docs/Music/NeverGonnaGiveYouUp.mp3");
         }

         WeirdMachine.onclick = function(){
            CurrentSong.value = "Weird Machine";
            AudioSource.setAttribute('src',"/docs/Music/DROELOEWeirdMachine.mp3");
         }
    }



}

