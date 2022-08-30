export default class queue {
  constructor() {
    this.items = [];
  }

  // function to add item to array
  enqueue(item) {
    // this.items.push(item);
    this.items[this.items.length] = item;
  }

  // function to remove item from array
  dequeue() {
    return this.items.shift();

    // removing item from array -> Without using array method
    // step 1 pointing at 2
    // step 2 change index from [1] to [0]

    // step 1 remove item
    // step 1.1 point at index[start]
    // step 1.2 remove variable from index[start]
    // for (let start = 0; start <= this.items.length; start++) {
    //   const itemTobeDeleted = this.items[start];
    //   this.items[start] = undefined;

    // step 2 transfer item
    // step 2.1 point at index[start + 1]
    // step 2.2 add new variable from index[start + 1] to index[start]
    // const newItems = [];
    // for (
    //   let newStart = start + 1;
    //   newStart <= this.items.length;
    //   newStart++
    // ) {
    //   newItems.push = this.items[newStart];
    // }
    // this.items = newItems;
    // }
  }

  // function to print all items
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }

  // function to return array size
  getSize() {
    return this.items.length;
  }

  // function to check if array is empty
  isEmpty() {
    return this.getSize() === 0;
  }

  // function to get items from array
  getItems() {
    return this.items;
  }
}
