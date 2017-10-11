var gameStones;
var socialStones;

$(document).ready(function()
	{
		window.onresize = OnResize;
		PageData.Initialize();

		gameStones = new StoneGrid();
		socialStones = new SocialLine();

		gameStones.Create();
		gameStones.StartMovingStones();

		socialStones.Create();
	});

	function OnResize()
	{
		if(PageData.PageSizeChanged())
		{
			gameStones.Clear();	
			socialStones.Clear();

			gameStones.Create();
			gameStones.StartMovingStones();

			socialStones.Create();
		}
		else
		{
			gameStones.Resize();	
			socialStones.Resize();
		}
	}