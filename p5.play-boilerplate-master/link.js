class Link{
    constructor (bodyA,pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}