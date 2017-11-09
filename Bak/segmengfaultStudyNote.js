/**
 * 类型判断
 */
function typeofLog() {
  [... arguments].map(item => console.log(typeof item))
}
typeofLog(1, true, 'string', undefined, null, Math, Array, Symbol);

class Animal {
  constructor(name) {
    this.name = name;
  }
}
function toStringLog() {
  [... arguments].map(item => console.log(Object.prototype.toString.call(item)))
}
toStringLog(1, true, 'string', undefined, null, Math, new RegExp(), new Date(), new Array(), Symbol(), new Animal());