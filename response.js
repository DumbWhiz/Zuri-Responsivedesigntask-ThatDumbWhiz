const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('pass');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkInputs();
});

function checkInputs() {
   const firstnameValue = firstname.value.trim();
   const lastnameValue = lastname.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();


   if (firstnameValue === '') {
      //show error
      //add error class
      setErrorfor(firstname, 'firstname cannot be empty');
   } else {
      //add success class
      setSuccessfor(firstname);
   }

   if (lastnameValue === '') {
      setErrorfor(lastname, 'lastname cannot be empty');
   } else {
      setSuccessfor(lastname);
   }

   if (emailValue === '') {
      setErrorfor(email, 'email cannot be empty');
   } else if (!isEmail(emailValue)) {
      setErrorfor(email, 'Looks like this is not an email');
   } else {
      setSuccessfor(email);
   }

   if (passwordValue === '') {
      setErrorfor(password, 'password cannot be empty');
   }
   else {
      setSuccessfor(password);
   }
}
function setErrorfor(input, message) {
   const detailBox = input.parentElement; //detail-box
   const small = detailBox.querySelector('small');

   //small error message
   small.innerText = message;

   //error class
   detailBox.className = 'detail-box error'
}

function setSuccessfor(input, message) {
   const detailBox = input.parentElement;
   detailBox.className = 'detail-box success'
}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
