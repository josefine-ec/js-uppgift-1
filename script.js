function checkMinLength(value) {
    const minLengthRegex = /../;
    if(!minLengthRegex.test(value))
        return false

    return true
}

function checkZipCode(value) {
    const zipcodeRegex = /\b\d{5}\b/;
    if(!zipcodeRegex.test(value))
        return false

    return true
}

function checkEmail(value) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(value))
        return false

    return true
}

function checkPassword(value) {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(!passwordRegex.test(value))
        return false

    return true
}

var checkConfirmation = function() {
    if (document.getElementById('password1').value != document.getElementById('password2').value)
      return false

    return true
  }


function getAge(DOB) { // KAOS
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;
}

var forms = document.querySelectorAll('.needs-validation')

forms.forEach(element => {

    switch(element.id) {
        case "firstname":
        case "lastname":
        case "street-address":
        case "city":
            element.addEventListener("keyup", function(e) {
                console.log(checkMinLength(e.target.value))
            })
            break;

        case "birthday": // KAOS
            element.addEventListener("keyup", function(e) {
                console.log(getAge(e.target.DOB))
            })
            break;            

        case "zipcode":
            element.addEventListener("keyup", function(e) {
                console.log(checkZipCode(e.target.value))
            })
            break;

        case "email":
            element.addEventListener("keyup", function(e) {
                console.log(checkEmail(e.target.value))
            })
            break;

        case "password1":
            element.addEventListener("keyup", function(e) {
                console.log(checkPassword(e.target.value))
            })
            break;

        case "password2":
            element.addEventListener("keyup", function(e) {
                console.log(checkConfirmation(e.target.value))
            })
            break;
    }
})
