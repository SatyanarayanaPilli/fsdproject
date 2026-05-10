// Banner Button

document.getElementById("bannerBtn").onclick = function(){

    alert("Welcome to NextGen Coders!");

};

// Contact Form

document.getElementById("contactForm").onsubmit = function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields");

    }

    else{

        alert("Thank You " + name + "!");

        document.getElementById("contactForm").reset();

    }

};