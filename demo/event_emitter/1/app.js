const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDbConnection = () => console.log('DB connected');

// Подписаться
// myEmitter.addListener('connected', logDbConnection);
myEmitter.on('connected', logDbConnection);

myEmitter.emit('connected');
myEmitter.emit('connected');
myEmitter.emit('connected');

// Мы можем удалить все листнеры 
// myEmitter.removeAllListeners();

// Удалить один листенер
myEmitter.removeListener('connected', logDbConnection);
myEmitter.off('connected', logDbConnection);

myEmitter.emit('connected');

myEmitter.on('msg', console.log);
myEmitter.on('msg', console.log);


myEmitter.emit('msg', 'hello');

myEmitter.once('off', () => console.log('Invoked once'))

myEmitter.emit('off');
myEmitter.emit('off');

myEmitter.emit('msg', 'hello');

myEmitter.setMaxListeners(1);

console.log(myEmitter.getMaxListeners());

const listenersMsg = myEmitter.listenerCount('msg');
console.log(listenersMsg);
const listeners = myEmitter.listeners('msgconnected').map(val => val.name);
console.log(listeners);

const eventsNames = myEmitter.eventNames();
console.log(eventsNames);

myEmitter.prependListener('msg', data => console.log('Prepend:', data));


myEmitter.emit('msg', 'Hi')

// myEmitter.on('error', err => console.error('Error is handled', err.message));

// myEmitter.emit('error', new Error('err'))


const target = new EventTarget();
const logTarget = () => console.log('Connected to target');

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'))