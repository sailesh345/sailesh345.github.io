var num=6;
var colors=generatecolors(num);
var squares=document.querySelectorAll(".square");
var picked=pickcolor();
var color=document.getElementById("colordisplay");
var msgdisplay=document.querySelector("#msg");
var resetb=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var h1=document.querySelector("h1");


color.textContent=picked;

//easybtn.addEventListener("click",function(){
//	easybtn.classList.add("selected");
//	hardbtn.classList.remove("selected");
//	num=3;
//	colors=generatecolors(num);
//	picked=pickcolor();
//	color.textContent=picked;
//	msgdisplay.textContent="";
//	h1.style.background="steelblue";
//	for(var i=0;i<3;i++)
//		squares[i].style.background=colors[i];
//	for(var i=3;i<squares.length;i++)
//		squares[i].style.background="none";
//});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	num=6;
	colors=generatecolors(num);
	picked=pickcolor();
	color.textContent=picked;
	msgdisplay.textContent="";
	h1.style.background="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clicked=this.style.background;
		if(clicked === picked)
		{
			msgdisplay.textContent="Correct";
			h1.style.background=clicked;
			changecolors(clicked);
			resetb.textContent="Play Again?";
		}
		else
		{
			this.style.background="#232323";
			msgdisplay.textContent="Try Again";
		}

	});
}

function changecolors(color){
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pickcolor(){
	var ran=Math.floor(Math.random()*colors.length);
	return colors[ran];
}

function generatecolors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


resetb.addEventListener("click",function(){
	colors=generatecolors(num);
	picked=pickcolor();
	color.textContent=picked;
	for(var i=0;i<squares.length;i++)
		squares[i].style.background=colors[i];
	h1.style.background="steelblue";
	msgdisplay.textContent="";
	resetb.textContent="New Colors";
});
