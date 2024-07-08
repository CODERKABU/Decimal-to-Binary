class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    displayReverse() {
        let result = '';
        function reverse(node) {
            if (node === null) {
                return;
            }
            reverse(node.next);
            result += node.data;
        }
        reverse(this.head);
        return result;
    }
}

function decimalToBinary(decimal, list) {
    if (decimal === 0) {
        return;
    }
    decimalToBinary(Math.floor(decimal / 2), list);
    list.append(decimal % 2);
}

function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const decimalNumber = parseInt(decimalInput);
    if (isNaN(decimalNumber)) {
        document.getElementById('result').innerText = 'Please enter a valid number';
        return;
    }
    const list = new LinkedList();
    decimalToBinary(decimalNumber, list);
    const binaryNumber = list.displayReverse();
    document.getElementById('result').innerText = `Binary: ${binaryNumber}`;
}
