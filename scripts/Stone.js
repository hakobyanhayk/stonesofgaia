function Stone(name,x,y,imageName,parentDiv,speed,target)
{
	var self = this;
	this.Name = name;
	this.posX = x;
	this.posY = y;
	this.imageName = imageName;
	this.speed = speed;
	this.stoneDiv;
	this.target = target;
	this.isMoving = false;
	this.Inerval;
	
	this.Resize = function()
	{
		self.SetDestination();
	}
							
	this.Create = function()
	{
		var div = $("<div class='stone'>").appendTo(parentDiv);									
		var img = $("<img>").appendTo(div);	
		img.attr("src","images/stones/" + imageName);											
		img.attr("style","width: 100%; height: auto;display: block;");		
		self.stoneDiv = div;								
	}
				
	this.Clear = function()
	{
		clearInterval(self.Inerval);						
	}

	this.SetTarget = function(target)
	{
		self.target = target;
								
		self.posX = target.posX;
		self.posY = target.posY;
	}
						
	this.SetDestination = function()
	{							
		var divHeight = self.target.stoneDiv.height();						
							
		self.stoneDiv.height(divHeight);
							
		var divWidth = self.target.stoneDiv.width();													
							
		self.stoneDiv.width(divWidth);							
							
		var offset = self.target.stoneDiv.offset();

		self.stoneDiv.offset({ top: offset.top, left: offset.left});
	}
						
	this.MoveToDestination = function()
	{							
		self.Inerval = setInterval(function()
			{							
				var targetOffset = self.target.stoneDiv.offset();
				var selfOffset = self.stoneDiv.offset();
								
				var newTop = MathF.LerpLine(selfOffset.top,targetOffset.top,self.speed);
				var newLeft = MathF.LerpLine(selfOffset.left,targetOffset.left,self.speed);
								
				self.stoneDiv.offset({ top: newTop, left: newLeft});
								
				selfOffset = self.stoneDiv.offset();
								
				if(MathF.InRange(MathF.Abs(selfOffset.top - targetOffset.top),0,1) 
				&& MathF.InRange(MathF.Abs(selfOffset.left - targetOffset.left),0,1))
				{
					self.stoneDiv.offset({ top: targetOffset.top, left: targetOffset.left});
					clearInterval(self.Inerval);
					self.isMoving = false;
				}
				else
				{
					self.isMoving = true;
				}							
								
			}, 20);
							
	}						
}