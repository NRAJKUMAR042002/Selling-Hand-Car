const x={
	firstname:"raj" ,
	lastname:"kumar" ,
	age: 22 ,
	education: "B.E.," ,

	fullname: function() {
		return this.firstname+" "+this.lastname;
	}

};

document.getElementById("demo").innerHTML = x.fullname();


const y={
	firstname:"raj",
	lastname:"kumar",
	age:22,
	courses : ['cse','ece','mech','eee','civil'] ,

	course:function(){
		return "this"+this.courses+"courses  are offer by me";
	}
};

document.getElementById("courses").innerHTML = y.course();