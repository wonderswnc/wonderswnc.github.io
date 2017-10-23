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
  return sortL(left).concat([currentValue], sortL(right));
}

function range(len = 10) {
  let i = 0,arr = [];
  while(i < len) {
    arr.push(i ++);
  }
  return arr;
}

//测试用例
sortL(range().map(item => (item * Math.random() * 10 | 0))) 