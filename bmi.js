function result(){

//bmi= kg/m2
  let input1= document.getElementById("kilo").value;
  let input2= document.getElementById("cm").value ;
  // let result= document.getElementById("result").value;
              if (input1 == ""){

                document.getElementById("kilo").style.border= "solid 1px red";
                document.getElementById("weight").innerHTML= "weight is must !!";
                document.getElementById("weight").style.color="red";
                document.getElementById("result").value== "" ;
                
                }

              if (input2 == ""){
                document.getElementById("cm").style.border= "solid 1px red"; 
                document.getElementById("height").innerHTML= "height is must !!";
                document.getElementById("height").style.color="red"; 
                document.getElementById("result").value== "" ;
                   
              }

    document.getElementById("result").value= Math.floor(Number(input1) / Number(input2*input2*0.0001));
    document.getElementById("demo").innerHTML  = "Thank you, Welcome back" ;
    document.getElementById("bye").innerHTML  = "Take care of your health" ;

            if(document.getElementById("result").value== ""){
              document.getElementById("demo").innerHTML  = "" ;
              document.getElementById("bye").innerHTML  =  "" ;
            }

            if(document.getElementById("result").value== 0){
              document.getElementById("demo").innerHTML  = "" ;
              document.getElementById("bye").innerHTML  =  "" ;
            }


};


function clr() {
  
  document.getElementById("kilo").value = "" ;
  document.getElementById("cm").value  = "" ;
  document.getElementById("result").value  = "" ;
  document.getElementById("demo").innerHTML = "" ;
  document.getElementById("bye").innerHTML = "" ;
  document.getElementById("weight").innerHTML= "";
  document.getElementById("height").innerHTML = "" ;
  document.getElementById("kilo").style.border= "none";
  document.getElementById("cm").style.border= "none";
 
}

function good() {
   
  document.getElementById("kilo").style.border="solid 1px green";
  
   let valid1 = document.getElementById("kilo").value;
   
     if (valid1.length >= 1){
      document.getElementById("weight").innerHTML= "";
     }
     
     
  
  
}

function bad() {
   
  document.getElementById("cm").style.border="solid 1px green";
  let valid2 =  document.getElementById("cm").value;

   if (valid2.length >= 1){
    document.getElementById("height").innerHTML= "";
   }

}



