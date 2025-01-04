import Swal from 'sweetalert2'
import Swal from 'sweetalert2/dist/sweetalert2.js'

// or via CommonJS
const Swal = require('sweetalert2')
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})



function password(){
	const x=document.getElementById('pw');
	var len=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()?~]).{6,20}$/;

	if(len === x)
	{
		window.alert("enter the password succssfully");

	}
	else
	{
		window.alert("please enter the correct password");
	}
}

function addition(){

	var x=document.getElementById('element1').value;
	var y=document.getElementById('element2').value;
    var z=parseInt(x)+parseInt(y);

    document.getElementById('result').value=z;
    
    

}

function palindrom()
{
	const x=document.getElementById('str1');
	const y=x.length;
	const n;
	for (let i=0;i<y/2;i++)
	{
		
	if (x[i] !== x[y-1-i])
	{
		window.alert("It Is Not A palindrom");
	}
	else
	{
		window.alert("It Is A palindrom");
	}
}
}

(async () => {
  const { value: file } = await Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      "accept": "image/*",
      "aria-label": "Upload your profile picture"
    }
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target.result,
        imageAlt: "The uploaded picture"
      });
    };
    reader.readAsDataURL(file);
  }
})()


function add(){
	const x=document.getElementById('getnumber').value;

}

function one(){
	const x= parseInt(1);
	document.getElementById("getnumber").value += x;
}

function sp(){
const mine=['a','b','c','d','e'];
mine.splice(2,1,12,2,3);

document.getElementById('spli').innerHTML=mine;
}