function Shot(x,y){
    this.x=x;
    this.y=y;
    this.r=8;
    this.toDelete = false;

    this.show = function(){
        noStroke();
        fill(0,255,255);
        rectMode(CENTER);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.move =  function(){
        this.y = this.y - 10;
    }

    this.evaporate = function(){
        this.toDelete = true;
    }

    this.hits = function(alien){
        let d = dist(this.x, this.y, alien.x, alien.y)
        if (d < this.r + alien.r){
            return true;
        } else {
            return false;
        }
    }

}