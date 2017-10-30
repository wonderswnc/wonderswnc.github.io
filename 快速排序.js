function sortL(arr) {
  if (arr.length <= 0) {
    return arr;
  }
  var index = (Math.random() * arr.length | 0);
  var currentValue = arr[index];
  var left = [], right = [];
  arr.splice(index,1);
  for (let i = 0;i < arr.length;i ++) {
    arr[i] <= currentValue ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...sortL(left), currentValue, ...sortL(right)];
}



function range(len = 10) {
  let i = 0,arr = [];
  while(i < len) {
    arr.push(i ++);
  }
  return arr;
}

//测试用例
console.log(sortL(range((10 + Math.random() * 90) | 0).map(item => (item * Math.random() * 10 | 0))));

Array.prototype.insertSort = function() {
  const len = this.length;
  for (let i = 0;i < len - 1; i ++) {
    for (let j = i + 1;j < len; j ++) {
      if (this[i] > this[j]) {
        _value = this[i];
        this[i] = this[j];
        this[j] = _value;
      }
    }
  }
  return this;
}
console.log(range((10 + Math.random() * 90) | 0).map(item => (item * Math.random() * 10 | 0)).insertSort());