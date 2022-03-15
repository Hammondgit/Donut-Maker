const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SpriteArray = [];

const DountImage = new Image();

class SnowingDonut{
    constructor(){
    this.xDonut = this.GenerateXRandom(140);  // (Max,Min + 1) + min;
    this.yDonut = this.GenerateYRandom(300, 500);
    this.ySpeed = this.GenerateySpeedRandom(1,3); // contols the speed of falling donuts
    this.Rotation = 0;
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

    UpdateSprite(){
       this.yDonut += this.ySpeed;
        // this.Rotation += 0.1;
        if(this.yDonut >= 1300){
            this.yDonut = 300;
        }
     }

    draw(){
       context.save();
      context.globalAlpha = this.Opacity;
      //context.rotate( 2 / 90 * this.Rotation);
      context.translate(this.xDonut,this.yDonut);
      DountImage.src = this.SpriteSheet;
      //context.drawImage(DountImage, 0, 0, 160, 150, 250, -400, 30*this.size, 30*this.size);
    

        for (let i = 0; i < 640; i += 160 ){
                
            context.drawImage(DountImage, i, 0, 160, 150, this.GenerateXRandom(140), this.GenerateYRandom(300, 500), 30*this.size, 30*this.size);
            
        }
        
        // for (let i = 0; i < 640; i += 160 ){
        //     context.drawImage(DountImage, i, 150, 160, 150, i, -300, 30*this.size, 30*this.size);
        //    }

        // for (let i = 0; i < 640; i += 160 ){
        //     context.drawImage(DountImage, i, 310, 160, 150, i, -200, 30*this.size, 30*this.size);
        //    }
           
       context.restore();
    }
    


}





function SpawnSnowingDonut(){
           
  
    if(SpriteArray.length >= 20){
        console.log("if");
      
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