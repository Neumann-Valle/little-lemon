// https://www.abstractapi.com/guides/validate-phone-number-javascript
function validateUSphone(phone = '') {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone);
}

export default validateUSphone;