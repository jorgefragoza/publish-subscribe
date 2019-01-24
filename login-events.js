class LoginSuccess {
    constructor(user) {
        this.user = user;
    }
}

class LoginError {
    constructor() {
    }
}

module.exports.LoginSuccess = LoginSuccess;
module.exports.LoginError = LoginError;