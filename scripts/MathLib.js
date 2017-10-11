
function MathF() {};

MathF.LerpLine = function (a,b,t){
									return (a + t * (b - a));
								 };

MathF.InRange = function (x,min,max){
											if(x>= min && x<= max)
												{	
													return true;
												}
	
											return false;
										};

MathF.Abs = function(x){
						if(x>=0)
							{
								return x;
							}
						else
							{
								return (-1)*x;
							}
						};

function Random() {};
	
Random.Range = function(min, max){
									return Math.floor(Math.random() * (max - min) + min);
								 }