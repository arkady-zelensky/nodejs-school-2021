import { EventEmitter } from 'events';

let eventName = 'greet';

class User extends EventEmitter {
  sayPhrase(data) {
    this.emit(eventName, data);
  }
}

let moriarty = new User();

// add listener to event 'greet' for the object moriarty
moriarty.on(eventName, function(data) {
  console.log(data);
});

moriarty.sayPhrase("Miss me? [1]");
moriarty.sayPhrase("Miss me? [2]");
moriarty.sayPhrase("Miss me? [3]");
