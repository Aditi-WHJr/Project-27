class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.offsetX,y: this.offsetY}
        }
        //console.log(options);
        this.ropeObject = Constraint.create(options);
        World.add(world,this.ropeObject);
    }
    display(){
        strokeWeight(2);
        var pointA = this.ropeObject.bodyA.position;
        var pointB = this.ropeObject.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}