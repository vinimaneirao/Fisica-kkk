class Rock{
	constructor(x,y,width, height)
	{
		var options={
			restitution:0.8,
			friction:0.9,
			density:12
		}
		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, width, height, options);
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			rect(0,0, this.width, this.height);
			pop()
	}

}