class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const deletedItem = this.items[this.count];
        console.log(`${deletedItem} removed`);
        return deletedItem;
    }

    // Check top element in stack
    peek() {
        if (this.count === 0) {
            return undefined;
        }
        console.log(`Top element is ${this.items[this.count]}`);
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    print() {
        if (this.count === 0) {
            return 'stack is empty';
        }
        let str = '';
        for (let index = 0; index < this.count; index++) {
            str += this.items[index] + ' ';
        }
        return str;
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.print());
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.peek();
console.log(stack.print());
stack.pop();
stack.peek();
console.log(stack.print());
console.log(stack.isEmpty());