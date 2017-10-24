function closure() {
  for (let i = 0; i < 10; i ++) {
    setTimeout(function() {
      consoleL(i);
    },0);
    console.log(i);
  }
  console.log(`************************`);
}
closure();
function consoleL(i) {
  console.log(i)
};