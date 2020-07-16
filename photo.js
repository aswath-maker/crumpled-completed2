class photo {
    constructor(x,y,r){

        var options={
            isStatic : true

        }

        this.body = Bodies.circle(x,y,r,options);
       this.image = loadImage("images/dustbingreen.png"); 
       World.add(world, this.body);
        
    }

        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, 140, 130);
            this.scale = 0.05;
            pop();

        }





    
};
