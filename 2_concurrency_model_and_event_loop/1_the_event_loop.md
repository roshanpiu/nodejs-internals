# Node main components

1. Heap (Part of V8) Where objects are kept in memory
2. Call Stack (Part of V8)
3. Event Loop (Part of libuv)
4. Event Queue (Part of libuv)
5. Node API
   
- Both Stack and Heap is part of the runtime engine not Node
- Node adds APIs such as timers, emitters, grabbers around OS Operations
- Node also provides event queue and event loop using libuv
- Event Loop works between event queue and call stack
- When the Call Stack is empty and Event Queue is empty node will exit the process
- Any slow code which executed in the stack directly will block the event loop
- Also we should keep an eye on the events which gets queued to the event Queue

## The Call Stack
The call stack is simply a list of functions
In the context of Call Stack the elements in the stack are functions
Since JS is single threaded there is only one stack which can do one thing at a time. If the Stack is executing something nothing else will happen in that single thread
Every time we step into a function it gets pushed to the Stack 
Every time we return from a function it gets popped out of the Stack

## Handling Slow Operations
As long as the operations we execute in the Call Stack are fast there is no problem of having a single thread
When we start dealing with slow operations the fact that we have a single thread becomes a problem

## Event Queue
Simply a list of things to be processed. Slow operations callbacks gets get queued to the event queue

## Event Loop
Monitors the Call Stack and Event Queue. when the Call Stack is empty and Event Queue is not empty there are events waiting to be processed in the Queue. it will de-queue one event from the queue and pushes it's callback to the stack. Event loop does this process until the event queue is empty
Some processes handles IO asynchronously keeping track of a callback when it's done it will queue the callback to the event queue

When we start a setTimeout for a 0 millisecond the callback will not get invoked immediately rather it will get executed when the Call Stack is empty
The delay we provide to a setTimeout is a minimum time to get executed 

use setImmediate when you want something to get executed on the next tick of the event loop

process.nextTick executes code after the current operations and before the next tick of the event loop