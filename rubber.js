class Rubber {
    constructor(x, y) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };

      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
      World.add(world, this.body);
    };
    display(){


      var rubberpos = this.body.position;
      push();
      translate(rubberpos.x, rubberpos.y);
      strokeWeight(3);
      stroke('black')
      fill('darkblue')
      rectMode(CENTER)
      ellipse(0,0,this.r,this.r);
      pop()
    };
  };
  