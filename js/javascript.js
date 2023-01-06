         /* LOADER A MINUTEUR */
           var myVar;
          function myFunction() {
             document.getElementById("loader").style.display = "block";
             
                  myVar = setTimeout(showPage, 3000);  
                  //je set le timer a 3000miliseconde
                }
                
          function showPage() {
           document.getElementById("loader").style.display = "none";
           document.getElementById("loaderHide").style.display = "block";
            }      
          