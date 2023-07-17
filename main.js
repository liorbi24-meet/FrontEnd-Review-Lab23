flag = 0 // flag for the bonus and i tryed to do another thing
flag2 = 0
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function changeBackgroundColor(){
	if (flag)
	{
		let color = document.body.style.backgroundColor;// from first bonus
		if (flag2){
			document.body.style.backgroundColor = "blue";
			flag2 = 0
		}
		else{
			document.body.style.backgroundColor = "yellow";
			flag2 = 1
		}
		flag = 0
	}
	else
	{
		document.body.style.backgroundColor = generateRandomColor();
		flag = 1
	}
}

