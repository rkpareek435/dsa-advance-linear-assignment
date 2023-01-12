// Q 1 Delete the elements in an linked list whose sum is equal to zero
 
// A Linked List Node
class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}
 
// Function to create Node
function getNode(data){
    let temp = new ListNode(data)
    temp.next = null
    return temp
}
 
// Function to print the Linked List
function printList(head){
    while (head.next){
        document.write(head.val,' -> ')
        head = head.next
    }
    document.write(head.val,'')
}
 
// Function that removes continuous nodes
// whose sum is K
function removeZeroSum(head, K){
 
    // Root node initialise to 0
    let root = new ListNode(0)
 
    // Append at the front of the given
    // Linked List
    root.next = head
 
    // Map to store the sum and reference
    // of the Node
    let umap = new Map();
 
    umap.set(0,root)
 
    // To store the sum while traversing
    let sum = 0
 
    // Traversing the Linked List
    while (head != null){
 
        // Find sum
        sum += head.val
 
        // If found value with (sum - K)
        if (umap.has(sum - K) == true){
 
            let prev = umap.get(sum - K)
            let start = prev
 
            // Delete all the node
            // traverse till current node
            let aux = sum
 
            // Update sum
            sum = sum - K
 
            // Traverse till current head
            while (prev != head){
                prev = prev.next
                aux += prev.val
                if (prev != head)
                    umap.delete(aux)
            }
 
            // Update the start value to
            // the next value of current head
            start.next = head.next
        }
 
        // If (sum - K) value not found
        else
            umap.set(sum,head)
 
        head = head.next
    }
 
    // Return the value of updated
    // head node
    return root.next
}
 
 
// Driver Code
 
// Create Linked List
let head = getNode(1)
head.next = getNode(2)
head.next.next = getNode(-3)
head.next.next.next = getNode(3)
head.next.next.next.next = getNode(1)
 
// Given sum K
let K = 5
 
// Function call to get head node
// of the updated Linked List
head = removeZeroSum(head, K)
 
// Print the updated Linked List
if(head != null)
    printList(head)

//-----------------------------------------------------------------------------------------------



//Q. 2  Reverse a linked list in groups of given size
// linked list in groups of
// given size
var head; // head of list
  
    /* Linked list Node */
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }
  
    function reverse(head , k) {
        if (head == null)
            return null;
        var current = head;
        var next = null;
        var prev = null;
  
        var count = 0;
  
        /* Reverse first k nodes of linked list */
        while (count < k && current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if (next != null)
            head.next = reverse(next, k);
  
        // prev is now head of input list
        return prev;
    }
  
    /* Utility functions */
  
    /* Inserts a new Node at front of the list. */
    function push(new_data) {
        /*
         1 & 2: Allocate the Node & Put in the data
         */
        new_node = new Node(new_data);
  
        /* 3. Make next of new Node as head */
        new_node.next = head;
  
        /* 4. Move the head to point to new Node */
        head = new_node;
    }
  
    /* Function to print linked list */
    function printList() {
        temp = head;
        while (temp != null) {
            document.write(temp.data + " ");
            temp = temp.next;
        }
        document.write("<br/>");
    }
  
      
          
        
        push(9);
        push(8);
        push(7);
        push(6);
        push(5);
        push(4);
        push(3);
        push(2);
        push(1);
  
        document.write("Given Linked List<br/>");
        printList();
  
        head = reverse(head, 3);
  
        document.write("Reversed list<br/>");
        printList();

/*/---------------------------------------------------------------------------------------------

        // Q3- Merge a linked list into another linked list at alternate positions. 
// alternate positions 
  
// A nexted list node 
class Node 
{ 
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}; 
  
/* Function to insert a node at the beginning */
function push(head_ref, new_data) 
{ 
    var new_node = new Node();
    new_node.data = new_data; 
    new_node.next = (head_ref); 
    (head_ref) = new_node;
    return head_ref;
  
} 
  
/* Utility function to print a singly linked list */
function printList(head) 
{ 
    var temp = head; 
    while (temp != null) 
    { 
        document.write( temp.data + " "); 
        temp = temp.next; 
    } 
    document.write("<br>");
} 
  
// Main function that inserts nodes of linked list q into p at 
// alternate positions. Since head of first list never changes 
// and head of second list may change, we need single pointer 
// for first list and double pointer for second list. 
function merge(p, q) 
{ 
    var p_curr = p, q_curr = q; 
    var p_next, q_next; 
  
    // While there are available positions in p 
    while (p_curr != null &&  q_curr != null) 
    { 
        // Save next pointers 
        p_next = p_curr.next; 
        q_next = q_curr.next; 
  
        // Make q_curr as next of p_curr 
        q_curr.next = p_next; // Change next pointer of q_curr 
        p_curr.next = q_curr; // Change next pointer of p_curr 
  
        // Update current pointers for next iteration 
        p_curr = p_next; 
        q_curr = q_next; 
    } 
  
    q = q_curr; // Update head pointer of second list 
    return q;
} 
  
// Driver code 
var p = null, q = null; 
p = push(p, 3); 
p = push(p, 2); 
p = push(p, 1); 
document.write( "First Linked List:<br>"); 
printList(p); 
q = push(q, 8); 
q = push(q, 7); 
q = push(q, 6); 
q = push(q, 5); 
q = push(q, 4); 
document.write( "Second Linked List:<br>"); 
printList(q); 
q = merge(p, q); 
document.write( "Modified First Linked List:<br>"); 
printList(p); 
document.write( "Modified Second Linked List:<br>"); 
printList(q); 

// ---------------------------------------------------------------------------------

// Q4 - In an array, Count Pairs with given sum
// pairs with given sum.
  
// Returns number of pairs in arr[0..n-1] with sum equal
// to 'sum'
function getPairsCount(arr, n, sum)
{
    let count = 0; // Initialize result
  
    // Consider all possible pairs and check their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
  
    return count;
}
  
// Driver function to test the above function
    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    document.write("Count of pairs is "
        + getPairsCount(arr, n, sum));

//---------------------------------------------------------------------------------------------
        //Q5 Find duplicates in an array
    // duplicates in O(n) time
    let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
    let arr_size = numRay.length;
    
    
    // count the frequency
    for (let i = 0; i < arr_size; i++) {
        numRay[numRay[i] % arr_size]
            = numRay[numRay[i] % arr_size] + arr_size;
    }
    document.write("The repeating elements are : " + "</br>");
    for (let i = 0; i < arr_size; i++) {
        if (numRay[i] >= arr_size * 2) {
            document.write(i + " " + "</br>");
        }
    }
//------------------------------------------------------------------------------------------------

    // Q. 6 Find the Kth largest and Kth smallest number in an array
 
// Function to return K'th smallest element in a given array
function kthSmallest(arr, N, K)
{
    // Sort the given array
    arr.sort((a,b) => a-b);
 
    // Return k'th element in the sorted array
    return arr[K - 1];
}
 
// Driver program to test above methods
    let arr = [12, 3, 5, 7, 19];
    let N = arr.length, K = 2;
    document.write("K'th smallest element is " + kthSmallest(arr, N, K));

//-----------------------------------------------------------------------------------------------------------
    // Q 7  Move all the negative elements to one side of the array
 
function move(arr){
    arr.sort();
}
 
// driver code
   
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
    document.write(e , " ");
//---------------------------------------------------------------------------------------------------------


    // Q 8 Reverse a string using a stack data structure
// String using Stack
 
// stack
class Stack
{
    size;
    top;
    a = [];
  
    // Function to check if stack is empty
    isEmpty()
    {
        return(this.top < 0);
    }
     
    constructor(n)
    {
        this.top = -1;
        this.size = n;
        this.a = new Array(this.size);
    }
  
    // Function to push element in Stack
    push(x)
    {
        if (this.top >= this.size)
        {
            document.write("Stack Overflow<br>");
            return false;
        }
        else
        {
            this.a[++this.top] = x;
            return true;
        }
    }
  
    // Function to pop element from stack
    pop()
    {
        if (this.top < 0)
        {
            document.write("Stack Underflow<br>");
            return 0;
        }
        else
        {
            let x = this.a[this.top--];
            return x;
        }
    }
}
 
// Function to reverse the string
function reverse(str)
{
     
    // Create a stack of capacity
    // equal to length of string
    let n = str.length;
    let obj = new Stack(n);
      
    // Push all characters of string
    // to stack
    let i;
    for(i = 0; i < n; i++)
        obj.push(str[i]);
  
    // Pop all characters of string
    // and put them back to str
    for(i = 0; i < n; i++)
    {
        let ch = obj.pop();
        str[i] = ch;
    }
}
 
// Driver Code
let s = "GeeksQuiz".split("");
 
// Call reverse method
reverse(s);
 
// Print the reversed string
document.write("Reversed string is " +
               s.join(""));


//-------------------------------------------------------------------------------------------------
// Q 9 Evaluate a postfix expression using stack
 
// Method to evaluate value of a postfix expression
function evaluatePostfix(exp)
{
    //create a stack
        let stack=[];
          
        // Scan all characters one by one
        for(let i=0;i<exp.length;i++)
        {
            let c=exp[i];
              
            // If the scanned character is an operand (number here),
            // push it to the stack.
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
            //  If the scanned character is an operator, pop two
            // elements from stack apply the operator
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
        return stack.pop();  
}
 
// Driver program to test above functions
let exp="231*+9-";
document.write("postfix evaluation: "+evaluatePostfix(exp));
//--------------------------------------------------------------------------------------------------------
// Q   10  Implement a queue using the stack data structure
// two stacks with costly enQueue()  
class Queue{
      
    constructor()
    {
        this.s1 = [];
        this.s2 = [];
    }
      
    enQueue(x)
    {
          
        // Move all elements from s1 to s2 
        while (this.s1.length != 0)
        { 
            this.s2.push(this.s1.pop()); 
            //s1.pop(); 
        } 
      
        // Push item into s1 
        this.s1.push(x); 
      
        // Push everything back to s1 
        while (this.s2.length != 0) 
        { 
            this.s1.push(this.s2.pop()); 
            //s2.pop(); 
        } 
    }
      
    // Dequeue an item from the queue  
    deQueue() 
    {
          
        // If first stack is empty 
        if (this.s1.length == 0) 
        { 
            document.write("Q is Empty"); 
        } 
      
        // Return top of s1 
        let x = this.s1[this.s1.length - 1]; 
        this.s1.pop(); 
        return x; 
    }
    }
      
    // Driver code
    let q = new Queue(); 
    q.enQueue(1); 
    q.enQueue(2); 
    q.enQueue(3); 
      
    document.write(q.deQueue() + "<br>"); 
    document.write(q.deQueue() + "<br>");
    document.write(q.deQueue() + "<br>");
               