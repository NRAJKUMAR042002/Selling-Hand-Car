function arrstorage{
	const document.getElementByName("fullname");

	const input1=document.getElementById('fn');
	const input2=document.getElementById('user');
	const input3=document.getElementById('pw');
	const input4=document.getElementById('cp');


	const value1=input1.value;
	const value2=input2.value;
	const value3=input3.value;
	const value4=input4.value;

	const vi=input.push(value1,value2,value3,value4);

	function output{

    document.getElementById('demo').innerHTML=vi;

}

}

function password{
	const x = document.getElementById('pw');

	const len=x.length;


	if(len>6 || len<20 ) 
	{
		window.alert('password entered succussfully');

	}
	else
	{
		window.alert('please enter the 8 characters contains 1 cap 1 small 1 special 1 number');
	}
}