function sortL(arr) {
  if (arr.length === 1) {
    return [arr[0]]
  }
  if (arr.length === 0) {
    return [];
  }
  var index = Math.floor(Math.random() * arr.length);
  var currentValue = arr[index];
  var left = [], right = [];
  arr.splice(index,1);
  for (let i = 0;i < arr.length;i ++) {
    if (arr[i] <= currentValue) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return sortL(left).concat([currentValue], sortL(right));
}
sortL([4,3,2,1,1,3])
function range(len = 10) {
  let i = 0,arr = [];
  while(i < len) {
    arr.push(i ++);
  }
  return arr;
}