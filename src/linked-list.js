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
       head() {
        var data=0;
        data=this.head;
        return data;
    }

    tail() {}

     at(index) {
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
