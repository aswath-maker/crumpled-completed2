class paper {
    constructor(x,y,r){

        var options={
            isStatic : false,      
            restitution : 0.5,
            density : 1,
            friction : 0.5

        }

        this.body = Bodies.circle(x,y,r,options);
       this.r = r;
       this.image = loadImage("images/paper.png"); 
       this.body.scale = 0.05;
       World.add(world, this.body);
        
    }

   

        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            fill("white");
            imageMode(CENTER);
            image(this.image, 0, 0, 50,50);
           
            pop();

        }






    
};