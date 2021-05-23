var numColors=6;
var colors=generateColors(numColors);
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyButton=document.querySelector("#easyButton");
var hardButton=document.querySelector("#hardButton");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numColors=3;
	colors=generateColors(numColors);
	pickedColor=colorPicker();
	message.textContent="";
	colorDisplay.textContent=pickedColor;
	for(let i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numColors=6;
	colors=generateColors(numColors);
	pickedColor=colorPicker();
	message.textContent="";
	colorDisplay.textContent=pickedColor;
	for(let i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

var pickedColor=colorPicker();

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;

resetButton.addEventListener("click",function(){
	 colors=generateColors(numColors);
	 pickedColor=colorPicker();
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	message.textContent="";
	for(var i=0;i<colors.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";


});


for(let i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
		var colorClicked=this.style.backgroundColor;

		if(colorClicked===pickedColor){
			message.textContent="Correct!";
			changeColor(colorClicked);
			h1.style.backgroundColor=colorClicked;
			resetButton.textContent="Play Again ?"

		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="TryAgain";
		}

	});
}

function changeColor(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function colorPicker(){
	var random=Math.floor((Math.random())*colors.length);
	return colors[random];
}

function generateColors(num){
	var colorsArray=[];
	for (let i=0;i<num;i++){
	colorsArray.push(randomColor());
}

	return colorsArray;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}

