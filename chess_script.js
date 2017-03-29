	var qaskfor = 10; // set the no question asked
	var objDOM , objtplay , objpos , objans , objdans; // xml document variables
	var fen , fenans , fenprblm ,fendans; 
	var clk ,clks = 0 , clkm = 0 ,stclk = 0; //for timing
	var ques = 0;//for next question	
	var clck = 0;//for click
	var cimg = "" , dimg = "" , bimg = "" ,chbimg="", chwimg="";
	var prnfen = "";//print fenques
	var lid;//copy previous id
	var pl1,pl2,bg,tmint,animg;
	var move = 0,mv=0; 
	var st = 0; // for to know the game is start or next or started
	var ccls="",bcls="",wcls="";//for copy the class
	var rows = Array(8);
	var dans = Array(3); // copy the ans
	var prnans=Array(2);
	var arr = Array();
	var o="";
	var rno=0,noq=0,q=0,lk=0,flag=0;
	var copied;
	
	var bk="",bq="",bb="",bn="",br="",bp="";
	var wk="",wq="",wb="",wn="",wr="",wp="";
	
	var row = Array(8);
	row[0]=Array(8);
	row[1]=Array(8);
	row[2]=Array(8);
	row[3]=Array(8);
	row[4]=Array(8);
	row[5]=Array(8);
	row[6]=Array(8);
	row[7]=Array(8);
	
	var drow = Array(8);
	drow[0]=Array(8);
	drow[1]=Array(8);
	drow[2]=Array(8);
	drow[3]=Array(8);
	drow[4]=Array(8);
	drow[5]=Array(8);
	drow[6]=Array(8);
	drow[7]=Array(8);
	
	var rowp = Array(6);
	rowp[0] = Array(2);
	rowp[1] = Array(2);
	rowp[2] = Array(2);
	rowp[3] = Array(2);
	rowp[4] = Array(2);
	rowp[5] = Array(2);
	
	function frmar()
	{
	  ifrm.location.href = "fromathrs.html";			
		
	}
	
	
	function xmlasgn()
	{
		if(document.chss.types.value == "1")
		{	
			objDOM = new ActiveXObject("MSXML.DOMDocument");
			objDOM.load("moversone.xml");
			
			objtplay = objDOM.getElementsByTagName("tplay");
			objpos = objDOM.getElementsByTagName("pos");
			objans = objDOM.getElementsByTagName("ans");
			objdans = objDOM.getElementsByTagName("dans");
			noq = objpos.length; 
			arr =  Array(noq);	
	
		}
		else if(document.chss.types.value == "2")
		{
			objDOM = new ActiveXObject("MSXML.DOMDocument");
			objDOM.load("moverstwo.xml");
			
			objtplay = objDOM.getElementsByTagName("tplay");
			objpos = objDOM.getElementsByTagName("pos");
			objans = objDOM.getElementsByTagName("ans");
			objdans = objDOM.getElementsByTagName("dans");
			noq = objtplay.length; 
			arr =  Array(noq);	
	
		}
	}
	
	function copy()
	{
		if(document.chss.cpyfen.value == "Copy FEN")
		{	
			copied = document.chss.texts.createTextRange();
			copied.execCommand("Copy");
			document.chss.cpyfen.value = "Copied FEN";
		}
		
	}
	
	
	function assgn() // assign id varibles to array elements for placing images
	{
		row[0][0]=document.getElementById("a1");	row[0][1]=document.getElementById("b1");	row[0][2]=document.getElementById("c1");
		row[0][3]=document.getElementById("d1");	row[0][4]=document.getElementById("e1");	row[0][5]=document.getElementById("f1");
		row[0][6]=document.getElementById("g1");	row[0][7]=document.getElementById("h1");
		row[1][0]=document.getElementById("a2");	row[1][1]=document.getElementById("b2");	row[1][2]=document.getElementById("c2");
		row[1][3]=document.getElementById("d2");	row[1][4]=document.getElementById("e2");	row[1][5]=document.getElementById("f2");
		row[1][6]=document.getElementById("g2");	row[1][7]=document.getElementById("h2");
		row[2][0]=document.getElementById("a3");	row[2][1]=document.getElementById("b3");	row[2][2]=document.getElementById("c3");
		row[2][3]=document.getElementById("d3");	row[2][4]=document.getElementById("e3");	row[2][5]=document.getElementById("f3");
		row[2][6]=document.getElementById("g3");	row[2][7]=document.getElementById("h3");
		row[3][0]=document.getElementById("a4");	row[3][1]=document.getElementById("b4");	row[3][2]=document.getElementById("c4");
		row[3][3]=document.getElementById("d4");	row[3][4]=document.getElementById("e4");	row[3][5]=document.getElementById("f4");
		row[3][6]=document.getElementById("g4");	row[3][7]=document.getElementById("h4");
		row[4][0]=document.getElementById("a5");	row[4][1]=document.getElementById("b5");	row[4][2]=document.getElementById("c5");
		row[4][3]=document.getElementById("d5");	row[4][4]=document.getElementById("e5");	row[4][5]=document.getElementById("f5");
		row[4][6]=document.getElementById("g5");	row[4][7]=document.getElementById("h5");
		row[5][0]=document.getElementById("a6");	row[5][1]=document.getElementById("b6");	row[5][2]=document.getElementById("c6");
		row[5][3]=document.getElementById("d6");	row[5][4]=document.getElementById("e6");	row[5][5]=document.getElementById("f6");
		row[5][6]=document.getElementById("g6");	row[5][7]=document.getElementById("h6");
		row[6][0]=document.getElementById("a7");	row[6][1]=document.getElementById("b7");	row[6][2]=document.getElementById("c7");
		row[6][3]=document.getElementById("d7");	row[6][4]=document.getElementById("e7");	row[6][5]=document.getElementById("f7");
		row[6][6]=document.getElementById("g7");	row[6][7]=document.getElementById("h7");
		row[7][0]=document.getElementById("a8");	row[7][1]=document.getElementById("b8");	row[7][2]=document.getElementById("c8");
		row[7][3]=document.getElementById("d8");	row[7][4]=document.getElementById("e8");	row[7][5]=document.getElementById("f8");
		row[7][6]=document.getElementById("g8");	row[7][7]=document.getElementById("h8");
		pl1=document.getElementById("ply1");        pl2=document.getElementById("ply2");   		bg=document.getElementById("begin"); 
		animg = document.getElementById("anirep");
		
	}
	
	function dassgn()  // assign id varibles to array elements for changing the color of the chess square 
	{
		drow[0][0]=document.getElementById("ba1");	drow[0][1]=document.getElementById("bb1");	drow[0][2]=document.getElementById("bc1");
		drow[0][3]=document.getElementById("bd1");	drow[0][4]=document.getElementById("be1");	drow[0][5]=document.getElementById("bf1");
		drow[0][6]=document.getElementById("bg1");	drow[0][7]=document.getElementById("bh1");
		drow[1][0]=document.getElementById("ba2");	drow[1][1]=document.getElementById("bb2");	drow[1][2]=document.getElementById("bc2");
		drow[1][3]=document.getElementById("bd2");	drow[1][4]=document.getElementById("be2");	drow[1][5]=document.getElementById("bf2");
		drow[1][6]=document.getElementById("bg2");	drow[1][7]=document.getElementById("bh2");
		drow[2][0]=document.getElementById("ba3");	drow[2][1]=document.getElementById("bb3");	drow[2][2]=document.getElementById("bc3");
		drow[2][3]=document.getElementById("bd3");	drow[2][4]=document.getElementById("be3");	drow[2][5]=document.getElementById("bf3");
		drow[2][6]=document.getElementById("bg3");	drow[2][7]=document.getElementById("bh3");
		drow[3][0]=document.getElementById("ba4");	drow[3][1]=document.getElementById("bb4");	drow[3][2]=document.getElementById("bc4");
		drow[3][3]=document.getElementById("bd4");	drow[3][4]=document.getElementById("be4");	drow[3][5]=document.getElementById("bf4");
		drow[3][6]=document.getElementById("bg4");	drow[3][7]=document.getElementById("bh4");
		drow[4][0]=document.getElementById("ba5");	drow[4][1]=document.getElementById("bb5");	drow[4][2]=document.getElementById("bc5");
		drow[4][3]=document.getElementById("bd5");	drow[4][4]=document.getElementById("be5");	drow[4][5]=document.getElementById("bf5");
		drow[4][6]=document.getElementById("bg5");	drow[4][7]=document.getElementById("bh5");
		drow[5][0]=document.getElementById("ba6");	drow[5][1]=document.getElementById("bb6");	drow[5][2]=document.getElementById("bc6");
		drow[5][3]=document.getElementById("bd6");	drow[5][4]=document.getElementById("be6");	drow[5][5]=document.getElementById("bf6");
		drow[5][6]=document.getElementById("bg6");	drow[5][7]=document.getElementById("bh6");
		drow[6][0]=document.getElementById("ba7");	drow[6][1]=document.getElementById("bb7");	drow[6][2]=document.getElementById("bc7");
		drow[6][3]=document.getElementById("bd7");	drow[6][4]=document.getElementById("be7");	drow[6][5]=document.getElementById("bf7");
		drow[6][6]=document.getElementById("bg7");	drow[6][7]=document.getElementById("bh7");
		drow[7][0]=document.getElementById("ba8");	drow[7][1]=document.getElementById("bb8");	drow[7][2]=document.getElementById("bc8");
		drow[7][3]=document.getElementById("bd8");	drow[7][4]=document.getElementById("be8");	drow[7][5]=document.getElementById("bf8");
		drow[7][6]=document.getElementById("bg8");	drow[7][7]=document.getElementById("bh8");
	}
	function clrassgn()
	{
	var i=0,j=0,k=0;
	
	  for(i=0;i<8;i++)
	  for(j=0;j<8;j++)
	     {
				 if(k == 0)
				 {
					row[i][j].src = chbimg;
					
						if(j==7)
							k = 0;
						else
							k = 1;
				 }
				 else
				 {
					 row[i][j].src = chwimg;
						if(j==7)
							k = 1;
						else
							k = 0;
				 }
		 }
		document.mveans.src="images/backgrnd.jpg";
		document.fnans.src="images/backgrnd.jpg";
		gm(); xques();	//populate the question;
	}
	function showtime()
{
	clks++ ;
	if ( clks > 59 ) { clks = 0 ; clkm++ ; }
	if ( clks < 10 && clkm < 10 )  
		clk = "0" + clkm + " : 0" + clks ;  // both single digit
	else 	if ( clks < 10 ) 
	  clk = clkm + " : 0" + clks ;  // min single and seconds single digit
	else if ( clks > 9 && clkm > 9 ) 
		clk =  clkm + " : " + clks ;  // both two digits
	else if ( clks > 9 && clkm < 9 )
		clk = "0" + clkm + " : " + clks ;  // mint single sec two digits 
	document.chss.tm.value  = clk ;
}

    function gm()
	{ 
	
	var j=0;
	
	while ( lk == 0 ) 
		{ 
		 rno = Math.floor(Math.random() * noq + 1) ;
		  if ( rno >= noq ) continue ;
		  if ( q > noq ) 
		   {
			  alert("Data Bank has been Exhausted."); break ;
		   }

		   for(j=0 ; j<= q ; j++)
			{
			 if (arr[j] == rno )
			  {
				flag = 1 ; break ; 
			   }
			 else
				flag = 0 ;
			}
			 if ( flag == 1 ) continue ;
			 if ( flag == 0 && q < noq ) 
			 {   
				 arr[q++] = rno ; 				 
				 break ;
			} 
		}
		 
	
		
	}
	
	function xques() //populate the questions
	{
	fenprblm = objtplay.item(rno).firstChild.nodeValue;
	fen = objpos.item(rno).firstChild.nodeValue;
	fenans = objans.item(rno).firstChild.nodeValue;
	fendans = objdans.item(rno).firstChild.nodeValue;
	 
	
	
	ques++;
	}
	
	function clr()// after the game is over bring back board to normal color without pieces
	{
	var i = 0 , j = 0 , k = 0;
	
	for(i=0;i<8;i++)
	  for(j=0;j<8;j++)
	     {
				 if(k == 0)
				 {
					drow[i][j].className = bcls;
					
						if(j==7)
							k = 0;
						else
							k = 1;
				 }
				 else
				 {
					 drow[i][j].className = wcls;
						if(j==7)
							k = 1;
						else
							k = 0;
				 }
		 }
		 
		 for(i=0;i<8;i++)
			for(j=0;j<8;j++)
		         row[i][j].src = "";
				 
	    document.chss.fenq.value="";
	    document.chss.fena.value="";
	    document.chss.fenp.value="";
		prnfen = "";
		
	
	}
	
	function brdclr()
	{
	 if (st == 0)
	 {
        if(document.chss.brdclrs.value == "1")
		{
		chbimg ="images/AA0000.jpg";
		chwimg ="images/C0C0C0.jpg";
		bcls="army";
		wcls="cmnt"; 	
		}
		else if(document.chss.brdclrs.value == "2")
		{
		chbimg ="images/3C48A2.jpg";
		chwimg ="images/F5E950.jpg";
		bcls="blue";
		wcls="gold";
		}
		else if(document.chss.brdclrs.value == "3")
		{
		chbimg ="images/990099.jpg";
		chwimg ="images/ff800d.jpg";
		bcls="prpl";
		wcls="orgn";
		}
        else
		{
			bcls="blck"; wcls="whte"; chbimg="images/blankb.jpg"; chwimg="images/blankw.jpg";
		}
		
		var i=0,j=0,k=0;		
	
			  for(i=0;i<8;i++)
			  for(j=0;j<8;j++)
				 {
						 if(k == 0)
						 {
							row[i][j].src = chbimg;
							
								if(j==7)
									k = 0;
								else
									k = 1;
						 }
						 else
						 {
							 row[i][j].src = chwimg;
								if(j==7)
									k = 1;
								else
									k = 0;
						 }
				 }
				 
				 for(i=0;i<8;i++)
					for(j=0;j<8;j++)
					{
						 if(k == 0)
						 {
							drow[i][j].className = bcls;
							
								if(j==7)
									k = 0;
								else
									k = 1;
						 }
						 else
						 {
							 drow[i][j].className = wcls;
								if(j==7)
									k = 1;
								else
									k = 0;
						 }
					}
	    }//if close
		else
			alert("Sorry Cannot Changed");
	
	}
	
	function piece()
	{
		if(document.chss.pics.value == "1")
		{
			bk="pieces/other/bk.gif";
			bq="pieces/other/bq.gif";
			bb="pieces/other/bb.gif";
			bn="pieces/other/bn.gif";
			br="pieces/other/br.gif";
			bp="pieces/other/bp.gif";
			wk="pieces/other/wk.gif";
			wq="pieces/other/wq.gif";
			wb="pieces/other/wb.gif";
			wn="pieces/other/wn.gif";
			wr="pieces/other/wr.gif";
			wp="pieces/other/wp.gif";
		}
		else
		{
     	  bb = "pieces/leipzig/bb.gif";
		  bk = "pieces/leipzig/bk.gif"; 
		  bq = "pieces/leipzig/bq.gif"; 
		  br = "pieces/leipzig/br.gif"; 
		  bp = "pieces/leipzig/bp.gif"; 
		  bn = "pieces/leipzig/bn.gif"; 
		  wb = "pieces/leipzig/wb.gif"; 
		  wk = "pieces/leipzig/wk.gif";
		  wq = "pieces/leipzig/wq.gif";
		  wr = "pieces/leipzig/wr.gif";
		  wp = "pieces/leipzig/wp.gif";
		  wn = "pieces/leipzig/wn.gif";
		}
		
	}
	
	function strt() // begin the game
	{
		
	if(st == 0) // start button
	{ 	
	assgn();
	dassgn();
	brdclr();
	piece();
	st = 1;
	xmlasgn();
		if((document.chss.types.value == "1")||(document.chss.types.value == "2"))
		{
			bg.src = "images/nxt.gif";
     		
		}
	}
	if((st == 0)||(st == 1)) // start or next button
	{
			if(((q < qaskfor)&&(document.chss.types.value == "1")) || ((q < qaskfor)&&(document.chss.types.value == "2")))
			{ 			
					
				    clr(); clearInterval(tmint); tmint = window.setInterval("showtime()",1000); clrassgn();
					clck = 0; cimg = ""; dimg = "";	move = 0; clks=0;	clkm=0; ccls="";
					
					document.chss.cpyfen.value = "Copy FEN";
					
					if(q > 9)
						bg.src="images/end.gif";
					
					if(document.chss.types.value == "1")
					{ mv = 1; animg.src = "images/onemve.gif";}
					else
					{ mv = 2; animg.src = "images/twomve.gif";}
					
					
					document.chss.fenq.value = prnfen; // display FEN
					var i = 0, j = 0, k = 0,m = 0;
					var snlchr;
					
					
					o=fenprblm.substring(0,1);
				
					if(o=="W") // who is suppose to play
					{
						pl1.src="images/dotw.jpg"; pl1.title = "White To Play";
						pl2.src="images/dotw.jpg"; pl2.title = "White To Play";
					}
					else
					{
						pl1.src="images/dotb.jpg"; pl1.title = "Black To Play";
						pl2.src="images/dotb.jpg"; pl2.title = "Black To Play";
					}
					
					document.chss.fenp.value = fenprblm; 
					
					for(i=0,m=7,j=0;i<8;i++,m--) // dismantle FEN
					{
					rows[m] = fen.substring(j,(fen.indexOf("|",j)));	
					if(i<7)
					prnfen = prnfen + rows[m] + "/"; 
					else
					prnfen = prnfen + rows[m];
					
					j = fen.indexOf("|",j)+1;
					}
					
					document.chss.fenq.value=prnfen;
					
					for(i=0;i<8;i++) // place pieces on board
					{ 
					k = 0;
					
					  for(j=0;j<=(rows[i].length);j++)
					  {
						snlchr = rows[i].substring(j,j+1);
						
							if((snlchr == "1")||(snlchr == "2")||(snlchr == "3")||(snlchr == "4")||(snlchr == "5")||(snlchr == "6")||(snlchr == "7")||(snlchr == "8"))	
							{
									k = parseInt(snlchr) + k;
									continue;
									
							}
							else if((snlchr == "b")||(snlchr == "k")||(snlchr == "q")||(snlchr == "r")||(snlchr == "p")||(snlchr == "n")||(snlchr == "B")||(snlchr == "K")||(snlchr == "Q")||(snlchr == "R")||(snlchr == "P")||(snlchr == "N"))
							{       
									switch(snlchr)
									{
									  case "b" : row[i][k].src = bb; break;
									  case "k" : row[i][k].src = bk; break;
									  case "q" : row[i][k].src = bq; break;
									  case "r" : row[i][k].src = br; break;
									  case "p" : row[i][k].src = bp; break;
									  case "n" : row[i][k].src = bn; break;
									  case "B" : row[i][k].src = wb; break;
									  case "K" : row[i][k].src = wk; break;	
									  case "Q" : row[i][k].src = wq; break;	
									  case "R" : row[i][k].src = wr; break;	
									  case "P" : row[i][k].src = wp; break;	
									  case "N" : row[i][k].src = wn; break;	
									} //switch close&
									k++;
							}//else
						}//2nd for loop
					}//1st for loop
			       		
						if(mv == 1)
						{
							for(i=0,k=0,j=0;i<mv;i++)// dismantle answer
							{
								dans[i] = fenans.substring(k,fenans.indexOf("|",k));
								k = fenans.indexOf("|",k)+1;
								
								rowp[j][0] = dans[i].substring(0,1);
								rowp[j][1] = dans[i].substring(1,2);
								posij(rowp[j][0],rowp[j][1],j);
								j++;
								rowp[j][0] = dans[i].substring(3,4);
								rowp[j][1] = dans[i].substring(4,5);
								posij(rowp[j][0],rowp[j][1],j);
								j++;
							}
							
							for(i=0,k=0;i<mv;i++)
							{
								prnans[i] = fendans.substring(k,fendans.indexOf("|",k));
								k = fendans.indexOf("|",k)+1;		
							}
						}
						else
						{
							for(i=0,k=0,j=0;i<3;i++)// dismantle answer
							{
								dans[i] = fenans.substring(k,fenans.indexOf("|",k));
								k = fenans.indexOf("|",k)+1;
								
								rowp[j][0] = dans[i].substring(0,1);
								rowp[j][1] = dans[i].substring(1,2);
								posij(rowp[j][0],rowp[j][1],j);
								j++;
								rowp[j][0] = dans[i].substring(3,4);
								rowp[j][1] = dans[i].substring(4,5);
								posij(rowp[j][0],rowp[j][1],j);
								j++;
							}
					
							for(i=0,k=0;i<2;i++)
							{
								prnans[i] = fendans.substring(k,fendans.indexOf("|",k));
								k = fendans.indexOf("|",k)+1;		
							}
						}
					
			}
			else
			{
				if(q >= qaskfor) 
				{
				st = 3;
				alert("Data Over");
				}
				else if(document.chss.types.value == "select one")
				{
				st = 0;
				alert("Please Select Moves");
				}
				
			}
  }//if close
  else if(st == 2)
  alert("Let us finish the job on hand FIRST!");
  else
  {
	  if(q >= qaskfor) 
			alert("Data Over");
	else if(document.chss.types.value == "select one")
			alert("Please Select Moves");
  }
}// function close

function posij(pans1,pans2,i) // postions as two dimensional array elements
	{
			rowp[i][0]=parseInt(pans2)-1;
			
			switch(pans1)
			{
			case 'a' : rowp[i][1] = 0; break;	
			case 'b' : rowp[i][1] = 1; break;	
			case 'c' : rowp[i][1] = 2; break;	
			case 'd' : rowp[i][1] = 3; break;	
			case 'e' : rowp[i][1] = 4; break;	
			case 'f' : rowp[i][1] = 5; break;	
			case 'g' : rowp[i][1] = 6; break;	
			case 'h' : rowp[i][1] = 7; break;	
				
			}
		
	}

    function mve(eid) //check move
	{
	   if (mv == 1) // for one mover
	   {
		 if(clck == 0)// check whether the correct piece is selected
			{
				if(row[rowp[move][0]][rowp[move][1]] == eid)
				{
					cimg = eid.src;
					lid = eid;
					clck++;
					ccls=drow[rowp[move][0]][rowp[move][1]].className;
					drow[rowp[move][0]][rowp[move][1]].className="slct";
				}
				else
					document.mveans.src = "images/gred.gif";	 
				  
			} 
		else if(clck == 1)
		{
			if(row[rowp[move+1][0]][rowp[move+1][1]] == eid)
				 {
					 eid.src = cimg;
					 
						 if(ccls == bcls)
							lid.src = chbimg;
						 else
							lid.src = chwimg;
						
					 drow[rowp[move][0]][rowp[move][1]].className=ccls;
					 
						document.chss.fena.value ="1) " + prnans[0] + " #"; 
						 document.fnans.src="images/clap.gif";
						 document.mveans.src = "images/ggreen.gif";
						 clearInterval(tmint);
						 st = 1;
						 if(q >= 9)
							 bg.src="images/end.gif";
						 else
							bg.src = "images/nxt.gif";
						animg.src = "images/sonemve.gif";
							
		         }
			else //misplaced position
				{
					drow[rowp[move][0]][rowp[move][1]].className=ccls;
					document.mveans.src = "images/gred.gif";	 
					clck = 0;
				}
		}
		
	   }	
	  else if(mv == 2)// for two mover
	  {
		   if(clck == 0)// check whether the correct piece is selected
			{
			
			if(row[rowp[move][0]][rowp[move][1]] == eid)
			{
				cimg = eid.src;
				lid = eid;
				clck++;
				ccls=drow[rowp[move][0]][rowp[move][1]].className;
				drow[rowp[move][0]][rowp[move][1]].className="slct";
			}
			else				
				document.mveans.src = "images/gred.gif";	 
			
		} 
		   else if(clck == 1)// check whether said piece in the correct position
			{
				 if(row[rowp[move+1][0]][rowp[move+1][1]] == eid)
				 {
					 eid.src = cimg;
					 document.mveans.src = "images/ggreen.gif";					 
						 if(ccls == bcls)
							lid.src = chbimg;
						 else
							lid.src = chwimg;
						
					 drow[rowp[move][0]][rowp[move][1]].className=ccls;
					 clck = 0;
					 if(move == 4) // whether mate acheived
					 {
						 document.chss.fena.value ="1) " + prnans[0] +"  "+"  2) "+ prnans[1] + " #"; 
						 document.fnans.src="images/clap.gif";
						 clearInterval(tmint);
						 st = 1;
						 if(q >= 9)
							 bg.src = "images/end.gif";
						 else
							bg.src = "images/nxt.gif";
							animg.src = "images/stwomve.gif";
					 }
					 move+=2;
					 if(move==2) //move made by the computer
					 {
						 dimg=row[rowp[move][0]][rowp[move][1]].src;
						 
							 if(drow[rowp[move][0]][rowp[move][1]].className == bcls)
								row[rowp[move][0]][rowp[move][1]].src=chbimg;
							 else
								row[rowp[move][0]][rowp[move][1]].src=chwimg;
						 
						 row[rowp[move+1][0]][rowp[move+1][1]].src=dimg; 
						 document.chss.fena.value ="1) " + prnans[0];
						 st = 2;
						 bg.src = "images/strted.gif";
						 move+=2;
					 }
				 }
				else //misplaced position
				{
					drow[rowp[move][0]][rowp[move][1]].className=ccls;
					document.mveans.src = "images/gred.gif";	
				}
			 clck = 0;
			}
	  }
		
    }