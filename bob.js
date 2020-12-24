class Bob {
    constructor(x,y,r){
        var options={
            'restitution':1.0,
            'isStatic':false,
            'friction':0,
            'density':0.9,
        }
        this.body=Bodies.circle(x,y,r,options)
        this.x = x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);

    }
    display(){
        var paperpos = this.body.position;
        push();
        fill("pink");
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}

