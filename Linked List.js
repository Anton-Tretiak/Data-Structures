class LinkedListNode {            // Класс который создает ноду котрая содержит в себе знаение и ссылку на следующую ноду
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString () {
    return `${this.value}`;
  }
}
class LinkedList {                // Класс который создает сам связный список
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {               
    const newNode = new LinkedListNode(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && this.head.value === value) {
      deletedNode = this.head;

      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }
        else {
          currentNode = currentNode.next;
        }
      }
    }
     if (this.tail?.value === value) {
      this.tail = currentNode;
     }

     return deletedNode;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes
  }
  toString() {
    return this.toArray().map(node => node.toString()).toString();
  }
}

const list = new LinkedList();
list.append('a').append('b').append('c');   // Добавляет новуую ноду в конец списка

console.log(list);
console.log(list.toArray());                // Переводит список в массив
console.log(list.toString());               // Переводит элементы ноды в строку

list.prepend('r').prepend('k');             // Добавление новой лист ноды в начало списка

console.log(list.find('b'));                // Поиск элемента в лист ноде
list.delete('c');                           // Удаление ноды со списка со значением внутри метода
console.log(list);