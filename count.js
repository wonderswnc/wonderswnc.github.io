function countMinTime(n, paraInfoArr, positionArr) {
  var paraArr= [], speedArr = [], indexArr= [], time = 0;
  paraInfoArr.forEach(function(paraInfo) {
    paraArr.push(paraInfo.split(' ').slice(0, 2).map(number => +number));
    speedArr.push(+paraInfo.split(' ').pop())
  });
  paraArr.forEach((para,index) => {
    if (para[0] <= positionArr[0] && para[1] > positionArr[0]) {
      indexArr[0] = index;
    }
    if (para[0] <= positionArr[1] && para[1] > positionArr[1]) {
      indexArr[1] = index;
    } 
  })
  if (indexArr[0] === indexArr[1]) {
    time += (positionArr[1] - positionArr[0]) * speedArr[indexArr[0]]
  } else {
    time += (paraArr[indexArr[0]][1] - positionArr[0]) * speedArr[indexArr[0]];
    time += (positionArr[1] - paraArr[indexArr[1]][0]) * speedArr[indexArr[1]];
    var i = indexArr[1] - indexArr[0];
    var count = 1;
    while(i > 1) {
      var _arr = paraArr[indexArr[0] + count];
      time += (_arr[1] - _arr[0]) * speedArr[indexArr[0] + count];
      i--;
      count++;
    }
  }
  console.log(new Date().valueOf())
  return time;
}
countMinTime(3, ['0 20 30', '20 80 50', '80 100 20'], [10, 90]);console.log(new Date().valueOf())