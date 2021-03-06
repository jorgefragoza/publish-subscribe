const events = require('./login-events');

class Login {
    constructor() {
        this.login = (user)  => {
            if (user === 'jorge.fragoza' ) {
                EventHandler.publish(new events.LoginSuccess(user));
            } else {
                EventHandler.publish(new events.LoginError());
            }
        }
    }
}

module.exports = Login;