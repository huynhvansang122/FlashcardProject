var StoreQuestion=[];
function randerQuestion()
{
	for(let i=0;i<5;i++)
	{
		let num1 =Math.floor(Math.random() * 1000); 
		let num2 =Math.floor(Math.random() * 100);
		operator= ['+','-','*','/'];
        ran = (Math.floor(Math.random() * 10))%4
        c= num1+operator[ran]+num2; 
        //3 + 4
        StoreQuestion.push({position:i,question:c }) 
	}
}


function logQuestion()
{
	
	for(let i=1;i<6;i++)
	{	
		let a='cau';	
		a=a+String(i);
		document.getElementById(a).innerHTML=StoreQuestion[i-1].question;
		console.log(a);
	}

}

function autoLogAnswer()
{

	
	for(let i=1;i<6;i++)
		{	
			let a='cau';	
			a=a+String(i);
			document.getElementById(a).innerHTML=StoreQuestion[i-1].question;
			console.log(a);
		}

	
}

randerQuestion()
logQuestion()