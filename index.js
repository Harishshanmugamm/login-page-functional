const form = document.querySelector("form");
const fname = form.querySelector('.fname');
const lname = form.querySelector('.lname');
const city = form.querySelector('.city');
const phone = form.querySelector('.phone');
const address = form.querySelector('.address');

form.addEventListener("submit", function (event) {
  let valid = true;
  if (!fname.value || !lname.value || !city.value || !phone.value || !address.value) {
    alert("Please enter every element and Complete the form to submit");
    valid = false;
  }

  if (phone.value.length<10) {
    alert("Make phone Number to 10 digits")
    valid=false;
  }
  
  if (!valid) {
    event.preventDefault();
  }
});

