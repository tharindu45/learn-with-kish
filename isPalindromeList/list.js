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
    isPalindrome(n){
     
      let i=0;
       let x=n/2;

       
      let current=this.head;
      while(i<x-1){
        current=current.next
        i++;
      }
      // console.log(current.data);
      let prevnode=current;
      let nextnode=current;
      let currentnode=current;
      while(nextnode!=null){
        nextnode=nextnode.next;
        currentnode.next=prevnode;
        prevnode=currentnode;
        currentnode=nextnode;
      }
     
      let tmp=this.head;
      
       while(tmp!= prevnode){
          if(tmp.data!=prevnode.data)
          {
            console.log("Not palindrome");
          }
          else{
            console.log("Palindrome");
          }
          tmp=tmp.next;
          prevnode=prevnode.next;
       }
      
     
    }
    
} 

  const ll = new LinkedList();
  ll.insertHead("A") ;
  ll.insertHead("B") ;
  ll.insertHead("C") ;
  ll.insertHead("D") ;
  ll.insertHead("C") ;
  ll.insertHead("B") ;
  ll.insertHead("A") ;
  // ll.insertHead("H") ;
  
  
  //console.log("Link list Before Reverse")
  
  let m=ll.size;
  ll.isPalindrome(m);