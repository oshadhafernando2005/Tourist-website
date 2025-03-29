var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var textareaError = document.getElementById('textarea-error');

function validateName() {
    var name = document.getElementById('name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        alert("Enter your name."); 
        return false;
    }

    nameError.innerHTML = ''; 
    return true;
}

function validateEmail() {
    var email = document.getElementById('Email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        alert("Enter your email.");
        return false;
    }       
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = ''; 
    return true;
}

function validateForm() {
    var isNameValid = validateName(); 
    var isEmailValid = validateEmail(); 

    var easyNo = document.getElementById('easyNo').checked;
    var improvementTextarea = document.getElementById('content').value.trim();

    if (easyNo && improvementTextarea === "") {
        textareaError.innerHTML = 'This should be filled';
        return false;
    }

    // Ensure both name and email are valid before allowing form submission
    if (!isNameValid || !isEmailValid) {
        return false;
    }

    return true;
}

function previewForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var visit = document.querySelector('input[name="visit"]:checked').value;
    var easy = document.querySelector('input[name="easy"]:checked').value;
    var content = document.getElementById('content').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var recommend = document.querySelector('input[name="recommend"]:checked').value;

    // Displaying the preview
    var previewMessage = "Name: " + name + "\n" +
                         "Email: " + email + "\n" +
                         "First Time Visiting: " + visit + "\n" +
                         "Website Easy to Navigate: " + easy + "\n" +
                         "Improvements Suggestions: " + content + "\n" +
                         "Satisfaction Rating: " + rating + "\n" +
                         "Recommendation: " + recommend;

    alert(previewMessage);
}
