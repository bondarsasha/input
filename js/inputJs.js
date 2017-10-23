var price = document.getElementById('price');
 var send = document.getElementById('send');

price.onmouseover = function() {
  document.getElementById('enterPrice').style.display='block';
  document.getElementById('error').style.display='none';
  document.getElementById('thank').style.display='none';
};

price.onmouseout = function() {
  document.getElementById('enterPrice').style.display='none';
  document.getElementById('maxPrice').style.display='none';
};

price.onmousedown = function() {
  document.getElementById('maxPrice').style.display='block';
  document.getElementById('error').style.display='none';
};

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
     return;
   };
 }
