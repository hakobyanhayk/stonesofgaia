function StoneGrid()
{
	var self = this;
	
	this.parentDiv;
	this.rowDiv;

	this.redStone;
	this.blueStone;
	this.yellowStone;
	
	this.redStoneTarget;
	this.blueStoneTarget;
	this.yellowStoneTarget;
	
	this.Inerval;
	this.InervalTimer = 0;
	this.InervalTimerMax = 5;
	
	this.grid;
						
	this.gridStones = [];	
		
	this.Resize = function()
	{
		for(var i = 0; i < self.grid.length;i++)
		{
			for(var j = 0; j < self.grid[i].length;j++)
			{	
				self.gridStones[i][j].Resize();
			}
		}
		
		self.redStone.Resize();
		self.blueStone.Resize();
		self.yellowStone.Resize();
		
		self.redStoneTarget.Resize();
		self.blueStoneTarget.Resize();
		self.yellowStoneTarget.Resize();
		
		self.parentDiv = $("#game_field_parent");										
		var gameFieldHeight = self.gridStones[0][0].stoneDiv.width()*self.grid.length ;									
		self.parentDiv.css({'height':gameFieldHeight+'px'});	
	
	}

	this.Create = function()
	{
		self.gridStones = new Array();

		self.rowDiv = $("#game_field");										
		self.parentDiv = $("#game_field_parent");
		
		self.grid = PageData.GetStoneGrid();
		var pos = PageData.GetStonePosition();

		for(var j = 0; j < self.grid.length;j++)
		{											
			self.gridStones[j] = [];
										
			for(var i = 0; i < self.grid[j].length;i++)
			{											
				var stone = new StaticStone(i,j,"bg_stone_00" + self.grid[j][i]+ ".png",self.rowDiv,100/self.grid[j].length);
				stone.Create();
				self.gridStones[j][i] = stone;
			}
		}
									
		var gameFieldHeight = self.gridStones[0][0].stoneDiv.width()*self.grid.length;									
		self.parentDiv.css({'height':gameFieldHeight+'px'});	
										
		self.redStone = new Stone("red",pos.redX,pos.redY,"red_stone.png",self.rowDiv,0.3,self.gridStones[pos.redY][pos.redX]);
		self.redStone.Create();
		self.redStone.SetDestination();		
		
		self.blueStone = new Stone("blue",pos.blueX,pos.blueY,"blue_stone.png",self.rowDiv,0.3,self.gridStones[pos.blueY][pos.blueX]);
		self.blueStone.Create();
		self.blueStone.SetDestination();	
										
		self.yellowStone = new Stone("yellow",pos.yellowX,pos.yellowY,"yellow_stone.png",self.rowDiv,0.3,self.gridStones[pos.yellowY][pos.yellowX]);
		self.yellowStone.Create();
		self.yellowStone.SetDestination();	

		self.redStoneTarget = new TargetStaticStone(pos.redTargetX,pos.redTargetY,"bg_red_stone.png",self.rowDiv,100/self.grid[0].length);
		self.redStoneTarget.Create();
		
		self.blueStoneTarget = new TargetStaticStone(pos.blueTargetX,pos.blueTargetY,"bg_blue_stone.png",self.rowDiv,100/self.grid[0].length);
		self.blueStoneTarget.Create();
										
		self.yellowStoneTarget = new TargetStaticStone(pos.yellowTargetX,pos.yellowTargetY,"bg_yellow_stone.png",self.rowDiv,100/self.grid[0].length);
		self.yellowStoneTarget.Create();
	
		};								
	
	this.StartMovingStones = function(){
											clearInterval(self.Inerval);
											self.Inerval = setInterval(function(){ 	
											
											if(self.redStone.isMoving || self.blueStone.isMoving || self.yellowStone.isMoving)
											{												
												return;
											}
											
											self.InervalTimer += 0.02;
											if(self.InervalTimer >= self.InervalTimerMax)
											{
												var rndDir = Random.Range(0,4);	
												self.InervalTimer = self.InervalTimerMax;

												if(self.canMove(self.redStone,rndDir) && self.canMove(self.blueStone,rndDir) && self.canMove(self.yellowStone,rndDir))
												{
													self.redStone.SetTarget(self.getTarget(self.redStone,rndDir));
													self.blueStone.SetTarget(self.getTarget(self.blueStone,rndDir));
													self.yellowStone.SetTarget(self.getTarget(self.yellowStone,rndDir));
														
													self.redStone.MoveToDestination();												
													self.blueStone.MoveToDestination();
													self.yellowStone.MoveToDestination();
													
													self.InervalTimer = 0;
												}
																						
											}
											
										}, 20);
										
									   }
									   
	this.canMove = function(stone,dir)
	{	   
								var indexX;
								var indexY;
									
								switch(dir)
								{
									//up
									case 0: indexY = stone.posY-1;
											indexX = stone.posX;
									break;
									//down
									case 1: indexY = stone.posY+1;
											indexX = stone.posX;
									break;
									//left
									case 2: indexX = stone.posX-1;
											indexY = stone.posY;
									break;
									//right
									case 3: indexX = stone.posX+1;
											indexY = stone.posY;
									break;
								}											
								
								var size = PageData.GetSize();
		
								if(MathF.InRange(indexX,0,size.width-1) && MathF.InRange(indexY,0,size.height-1))
								{
									//console.log("name== " + stone.Name);
									//console.log("x== " + indexX + "y== " + indexY);
									//console.log("sx== " + size.width + "sy== " + size.height);
									return true;
								}
								else
								{
									return 	false;			
								}					   	
	}
	
    this.getTarget = function(stone,dir){
															
								var indexX;
								var indexY;
										
								switch(dir)
								{
									//up
									case 0: indexY = stone.posY-1;
											indexX = stone.posX;
									break;
									//down
									case 1: indexY = stone.posY+1;
											indexX = stone.posX;
									break;
									//left
									case 2: indexX = stone.posX-1;
											indexY = stone.posY;
									break;
									//right
									case 3: indexX = stone.posX+1;
											indexY = stone.posY;
									break;
								}
												
								return self.gridStones[indexY][indexX];
						}

	this.Clear = function()
	{		
		clearInterval(self.Inerval);			
		//self.rowDiv.empty();									
		$("#game_field").empty();	

		self.gridStones.forEach(function(element) 
		{
			delete(element);
		});

		delete(self.gridStones);

		self.redStone.Clear();
		delete(self.redStone);

		self.blueStone.Clear();
		delete(self.blueStone);

		self.yellowStone.Clear();
		delete(self.yellowStone);
		
		delete(self.redStoneTarget);
		delete(self.blueStoneTarget);
		delete(self.yellowStoneTarget);
	}
}