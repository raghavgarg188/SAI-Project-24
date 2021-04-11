class Sand {
    constructor(x, y) {
      var options = {
        'density':0.3,
        'friction': 5,
        'restitution':1
      };

      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      World.add(world, this.body);
    };
    display(){
      var sandpos = this.body.position;
  
      push();
      translate(sandpos.x, sandpos.y);
      strokeWeight(4);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      ellipse(0,0,this.r,this.r);
      pop()
    };
  };
  