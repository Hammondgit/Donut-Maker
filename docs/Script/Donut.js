class Donut {


   constructor() {
     this.Reset();

   }
    Reset(){
      this.DonutCount = 0;
      this.AutoCount = 0;
      this.MultiCount = 0;
      this.AutoCosts = 10;
      this.AutoCostsIncrease = 0;
      this.MultiCosts = 5;
      this.MultiCostsIncrease = 0;
      this.AutoId = undefined;
      this.HasRandomEvent = false;
      this.StartGame = false;
    }

 //making a if statment to allow the autoclick be modified by MultiClick
     
   DonutClick() {
      
      if(this.MultiCount > 0){
         this.DonutCount += Math.pow(1.2, this.MultiCount);
      }
      else{
         this.DonutCount ++;
      }
   }

   AutoClick() {
      this.AutoCount++;
      if (this.AutoId == undefined) {
         
         this.AutoId = self.setInterval(this.AutoIncrease, 1000);
         console.log(this.AutoId);
      }
   }

   AutoCost() {
      //Without this if then the cost would more on the first press. 
      //That donst make sense for a game to have the price increase without even clicking on it.
      if (this.AutoCount > 0) {
      
         this.AutoCostsIncrease = this.AutoCosts * 0.2;

         console.log('AutoCount is higher');
         console.log(this.AutoCostsIncrease); // keeping track of how much cost is Increaseing by.

         this.AutoCosts += Math.round(this.AutoCostsIncrease);

         console.log('Auto cost tracker');
         console.log(this.AutoCosts); // keeping track of current cost 

         this.DonutCount -= this.AutoCosts;
      }
      else {
         console.log('AutoCount is zero')
         this.DonutCount -= this.AutoCosts;
      }
   }

   AutoIncrease = () => {
      for (let i = 0; i < this.AutoCount; i++) {
         this.DonutClick();
      }
   }

   MultiClick() {
      this.MultiCount += 1;
   }

   MultiCost() {

      if (this.MultiCount > 1) {
         this.MultiCostsIncrease = this.MultiCosts * 0.2;

         this.MultiCosts += Math.round(this.MultiCostsIncrease);

         this.DonutCount -= this.MultiCosts;
      }
      else {
         this.DonutCount -= this.MultiCosts;
      }
   }


   BonusTimer(){
      let random = Math.floor(Math.random() * 20) + 1;
               
      console.log("random: " + random);
      console.log("Donuts: " + this.DonutCount);
      switch (true) {
         case (this.DonutCount >= 0 && this.DonutCount <= 30): 

            if(random % 2 == 0 && this.HasRandomEvent == false){
         
               this.DonutCount += 5;
               this.HasRandomEvent = true;
             }
             console.log("more then 0");
         break;
         case (this.DonutCount >= 30 && this.DonutCount <= 60):  

         if(random % 2 == 0 && this.HasRandomEvent == false){
         
            this.DonutCount += 20;
            this.HasRandomEvent = true;
          }
          console.log("more then 30");
         break;
         case (this.DonutCount >= 60 && this.DonutCount <= 100):  

         if(random % 2 == 0 && this.HasRandomEvent == false){
         
            this.DonutCount += 40;
            this.HasRandomEvent = true;
          }
          console.log("more then 60");
         break;
         case (this.DonutCount >= 100):  

         if(random % 2 == 0 && this.HasRandomEvent == false){
         
            this.DonutCount += 50;
            this.HasRandomEvent = true;
          }
          console.log("more then 100");
         break;
      }

      



   }



}