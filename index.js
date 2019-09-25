//Worker Pool Codes

let tasks = require("./heavy-tasks");
const workerPool = require("workerPool");
let pool = workerPool.pool();

let resultFromHeavyTask = tasks.heavyTaskSync(); // The Server Will not serve Any Client Request unless this is done
console.log(resultFromHeavyTask);
let resultFromNonHeavyTask = tasks.noneHeavyTask(2, 5);
console.log(resultFromNonHeavyTask); // This will be call only when heavy task is completed

/**
 * How Do we deal with above Heavy Task Call
 */

let resultFromHeavyTaskNew = pool.exec(tasks.heavyTaskSync); //Offloading work to worker pool
console.log(resultFromHeavyTaskNew);
let resultFromNonHeavyTaskNew = tasks.noneHeavyTask(2, 5);
console.log(resultFromNonHeavyTaskNew);

/**
 * NOTE : For Checking Worker Pooling Concept, Comment line 7,8,9,10
 *        For Checking Normal Pooling Concept, Commment line 16,17,18,19
 */
