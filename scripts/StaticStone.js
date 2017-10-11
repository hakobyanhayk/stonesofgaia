
function StaticStone(x,y,imageName,parentDiv, divWidth)
{
	var self = this;
	this.posX = x;
	this.posY = y;
	this.imageName = imageName;
	this.stoneDiv;
	
	this.Resize = function(){
								var divHeight = self.stoneDiv.width();									
								var divTop = divHeight * self.posY;
								var divLeft = divHeight * self.posX;
									
								self.stoneDiv.css({'top':divTop+'px','left':divLeft+'px','height':divHeight+'px'});								
							}
								
	this.Create = function(){
									this.stoneDiv = $("<div>").appendTo(parentDiv);									
									
									this.stoneDiv.attr("style","width: " + divWidth + "%; position: absolute; display: block;background-color:black");
									this.stoneDiv.attr("id",x+""+y);
								
									var divHeight = this.stoneDiv.width();									
									var divTop = divHeight * self.posY;
									var divLeft = divHeight * self.posX;
									
									this.stoneDiv.css({'top':divTop+'px','left':divLeft+'px','height':divHeight+'px'});

									
									var img = $("<img>").appendTo(this.stoneDiv);	
									img.attr("src","images/stones/" + imageName);											
									img.attr("style","width: 100%;height: 100%;");								
									
								}

	this.CreateWithLink = function(link){
									this.stoneDiv = $("<div>").appendTo(parentDiv);									
									
									this.stoneDiv.attr("style","width: " + divWidth + "%; position: absolute; display: block;background-color:black");
									this.stoneDiv.attr("id",x+""+y);
								
									var divHeight = this.stoneDiv.width();									
									var divTop = divHeight * self.posY;
									var divLeft = divHeight * self.posX;
									
									this.stoneDiv.css({'top':divTop+'px','left':divLeft+'px','height':divHeight+'px'});

									var a = $("<a>").appendTo(this.stoneDiv);	
									a.attr("href",link);

									var img = $("<img>").appendTo(a);	
									img.attr("src","images/stones/" + imageName);											
									img.attr("style","width: 100%;height: 100%;");								
									
								}

	
}

function TargetStaticStone(x,y,imageName,parentDiv, divWidth)
{
	var self = this;
	this.posX = x;
	this.posY = y;
	this.imageName = imageName;
	this.stoneDiv;
	
	this.Resize = function(){
								var divHeight = self.stoneDiv.width();									
								var divTop = divHeight * self.posY;
								var divLeft = divHeight * self.posX;
									
								self.stoneDiv.css({'top':divTop+'px','left':divLeft+'px','height':divHeight+'px'});								
							}
								
	this.Create = function(){
									//var div = $("<div class='col-xs-1 static-stone'>").appendTo(parentDiv);	
									
									this.stoneDiv = $("<div>").appendTo(parentDiv);									
									
									this.stoneDiv.attr("style","width: " + divWidth + "%; position: absolute; display: block;");
									this.stoneDiv.attr("id",x+""+y);
								
									var divHeight = this.stoneDiv.width();									
									var divTop = divHeight * self.posY;
									var divLeft = divHeight * self.posX;
									
									this.stoneDiv.css({'top':divTop+'px','left':divLeft+'px','height':divHeight+'px'});

									
									var img = $("<img>").appendTo(this.stoneDiv);	
									img.attr("src","images/stones/" + imageName);											
									img.attr("style","width: 100%;height: 100%;");								
									
								}
	
}