const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SpriteArray = [];

const DountImage = new Image();

class SnowingDonut{
    constructor(){
    this.xDonutImage = this.GenerateXDountRandom()  // make a random method that goes between 150-640 x of donut image
    this.yDonutImage = this.GenerateYDountRandom()
    this.xDountPostion = this.GenerateXRandom(220); // (Max,Min + 1) + min;
    this.yDountPostion = this.GenerateYRandom(100, 300);
    this.ySpeed = this.GenerateySpeedRandom(1,3); // contols the speed of falling donuts
    this.Opacity = 0.5;
    this.size = Math.floor(Math.random() * 3) + 1;
    this.SpriteSheet = "/docs/image/TrueDonutSprite-0003.png";
    }

    GenerateySpeedRandom(low, high){
        return Math.floor(Math.random() * high) + low;
    }

    GenerateYRandom(low, high){
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    GenerateXRandom(high){
        return Math.random() * (canvas.width - -(high) + 1) + -(high);
    }


    GenerateXDountRandom(){
        const xDonutArray = [0,150,300,460];
        const random = Math.floor(Math.random() * xDonutArray.length);
        return xDonutArray[random];
    }

    GenerateYDountRandom(){
        const yDonutArray = [0,150,310,470];
        const random = Math.floor(Math.random() * yDonutArray.length);
        return yDonutArray[random];
    }


    UpdateSprite(){
       this.yDountPostion += this.ySpeed;
        if(this.yDountPostion >= 1300){
            this.yDountPostion = 300;
            this.ySpeed = this.GenerateySpeedRandom(1,3);
            this.xDountPostion  = this.GenerateXRandom(220); // keeps the x postion random for spawning donuts
            this.size = Math.floor(Math.random() * 3) + 1;
            this.xDonutImage = this.GenerateXDountRandom();
            this.yDonutImage = this.GenerateYDountRandom();
        }
     }

    draw(){
       context.save();
       context.globalAlpha = this.Opacity;
       context.translate(this.xDountPostion ,this.yDountPostion);
       DountImage.src = this.SpriteSheet;
      
        context.drawImage(DountImage,this.xDonutImage ,this.yDonutImage, 160, 150, 250, -400, 30*this.size, 30*this.size);
    
      
           
       context.restore();
    }
    


}

function SpawnSnowingDonut(){
           
  
    if(SpriteArray.length >= 50){
        console.log("Donut obj is 40 or above");
    }
    else{
        console.log("else");
      for (let i = 0; i < 20; i ++ ){
         SpriteArray.push(new SnowingDonut(i));
           }
    }

    console.log(SpriteArray.length);
}



function animate(){
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    SpriteArray.forEach(function(Sprite){
    Sprite.UpdateSprite();
    Sprite.draw();
    }) 

}


animate();
