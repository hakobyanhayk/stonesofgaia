function SocialLine()
{
	var self = this;
	this.stoneLine;
	this.rowDiv;
	this.parentDiv;
	this.stones = [];

	this.Resize = function()
	{
		self.parentDiv = $("#social_field_parent");	

		for(var i = 0; i < self.stoneLine.length;i++)
		{
			self.stones[i].Resize();			
		}
		
		self.parentDiv.css({'height':self.stones[0].stoneDiv.width()+'px'});		
	}

	this.Create = function ()
	{
		self.stoneLine = PageData.GetStoneLine();

		self.rowDiv = $("#social_field");	
		self.parentDiv = $("#social_field_parent");	
	
		self.stones = new Array();
	
		for(var i = 0; i < self.stoneLine.length;i++)
    	{
			var stone = new StaticStone(i,0,"bg_stone_00" + self.stoneLine[i]+ ".png",self.rowDiv,100/self.stoneLine.length);

			if(self.stoneLine[i] == 11)
			{
				stone.CreateWithLink("https://www.facebook.com/StonesOfGaia/");
			}
			else if(self.stoneLine[i] == 12)
			{
				stone.CreateWithLink("https://www.youtube.com/channel/UCQSz535E_s9eF1fr8pZ-_qg");
			}
			else if(self.stoneLine[i] == 13)
			{
				stone.CreateWithLink("https://twitter.com/StonesOfGaia");
			}
			else if(self.stoneLine[i] == 14)
			{				
				stone.CreateWithLink("https://plus.google.com/118398814346307397097");
			}
			else
			{
				stone.Create();
			}

			self.stones[i] = stone;	
		}
	
    	self.parentDiv.css({'height':self.stones[0].stoneDiv.width()+'px'});	
	}

	this.Clear = function()
	{
		//self.rowDiv.empty();									
		$("#social_field").empty();	
		self.stones.forEach(function(element) {
			delete(element);
		});
	}
}