window.addEventListener('DOMContentLoaded', () =>{
    document.body.classList.remove('fade-out');
});

 function validateForm(){
    let x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Phone number must be filled out");
        return false;
    }
}