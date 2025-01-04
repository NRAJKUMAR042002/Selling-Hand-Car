
  /*function changeimage()
  {
           document.getElementById("unhappy").src= "../sept/face.png";

  }
  
  function ci() 
  {
            document.getElementById("unhappy").src="../sept/unhappy.png";
  }
  /* const  smiley=document.getElementById("smiley");
   smiley.addEventListener("click",() =>{
        smiley.src('../sept/smiley1.png');
   });*/





   const myImg = document.getElementById("unhappy");
   let isFirstImage = true;
   const myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function() {
  if (isFirstImage) {
    myImg.src = "../sept/face.png";
  } else {
    myImg.src = "../sept/unhappy.png";
  }
  isFirstImage = !isFirstImage;
});




