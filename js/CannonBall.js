class CannonBall {
constructor (x,y){
    var options = {
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
    this.CannonBall_img=loadImage ("assets/cannonball.png")
    World.add(world, this.body);

}
display (){
    push(); 
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.CannonBall_img, pos.x, pos.y, this.r, this.r);
    pop();
}
shoot (){
var newAngle = cannon.angle-29; 
newAngle=newAngle * (3.14/180);
var velocity = p5.Vector.fromAngle(newAngle);
velocity.mult(0.5);
Matter.Body.setStatic(this.body, false);
Matter.Body.setVelocity(this.body, {
    x: velocity.x *(180/3.14),
    y: velocity.y * (180/3.14)});

}

}