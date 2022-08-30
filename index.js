import queue from "./queue.js";

const numbers = new queue();

numbers.enqueue("1");
numbers.enqueue("2");
numbers.enqueue("3");
numbers.enqueue("4");


// console.log(numbers.dequeue());

console.log(numbers.dequeue());
console.log(numbers.getItems());

