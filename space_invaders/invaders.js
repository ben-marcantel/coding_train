 let ship;
 let ship_image;
 let alien_image;
 let aliens=[];
 let shots =[];

 function setup(){
    createCanvas(600,400);
    ship_image = loadImage('/sprites/sprite_08.png');
    alien_image = loadImage('./sprites/sprite_00.png');
    ship = new Ship();
    shot = new Shot(width/2,height/2);
    for(let i=0; i<5; i++){
        aliens[i] = new Alien(i*80+80,60);
    }
   
 }

 function draw(){
    background(0);
    ship.show();
    ship.move();
  
   image(ship_image,ship.x - 30,height - 60,ship_image.height);
    
    for(let i=0; i<shots.length; i++){
        shots[i].show();
        shots[i].move()

        for(let j=0; j<aliens.length; j++){
            if(shots[i].hits(aliens[j])){
                aliens[j].grow();
                aliens[j].explode();
                shots[i].evaporate()
            }
            
        }
    }

    let edge = false;

    for(let i=0; i <aliens.length; i++){
        aliens[i].show();
        aliens[i].move();
        image(alien_image,aliens[i].x-30,aliens[i].y-30,alien_image.height)
        if (aliens[i].x > width || aliens[i].x < 0){
            edge = true;
        }

    }

    if(edge){
        for(let i=0; i < aliens.length; i++){
            aliens[i].shiftDown();
        }

    }




    for(let i = shots.length -1; i >= 0; i--){
        if(shots[i].toDelete){
            shots.splice(i,1)
        }
    }

 }

function keyReleased(){
    if(key != ' '){
        ship.setDir(0);
    }
    
}

 function keyPressed(){
     if (key === ' '){
        let shot = new Shot(ship.x,height)
        shots.push(shot) 
     }

     if (keyCode === RIGHT_ARROW){
        ship.setDir(1);
     } else if(keyCode === LEFT_ARROW){
        ship.setDir(-1);
     }
 }