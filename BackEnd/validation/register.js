const isEmpty = require("./isEmpty");

const validator = require("validator");

module.exports = function ValidateRegister(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.adress = !isEmpty(data.adress) ? data.adress : "";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "";
    data.imageUrl = !isEmpty(data.imageUrl) ? data.imageUrl : "";

    if (validator.isEmpty(data.name)) {
        errors.name = "Required name";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Required format email";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Required email";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Required password";
    }
    if (validator.isEmpty(data.adress)) {
        errors.adress = "Required adress";
    }
    if (validator.isEmpty(data.phoneNumber)) {
        errors.phoneNumber = "Required phoneNumber";
    }
    if (validator.isEmpty(data.imageUrl)) {
        errors.imageUrl = "Required imageUrl";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}