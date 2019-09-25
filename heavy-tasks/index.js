function heavyTaskSync(loopLimit = 49999999999999) {
  let count = 1;
  for (let index = 0; index < loopLimit; index++) {
    count += 1;
  }
  //console.log(`Count is ${count}`);
  return count;
}

function heavyTaskAsync() {
  let result = "Success";
  setTimeout(() => {
    console.log("Pool");
  }, 9000);
  return result;
}

function noneHeavyTask(a, b) {
  let result = a + b;
  //console.log(`Addition is ${a + b}`);
  return result;
}

module.exports = { heavyTaskAsync, heavyTaskSync, noneHeavyTask };
