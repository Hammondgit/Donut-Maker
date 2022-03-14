const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const MaxCapacity = 200;
let SpriteArray = [MaxCapacity];

const DountImage = new Image();


class SnowingDonut{
    constructor(){
    this.xDonut = 500;
    this.yDonut = 500; //going to make this random
     this.ySpeed = 1; // contols the speed of falling donuts
    // this.Rotation = 0;
   //  this.Opacity = 0.5;
    this.size = 2;
    this.SpriteSheet = "/docs/image/TrueDonutSprite-0003.png";

    }

    UpdateSprite(){
        //this.Rotation += 1;
        this.yDonut += this.ySpeed;
         for (let i = 0; i < SpriteArray.length; i++ ){
             SpriteArray[i] = new SpriteArray();
         }
    }


    draw(){
       context.save();
      // context.globalAlpha = this.Opacity;
       context.translate(this.xDonut,this.yDonut);
     //  context.rotate( Math.PI / 100 * this.Rotation);
       DountImage.src = this.SpriteSheet;
       
        for (let i = 0; i < 640; i += 160 ){
            context.drawImage(DountImage, i, 0, 160, 150, i, -400, 30*this.size, 30*this.size);
        }
    
        for (let i = 0; i < 640; i += 160 ){
            context.drawImage(DountImage, i, 150, 160, 150, i, -300, 30*this.size, 30*this.size);
           }

        for (let i = 0; i < 640; i += 160 ){
            context.drawImage(DountImage, i, 310, 160, 150, i, -200, 30*this.size, 30*this.size);
           }
           
       context.restore();
    }


}



function SpawnSnowingDonut(){
    SpriteArray.push(new SnowingDonut());
    console.log(SpriteArray);
}

function init(){


}


// timestamp 54:00; wcci
// timestamp
function animate(){
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    SpriteArray.forEach(function(Sprite){
    Sprite.UpdateSprite();
    Sprite.draw();
    }) 
}




init();
animate();