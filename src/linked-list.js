const Node = require('./node');

class LinkedList {
    constructor(length=0, head=null,tail=null) {
        this.length=length;//извлекает кол-во узлов в списке
        this._head=head;//назначает узел в качестве головного эл-та списка
        this._tail=tail;//назначает узел в качестве конечного элемента списка
    }

     append(data) {//добавляет узел в список
      var node = new Node(data);//берем значение помещенное

      if(this.length){
        this._tail.next=node;
        node.prev=this._tail;
        this._tail=node;
      }else{
        this._head=node;
        this._tail=node;
      }
      this.length++;
      return node;
    }
    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        var currentNode = this._head;
        var count=0;        
        while(count<index)
        { 
          currentNode = currentNode.next;
          count++;
        }
        return currentNode.data;
                  

    }

    insertAt(index, data) {}

    isEmpty() {
      return this._head ===null;
    }

    clear() {}

    deleteAt(index) {
     var currentNode = this._head;//this.head
        var length = this.length;//this._length
        var count = 1;
        var message = {failure: 'Failure: non-existent node in this list.'};
        var beforeNodeToDelete = null;
        var afterNodeToDelete=null;
        var nodeToDelete = null;
        var deletedNode = null;
    // 1-ый случай: неверная позиция
    if (length === 0 || index < 1 || index > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (index === 1) {
        this._head = currentNode.next;

        // 2-ой случай: существует второй узел
        if (!this._head) {//this.head
            this._head.prev = null;//this.head
        // 2-ой случай: второго узла не существует
        } else {
            this._tail = null;//this.tail
        }

    // 3-ий случай: последний узел удален
    } else if (index === this.length) {
        this._tail = this.tail.previous;
        this._tail.next = null;
    // 4-ый случай: средний узел удален
    } else { 
        while (count < index) { 
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.prev;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;
        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.prev = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this._length--;

    return message.success;


    }

    reverse() {}

    indexOf(data) {
        var currentNode = this._head;
        var count=0;
        var i;
        var index_mb=this.length;  
        while(count<index_mb)
        { 
          if(currentNode.data==data){i=count;}
          currentNode = currentNode.next;
          count++;
        }
        if(i==undefined){i=-1;}
        return i;
          
    }
}

module.exports = LinkedList;
