class Block {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
       // this.r = 10;
        this.body = Bodies.rectangle(x, y, 30,40, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        strokeWeight(2);
        fill("red");
        rectMode(CENTER);
        rect(0,0,30,40);
        pop();
    }

};