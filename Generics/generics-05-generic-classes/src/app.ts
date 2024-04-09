class DataStorage<T extends string | number | boolean>{
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Stan');
textStorage.addItem('John');
textStorage.removeItem('Stan');
console.log(textStorage.getItems());