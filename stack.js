// Stack -- LIFO(Last In First Out) or FILO(First In Last Out).
let stack = {
  data: [],
  add: function(element) {
    this.data.push(element);
  },
  remove: function() {
    this.data.pop();
  }
}

stack.add(1);           // add element  === [1]
stack.add(2);           // add element to the end === [1, 2]
stack.add(3);           // add element to the end === [1, 2, 3]
stack.add(4);           // add element to the end === [1, 2, 3, 4]
console.log(stack.data);
stack.remove();         // remove element from the end === [1, 2, 3]
stack.remove();         // remove element from the end === [1, 2]
console.log(stack.data);

