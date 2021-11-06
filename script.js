function checkMinLength(value) {
    const minLengthRegex = /../;

    if (!minLengthRegex.test(value))
        return false

    return true
}

function checkZipCode(value) {
    const zipcodeRegex = /\b\d{5}\b/;
    if (!zipcodeRegex.test(value))
        return false

    return true
}

function checkEmail(value) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(value))
        return false

    return true
}

function checkPassword(value) {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!passwordRegex.test(value))
        return false

    return true
}

var checkConfirmation = function () {
    if (document.getElementById('password1').value != document.getElementById('password2').value)
        return false

    return true
}


// AGE VALIDATION

function checkBirthdate(value) {
    const birthRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    if (!birthRegex.test(value))
        return false

    return true
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear(); // nuvarande år - födelseår
    var m = today.getMonth() - birthDate.getMonth(); // nuvarande månad - födelsemånad
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { // OM nuvarande månad - födelsemånad är mindre än 0 OCH dagens datum är mindre än födelsedatum
        age--;
    }

    if (age < 18) {
        return false
    }

    return true;
    
}

var forms = document.querySelectorAll('.needs-validation')

forms.forEach(element => {

    switch (element.id) {
        case "firstname":
        case "lastname":
        case "street-address":
        case "city":
            element.addEventListener("keyup", function (e) {
                console.log(checkMinLength(e.target.value))
            })
            break;

        case "dateString":
            element.addEventListener("keyup", function (e) {
                console.log(checkBirthdate(e.target.value))
                console.log('age: ' + getAge(e.target.value)) // HÄR RÄKNAR DEN UT ÅLDER!!!!! men keyup behövs inte här??
                //console.log('age is: ' + checkAge())
            })
            break;

        case "zipcode":
            element.addEventListener("keyup", function (e) {
                console.log(checkZipCode(e.target.value))
            })
            break;

        case "email":
            element.addEventListener("keyup", function (e) {
                console.log(checkEmail(e.target.value))
            })
            break;

        case "password1":
            element.addEventListener("keyup", function (e) {
                console.log(checkPassword(e.target.value))
            })
            break;

        case "password2":
            element.addEventListener("keyup", function (e) {
                console.log(checkConfirmation(e.target.value))
            })
            break;
    }
})
