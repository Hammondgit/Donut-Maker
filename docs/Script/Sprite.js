const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SpriteArray = [];

const DountImage = new Image();

class SnowingDonut{
    constructor(){
    this.xDonut = Math.random() * (canvas.width - -100 + 1) + -100;  // (Max,Min + 1) + min;
    this.yDonut = Math.floor(Math.random() * (500 - 300 + 1)) + 300;
    this.ySpeed = 1; // contols the speed of falling donuts
    this.Rotation = 0;
    this.Opacity = 0.5;
    this.size = 2;
    this.SpriteSheet = "/docs/image/OneDonut.png";

    }

    UpdateSprite(){
       this.yDonut += this.ySpeed;
        // this.Rotation += 0.1;
        if(this.yDonut >= 1000){
            this.yDonut = 300;
        }
     }

    draw(){
       context.save();
      context.globalAlpha = this.Opacity;
      //context.rotate( 2 / 90 * this.Rotation);
        DountImage.src = this.SpriteSheet;
        context.translate(this.xDonut,this.yDonut);
        context.drawImage(DountImage, 0, 0, 160, 150, 150, -400, 30*this.size, 30*this.size);
    

        // for (let i = 0; i < 640; i += 160 ){
                
        //     context.drawImage(DountImage, i, 0, 160, 150, i, -400, 30*this.size, 30*this.size);
            
        // }
        
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

   
    if(SpriteArray.length >= 80){
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