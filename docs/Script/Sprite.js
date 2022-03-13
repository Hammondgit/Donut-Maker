const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let SpriteArray = [];
const MaxCapacity = 200;

const DountImage = new Image();


class SnowingDonut{
    constructor(){
    this.xDonut = 500;
    this.yDonut = 500; //going to make this random
    this.ySpeed = 1; // contols the speed of falling donuts
    this.Rotation = 0;
    this.Opacity = 0.5;
    this.size = 2;
    this.SpriteSheet = "/docs/image/TrueDonutSprite-0003.png";
    }

    UpdateSprite(){
       // this.Rotation += 1;
        this.yDonut += this.ySpeed;
    }


    draw(){
       context.save();
       context.globalAlpha = this.Opacity;
       context.translate(this.xDonut,this.yDonut);
       context.rotate( Math.PI / 100 * this.Rotation);
       DountImage.src = this.SpriteSheet;
       context.drawImage(DountImage, 0, 0, 160, 150, 0, -100, 30*this.size, 30*this.size);
       context.drawImage(DountImage, 150, 0, 160, 150, 400, 0, 30*this.size, 30*this.size);
       context.drawImage(DountImage, 150, 0, 160, 150, 400, 0, 30*this.size, 30*this.size);
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