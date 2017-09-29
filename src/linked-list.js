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

    deleteAt(index) {}

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
