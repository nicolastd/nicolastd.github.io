/* 
   Author: Nicolas Tancogne-Dejean
   Created: Nov 2020
   Description: Custom JS file
*/

window.onscroll = function() {myFunction()};
  
function myFunction() { 
  var pos = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if(pos > 50) {
    document.getElementById ("back-buttom").style.display="inline";
  } else {
    document.getElementById ("back-buttom").style.display="none";
  }
}

