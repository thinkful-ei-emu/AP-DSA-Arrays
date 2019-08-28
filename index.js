const Memory = require('./Memory')
const memory = new Memory()


class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}
Array.SIZE_RATIO = 3;


function main(){
    Array.SIZE_RATIO = 3

    let arr = new Array()

    arr.push(3)
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr)
}

main()

//2. The length of the array is 1, the capacity is 3, and the address is 0. The length now becomes 6, capacity becomes 12, and pointer address becomes 3. At push(19) the length of the array is >= the capacity, so the resize function is called and the capacity now becomes (3+1)*4 = 12. The pointer then points to a new address where the index is 0.
//3. The length of the array i 3, the capacity is 12, and the address is 3. The pop method takes the value based on the code and descreases the length of the array, then returns the value that was "popped". It will first remove the value of 10, then decrease the length of 1. Then do the same for the last two in the array. The pointer and capacity do not change because the length is still less than the capacity.
//4. 