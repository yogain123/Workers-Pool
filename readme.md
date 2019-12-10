## Handling NodeJS C.P.U Intensive Task

NodeJS is frequently referred to as single-threaded. This is true - but there's a catch.
Node has Single "Main" Thread to handle all Client Request.
When a Blocking request comes it actually delegates it task to the worker thread present in thread pool,
So we can conclude that NodeJS Is "not" totally end to end Single Threaded.

**Note: Worker thread are not the main thread.**

Okay , Thats Fine but If we say this about NodeJS that :

In Node.js everything runs in parallel, except your code.
What this means is that:
<b>All I/O code that you write in Node.js is non-blocking, while (conversely) all non-I/O code that you write in Node.js is blocking. </b>
If the above statement is true (Obviously its true) then What if a very very heavy CPU task comes as a client request ,then What ?
You can't do anything but wonder if you could have used another language.
But , No We can even delegate this CPU extensive task to worker thread .

**How do we do that ??**
I will explain this with a proper example here
As you can see I have created a function called heavyTask Which runs a for loop for 5000000000000 times , 
The main thread will be busy for a long time and it will deny to serve any other client request.
How do we delegate this CPU task to one of the worker thread present in thread pool.
worker-pool offers an easy way to create a pool of workers for both dynamically offloading computations 
as well as managing a pool of dedicated workers. It basically implements a thread pool pattern.
There is a pool of workers to execute tasks.
New tasks are put in a queue.
A worker executes one task at a time, and once finished, picks a new task from the queue.

In the above example there is a function heavyTask, 
which is offloaded dynamically to a worker to be executed for a given set of arguments.

This is how you can handle CPU Intensive Task by offloading that work to the worker thread. <br/>
https://levelup.gitconnected.com/handling-nodejs-c-p-u-extensive-task-aa559452eca8
