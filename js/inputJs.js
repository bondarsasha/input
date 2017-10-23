var price = document.getElementById('price');
 var send = document.getElementById('send');
 send.onclick = function() {

   if (parseFloat(price.value).toString().length==2&&price.value.toString()[2]==',') {
     document.getElementById('error').style.display='none';
     document.getElementById('thank').style.display='block';
     return;
   };

   var regexp = /\b\d+,\d{2}\b/;

   var strArray = price.value.split(',');

   if (!regexp.test(price.value) || (strArray[0].length > 2)) {
     document.getElementById('error').style.display='block';
     document.getElementById('thank').style.display='none';
   } else {
     document.getElementById('error').style.display='none';
     document.getElementById('thank').style.display='block';
   };
 };










/*price.onkeydown = function(event) {
  if (event.key=='.') {
    price.value+= ',';
    return false;
  };
  if (!parseFloat(event.key)) {
    document.getElementById('error').style.display='block';
    return false;
  } else {document.getElementById('error').style.display='none';};
  console.log(event);
}*/
