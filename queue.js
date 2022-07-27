// Queue -- FIFO(First in, First out)
let queue = {
  data: [],
  add: function(element) {
    this.data.push(element);
  },
  remove: function() {
    return this.data.shift();
  }
}

queue.add(1);           // add element  === [1]
queue.add(2);           // add element to the end === [1, 2]
queue.add(3);           // add element to the end === [1, 2, 3]
queue.add(4);           // add element to the end === [1, 2, 3, 4]
console.log(queue.data);
queue.remove();         // remove element from the starting === [2, 3, 4]
queue.remove();         // remove element from the starting === [3, 4]
console.log(queue.data);

