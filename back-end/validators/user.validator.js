const validator = require("validator");

const expr = /^[a-zA-Z0-9._]*$/;

const validateUsername = (username) => {
    let passedFlag = true;

    if (username.length > 150)
        passedFlag = false;
    if (!expr.test(username))
        passedFlag = false;

    return passedFlag;
};

module.exports = { validateUsername }