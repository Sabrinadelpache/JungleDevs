export const validateEmail = (email) =>{
    var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    console.log(email)
    return emailRegex.test(email)
}  

const urlJungleDevs = 'https://api.jungledevs.com/api/v1/challenge-newsletter/'

export const postData = (nameRegistration, emailRegistration)  => {
    let name = nameRegistration.toUpperCase();
    let email = emailRegistration.toUpperCase();
    let body = {
        'name': name,
        'email': email
    };
    let request = new XMLHttpRequest();
    request.open("POST", urlJungleDevs, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));
    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText;
}
