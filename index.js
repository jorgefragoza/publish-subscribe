require('./libs/event-handler');

// EXAMPLE OF PUBLISH-SUBSCRIBE WITH LOGIN EVENTS FROM OUTSIDE
const auth = require('./login');
const loginService = new auth();
const eventsLogin = require('./login-events');

EventHandler.subscribe(eventsLogin.LoginSuccess, (user) => {
    console.log(`login successfully ${user}`);
});

EventHandler.subscribe(eventsLogin.LoginError, () => {
    console.log(`login error`);
});

// attempt to login
loginService.login('jorge.fragoza');
// attempt to login
loginService.login('luis');


// EXAMPLE OF PUBLISH-SUBSCRIBE WITH EVENTS FROM INSIDE
const events = require('./events');

EventHandler.subscribe(events.ceroParametro, () => {
    console.log(`evento sin parametro`);
});

EventHandler.subscribe(events.unParametro, (param1) => {
    console.log(`evento con un parametro ${param1}`);
});

EventHandler.subscribe(events.dosParametro, (param1, param2) => {
    console.log(`evento con un parametro ${param1} y ${param2}`);
});

EventHandler.subscribe(events.tresParametro, (param1, param2, param3) => {
    console.log(`evento con un parametro ${param1}, ${param2} y ${param3}`);
});

EventHandler.publish(new events.ceroParametro());
EventHandler.publish(new events.unParametro(1));
EventHandler.publish(new events.dosParametro(1, 2));
EventHandler.publish(new events.tresParametro(1, 2, 3));