class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new LinkedList(5);
let tail = head;

const arr = [1, 2, 4, 6, 7, 8, 9];

arr.forEach((val) => {
  const newItem = new LinkedList(val);
  tail.next = newItem;
  tail = newItem;
});

const printList = (start) => {
  console.log(start.value);
  if (start.next != null) printList(start.next);
};

printList(head);
