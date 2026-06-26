// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

if(name==="" || email==="" || message===""){

alert("Please fill in the fields above to continue.");

return;

}

alert("Message sent successfully!");

this.reset();

});

}

// RESERVATION FORM
const reservationForm=document.getElementById("reservationForm");

if(reservationForm){

reservationForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Reservation submitted successfully!");

this.reset();

});

}

