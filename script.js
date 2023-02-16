const countrysRe = {
    "US": "^\d{5}([\-]?\d{4})?$",
    "UK": "^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2})$",
    "DE": "\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b",
    "CA": "^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$",
    "FR": "^[0-9]{2}[ ]?[0-9]{3}$", 
    "IT": "^(V-|I-)?[0-9]{5}$",
    "AU": "^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$",
    "NL": "^[1-9][0-9]{3}\s?([a-zA-Z]{2})?$",
    "ES": "^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$",
    "DK": "^([D|d][K|k]( |-))?[1-9]{1}[0-9]{3}$",
    "SE": "^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$",
    "BE": "^[1-9]{1}[0-9]{3}$",
    "IN": "^\d{6}$"
};

const allInputs = Array.from(document.querySelectorAll("select, input"));

const formElt = document.querySelector("form");
const [
    countryInput, 
    zipInput, 
    mailInput, 
    pswInput, 
    pswConfInput ] = allInputs;

countryInput.setCustomValidity("Please choose a country");
countryInput.addEventListener("input", () => {

    if (countryInput.value) {
        countryInput.setCustomValidity("");
        zipInput.removeAttribute("disabled");
        zipInput.setAttribute("pattern", countrysRe[countryInput.value])
        zipInput.placeholder = "Enter your zip code";
    } else {
        countryInput.setCustomValidity("Please choose a country");
        zipInput.setAttribute("disabled", "");
        zipInput.placeholder = "Please first choose a country";
    }

});

zipInput.addEventListener("input", () => {

    if (zipInput.validity.patternMismatch) {
        zipInput.setCustomValidity("Please enter a zip code at the format of your country");
    } else {
        zipInput.setCustomValidity("");
    }

});

pswInput.addEventListener("input", () => {
    if (pswInput.validity.patternMismatch) {
        pswInput.setCustomValidity(
            `Your password should have :
            - a minimum of 8 char.
            - one lower case and upper case letter
            - one digit and one special character`
        );
    } else {
        pswInput.setCustomValidity("");
    }
});

pswConfInput.addEventListener("input", () => {
    if (pswConfInput.value !== pswInput.value) {
        pswConfInput.setCustomValidity("Passwords doesn't match!");
    } else {
        pswConfInput.setCustomValidity("");
    }
});

formElt.addEventListener("submit", (e) => {
    console.log("The form can be submitted (don't know if that word exists)");
    e.preventDefault();
})
