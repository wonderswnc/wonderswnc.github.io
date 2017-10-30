const observal = {

  eventList: {},

  listen: function(eventName, callback) {
    if (!Reflect.has(this.eventList, eventName)) {
      this.eventList[eventName] = [];
    }
    this.eventList[eventName].push(callback);
  },

  trigger: function(eventName) {
    for (let callback of this.eventList[eventName]) {
      callback();
    }
  }
}
window.observal = observal;

function printT(target, propskey, reciver) {
  console.log(arguments);
}

var a = {z:1};
var obj = new Proxy(a, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: (target, key, value, receiver) =>  {
    return Reflect.set(target, key, value, receiver);
  }
});

function throttle(callback, delay = 1000) {
  var timeout = null;
  return function() {
    var args = arguments;
    if (timeout === null) {
      timeout = setTimeout(() => {
        callback.apply(this, args);
        timeout = null;   
      }, delay);
    }
  }
}

function throttleByTime(func, wait = 1000) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}

function moveoverHandle(tips) {
  console.log(tips, arguments);
}
// document.onmousemove = throttle(moveoverHandle);
document.onmouseover = throttleByTime(moveoverHandle);