class Drops{
    constructor(x,y,r){
        var options={
            restitution:0.1,
            friction:0.01,
            density:0.1
        }
        this.body=Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r=r
        }
        update(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,displayWidth),y:random(0,displayHeight)})
            }
        }
        destroy(){
            World.remove(world,this.body)
        }
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            fill('blue')
            strokeWeight(0)
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
            pop();
          }
    }
