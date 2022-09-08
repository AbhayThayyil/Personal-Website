var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var subjectError = document.getElementById('subject-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')


// function for validating the input field  

function validateName() {
    var name = document.getElementById('name').value


    if (name.length == 0) {
        nameError.innerHTML = 'Name required'
        return false

    }
    if (!name.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)) {  // condition for checking full name or not 
        nameError.innerHTML = 'Write full name'    // assiging the error message to nameError variable
        return false

    }
    nameError.innerHTML = ''
    return true
}

// function for validating the email

function validateEmail() {
    var email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) {
        emailError.innerHTML = "Email is invalid";
        return false
    }
    emailError.innerHTML = '';
    return true;

}

// function for validating subject field

function validateSubject(){
    var subject = document.getElementById('subject').value


    if (subject.length == 0) {
        subjectError.innerHTML = 'Subject required'
        return false

    }
    subjectError.innerHTML = ''
    return true
    
}

// function for validating message field
function validateMessage(){
    var message = document.getElementById('message').value
    var required = 30
    var left = required - message.length


    if(left > 0){
        messageError.innerHTML = left + ' more characters required '
        return false
    }
    messageError.innerHTML = ''
    return true
    
}

//function for validating the form
function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()  ){
        submitError.style.display = 'block';
        submitError.innerHTML='Please fill the form'
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false
    }
    return true
}