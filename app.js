const EventEmiter = require('events');

const myEmitter = new EventEmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected');

