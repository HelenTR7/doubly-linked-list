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
    }

    insertAt(index, data) {}

    isEmpty() {
      return this._head ===null;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
