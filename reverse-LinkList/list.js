class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0; 
    } 
    //Insert head aka first node 
    insertHead(data) {
      this.head = new Node(data, this.head);
      this.size++
    } 
    //Pretty print of data 
    printData() {
      let current = this.head;
      
      while(current) {
        console.log(current.data);
        current = current.next; 
      } 
    }
    printreverse(){
       
        let prev=null;
        let current=this.head;
        let nextnode=this.head;
        while(nextnode!=null){
          nextnode=nextnode.next;
          current.next=prev;
          prev=current;
          current=nextnode;
        }
        this.head=prev;
        
      
    }
} 

  const ll = new LinkedList();
  ll.insertHead(28) ;
  ll.insertHead(12) ;
  ll.insertHead(10) ;
  ll.insertHead(11) ;
  ll.insertHead(23) ;
  ll.insertHead(25) ;
  ll.insertHead(14) ;
  ll.insertHead(16) ;
  
  
  console.log("Link list Before Reverse")
  ll.printData();

  console.log("Link list After Reverse");
  ll.printreverse();
  ll.printData();