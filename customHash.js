class CustomHashMap {
  constructor(initialCapacity = 9) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
    this.SIZE_RATIO = 3;
    this.MAX_LOAD_RATIO = 0.5;
  }

  get(key) {
    key = key.split('').sort().join('')
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value) {
    key = key.split('').sort().join('')
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > this.MAX_LOAD_RATIO) {
      this._resize(this._capacity * this.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);
    if (!this._hashTable[index]) {
      this.length++;
      this._hashTable[index] = [];
    }
    this._hashTable[index] = [...this._hashTable[index], {
      key,
      value,
      DELETED: false
    }];
  }

  delete(key) {
    key = key.split('').sort().join('')
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    key = key.split('').sort().join('')
    const hash = CustomHashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < (start + this._capacity); i++) {
      const index = i % this._capacity;

      const slot = this._hashTable[index];
      if (slot === undefined || (slot[0].key === key && !slot[0].DELETED)) {
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    const sum=string.length+string.split('').map(letter=>letter.charCodeAt(0)).reduce((a,b)=>a+b);
    return sum
    // let hash = 5381;
    // for (let i = 0; i < string.length; i++) {
    //   hash = (hash << 5) + hash + string.charCodeAt(i);
    //   hash = hash & hash;
    // }
    // console.log(hash >>> 0);
    // return hash >>> 0;
  }
}

module.exports = CustomHashMap;