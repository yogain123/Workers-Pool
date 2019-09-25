function heavyTaskSync(loopLimit = 49999999999999): number {
  let count = 1;
  for (let index = 0; index < loopLimit; index++) {
    count += 1;
  }
  //console.log(`Count is ${count}`);
  return count;
}

function heavyTaskAsync(): string {
  let result = "Success";
  setTimeout(() => {
    console.log("Pool");
  }, 9000);
  return result;
}

function noneHeavyTask(a: number, b: number): number {
  let result = a + b;
  //console.log(`Addition is ${a + b}`);
  return result;
}

module.exports = { heavyTaskAsync, heavyTaskSync, noneHeavyTask };
