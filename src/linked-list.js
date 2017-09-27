const Node = require('./node');

class LinkedList {
    constructor(length=0, head=null,tail=null) {
        this.length=length;//извлекает кол-во узлов в списке
        this.head=head;//назначает узел в качестве головного эл-та списка
        this.tail=tail;//назначает узел в качестве конечного элемента списка
    }


    append(data) {//add(value)добавляет узел в список
      var node = new Node(data);

      if(this.length){
        this.tail.next=node;
        node.prev=this.tail;
        this.tail=node;
      }else{
        this.head=node;
        this.tail=node;
      }
      this.length++;
      return node;
    }
    head() {}

    tail() {}

     at(index) {//searchNodeAt(position)ищет узел на n-ой позиции в списке
    var currentNode = this.head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1-ый случай: неверная позиция 
      if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
      }

    // 2-ой случай: верная позиция 
      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
