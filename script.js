function checkMinLength(value, minLength = 2) {
    if(value.length < minLength)
        return false

    return true
}

function checkZipCode(value, minValue = 5) {
    if(value.length < minValue)
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

var forms = document.querySelectorAll('.needs-validation')

forms.forEach(element => {

    switch(element.type) {
        case "text":
            element.addEventListener("keyup", function(e) {
                console.log(checkMinLength(e.target.value))
            })
            break;

        case "number":
            element.addEventListener("keyup", function(e) {
                console.log(checkZipCode(e.target.value))
            })
            break;

        case "email":
            element.addEventListener("keyup", function(e) {
                console.log(checkEmail(e.target.value))
            })
            break;

        case "password":
            element.addEventListener("keyup", function(e) {
                console.log(checkPassword(e.target.value))
            })
            break;
    }
})
