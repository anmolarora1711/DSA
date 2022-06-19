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

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    // Insert last node
    insertLast(data) {
        if (this.size === 0) {
            this.head = new Node(data);
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        if (index < 0) {
            return `Index is less than 0`;
        }
        if (index > this.size) {
            return `Index is greater than size of linked list i.e. ${this.size}`;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
        } else {
            let curr = this.head;
            let i = 0;
            while (i < index-1) {
                curr = curr.next;
                i++;
            }
            curr.next = new Node(data, curr.next);
        }
        this.size++;
    }

    // Get at index
    get(index) {
        if (this.size === 0) {
            return `Linked list is empty`;
        }
        if (index < 0) {
            return `Index is less than 0`;
        }
        if (index > this.size) {
            return `Index is greater than size of linked list i.e. ${this.size}`;
        }
        if (index === 0) {
            return this.head.data;
        } else {
            let curr = this.head;
            let i = 0;
            while (i !== index) {
                curr = curr.next;
                i++;
            }
            return curr.data;
        }
    }

    // Remove at index
    remove(index) {
        if (this.size === 0) {
            return `Linked list is empty`;
        }
        if (index < 0) {
            return `Index is less than 0`;
        }
        if (index > this.size) {
            return `Index is greater than size of linked list i.e. ${this.size}`;
        }
        let removedElement;
        if (index === 0) { 
            removedElement = this.head.data;
            this.head = this.head.next;
        } else {
            let curr = this.head;
            let i = 0;
            while (i < index - 1) {
                curr = curr.next;
                i++;
            }
            removedElement = curr.next.data;
            curr.next = curr.next.next;
        }
        this.size--;
        return removedElement;
    }

    // Clear list
    deleteList() {
        this.head = null;
        this.size = 0;
    }

    // Check for empty
    isEmpty() {
        return this.size === 0;
    }

    // Check for size
    length() {
        return this.size;
    }

    // Print list data
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertLast(200);
ll.insertLast(300);
ll.insertFirst(100);
ll.insertAt(400, 1);
// console.log(ll.get(3));
ll.remove(1);
// console.log(ll.length());
ll.insertAt(150, 1);
ll.remove(3);
// ll.printList();
ll.remove(0);
ll.remove(0);
ll.printList();
ll.remove(0);
ll.remove(0);
console.log(ll.get(0));
console.log(ll.isEmpty());