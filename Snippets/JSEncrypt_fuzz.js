/*
Snippet where the JSEncrypt is used for encryption purpose.
*/

//payload::
function payloads(){
var x = document.createElement("textarea");
x.setAttribute('id', 'payloads');
document.body.appendChild(x);
}

function fuzz1(){
var textArea = document.getElementById('payloads');
var lines = textArea.value.split('\n');
for (var i = 0; i < lines.length; i++) {

// write your logic here...
console.log('Payload: ' + lines[i]);

   var encrypt = new JSEncrypt();
   encrypt.setPublicKey(AppConfig.passwordEncryption.pubkey);
   console.log(encrypt.encrypt(lines[i]))  
 
}
}
