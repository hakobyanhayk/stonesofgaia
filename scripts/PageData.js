var stoneGridLG = [	
    [ 3, 6, 1, 4, 6, 1, 5, 2, 3, 4, 3, 6, 3, 5 ],
    [ 5, 2, 3, 3, 2, 5, 4, 6, 5, 1, 6, 3, 5, 2 ],
    [ 1, 6, 4, 1, 3, 1, 5, 2, 4, 2, 4, 5, 6, 4 ],
    [ 2, 1, 5, 6, 5, 4, 2, 3, 6, 3, 1, 2, 4, 3 ],
    [ 3, 6, 1, 3, 6, 1, 5, 6, 3, 1, 3, 6, 3, 5 ],
    [ 4, 3, 2, 2, 4, 3, 3, 1, 5, 4, 6, 3, 4, 1 ],
    ];

var stoneGridMD = [	
    [ 5, 1, 4, 6, 1, 5, 2, 3, 4, 3, 6, 3 ],
    [ 2, 3, 3, 2, 5, 4, 6, 5, 1, 6, 3, 5 ],
    [ 6, 4, 1, 3, 1, 5, 2, 4, 2, 4, 5, 6 ],
    [ 1, 5, 6, 5, 4, 2, 3, 6, 3, 1, 2, 4 ],
    [ 6, 1, 3, 6, 1, 5, 6, 3, 1, 3, 6, 3 ],
  ];

var stoneGridSM = [	
    [ 1, 4, 6, 1, 5, 2, 3, 4, 3, 6 ],
    [ 3, 3, 2, 5, 4, 6, 5, 1, 6, 3 ],
    [ 4, 1, 3, 1, 5, 2, 4, 2, 4, 5 ],
    [ 5, 6, 5, 4, 2, 3, 6, 3, 1, 2 ],
    [ 1, 3, 6, 1, 5, 6, 3, 1, 3, 6 ],
  ];

var stoneGridXS = [	
    [ 4, 6, 1, 5, 2, 3, 4, 3],
    [ 3, 2, 5, 4, 6, 5, 1, 6],
    [ 1, 3, 1, 5, 2, 4, 2, 4],
    [ 6, 5, 4, 2, 3, 6, 3, 1],
    [ 3, 6, 1, 5, 6, 3, 1, 3],
    ];

var stoneLineXS = [2,1, 11, 12, 13, 14, 5,4];
var stoneLineSM = [3,4, 1, 11, 12, 13, 14, 6, 3,1];
var stoneLineMD = [2,1, 6, 4, 11, 12, 13, 14, 5, 6, 4,2];
var stoneLineLG = [4,3, 2, 1, 6, 11, 12, 13, 14, 6, 4, 5, 3,1]; 

var pageWidth = 0;

var xs = 767;
var sm = 991;
var md = 1199;

function PageData() {};

PageData.Initialize = function ()
{
    pageWidth = $(window).width();
};

PageData.GetSize = function ()
{   
    var stoneGrid;
    var screenWidth = $(window).width();
    
    if( screenWidth <=xs)
    {
        stoneGrid = stoneGridXS;
    }
    else if(screenWidth >xs && screenWidth <=sm)
    {
        stoneGrid = stoneGridSM;
    }
    else if(screenWidth >sm && screenWidth <=md)
    {
        stoneGrid = stoneGridMD;	
    }    
    else
    {
        stoneGrid = stoneGridLG;
    }		    
    
    return { width: stoneGrid[0].length, height: stoneGrid.length}
};

PageData.GetStoneGrid = function ()
{
    var stoneGrid;
    var screenWidth = $(window).width();

    if( screenWidth <=xs)
    {
        stoneGrid = stoneGridXS;
    }
    else if(screenWidth >xs && screenWidth <=sm)
    {
        stoneGrid = stoneGridSM;
    }
    else if(screenWidth >sm && screenWidth <=md)
    {
        stoneGrid = stoneGridMD;	
    }
    else
    {
        stoneGrid = stoneGridLG;
    }	
    return stoneGrid;
};

PageData.GetStoneLine = function ()
{
    var stoneLine;
    var screenWidth = $(window).width();

    if( screenWidth <=xs)
    {
        stoneLine = stoneLineXS;
    }
    else if(screenWidth >xs && screenWidth <=sm)
    {
        stoneLine = stoneLineSM;
    }
    else if(screenWidth >sm && screenWidth <=md)
    {
        stoneLine = stoneLineMD;
    }
    else
    {
        stoneLine = stoneLineLG;
    }	

    return stoneLine;
};

PageData.GetStonePosition = function ()
{
    var r_x = 0;
    var r_y = 0;
    var b_x = 0;
    var b_y = 0;
    var y_x = 0;
    var y_y = 0;

    var r_t_x = 0;
    var r_t_y = 0;
    var b_t_x = 0;
    var b_t_y = 0;
    var y_t_x = 0;
    var y_t_y = 0;

    var screenWidth = $(window).width();

    if( screenWidth <=xs)
    {
        r_x = 1;
        r_y = 1;

        b_x = 7;
        b_y = 3;

        y_x = 4;
        y_y = 1;

        r_t_x = 2;
        r_t_y = 1;

        b_t_x = 6;
        b_t_y = 2;

        y_t_x = 2;
        y_t_y = 3;
    }
    else if(screenWidth >xs && screenWidth <=sm)
    {								
        r_x = 1;
        r_y = 1;

        b_x = 8;
        b_y = 3;

        y_x = 5;
        y_y = 1;

        r_t_x = 2;
        r_t_y = 1;

        b_t_x = 7;
        b_t_y = 2;

        y_t_x = 3;
        y_t_y = 3;
    }
    else if(screenWidth >sm && screenWidth <=md)
    {
        r_x = 2;
        r_y = 1;

        b_x = 9;
        b_y = 3;

        y_x = 6;
        y_y = 1;

        r_t_x = 3;
        r_t_y = 1;

        b_t_x = 8;
        b_t_y = 2;

        y_t_x = 4;
        y_t_y = 3;
    }
    else {
        r_x = 3;
        r_y = 2;

        b_x = 10;
        b_y = 4;

        y_x = 7;
        y_y = 1;

        r_t_x = 4;
        r_t_y = 1;

        b_t_x = 9;
        b_t_y = 2;

        y_t_x = 5;
        y_t_y = 4;
    }


    return { redX : r_x,
             redY : r_y,
             blueX : b_x,
             blueY : b_y,
             yellowX : y_x,
             yellowY : y_y,
             redTargetX : r_t_x,
             redTargetY : r_t_y,
             blueTargetX : b_t_x ,
             blueTargetY : b_t_y,
             yellowTargetX : y_t_x,
             yellowTargetY : y_t_y
            }
};

PageData.PageSizeChanged = function ()
{
    var resized = false;

    var oldWidth = pageWidth;
    pageWidth = $(window).width();

    if(oldWidth != pageWidth)
    {
        if( pageWidth <=xs)
        {
            if(oldWidth <=xs)
            {
                resized = false;
            }
            else
            {
                resized = true;
            }
        }
        else if(pageWidth >xs && pageWidth <=sm)
        {								
            if(oldWidth >xs && oldWidth <=sm)
            {								
                resized = false;
            }
        }
        else if(pageWidth >sm && pageWidth <=md)
        {
            if(oldWidth >sm && oldWidth <=md)
            {
                resized = false;
            }
            else
            {
                resized = true;
            }
        }
        else 
        {
            if(oldWidth > md)
            {
                resized = false;
            }
            else
            {
                resized = true;
            }
        }	
    }

    return resized;

};