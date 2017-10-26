function range(len = 10, startIndex = 0) {
  const arr = new Array(len);
  for (let i = 0; i < len; i ++, startIndex ++) {
    arr[i] = startIndex;
  }
  return arr;
}