class Monster {
    constructor(x, y) {
      var options = {
          'restitution':0,
          'isStatic':false,
          'friction':0.5,
           'density':0.7
  
      }
      this.body = Bodies.circle(x,y,70,options)
      //this.width = 40;
      //this.height = 40;
      this.image=loadImage("monster.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //this.body.isStatic=true;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle)
      imageMode(CENTER);
      fill("red");
      image(this.image,0,0,100,80)
      pop();
      
    }
  };