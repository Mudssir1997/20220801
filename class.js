function showresult() {
    let numberGoat = document.getElementById("numberinput").value;
    let result;
  
  
    if (numberGoat >=500 ){
      result ="5Goats";

    }

       else if (numberGoat >=400 ){
      result ="4Goats";
    } else if (numberGoat>= 201) {
      result="3Goats"  ;
    } else if (numberGoat >= 121){
      result ="2Goats";
      }else if (numberGoat >= 40){
        result ="1Goat";
     }else if (numberGoat >= 1){
      result ="0Goat";
      }
  
   
  
    document.getElementById("resultdetail").innerText = result;
  }         
  