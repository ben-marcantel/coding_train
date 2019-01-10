function Ship(){
    this.x=width/2;
    this.xdir=0;



    this.show=function(){
        //let ship_image=loadImage('./space_invaders_sprites/sprite_08.png')
        fill(0);
        rectMode(CENTER);
        //image(ship_image,this.x - 30,height - 60,ship_image.height);
        rect(this.x, height-10, 20, 20);
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }

    this.move = function(dir){
        this.x += this.xdir * 5;
    }
}