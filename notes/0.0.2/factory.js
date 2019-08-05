class Creator {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log(this.name)
    }
    fn1() {
        console.log('fn1')
    }
    fn2() {
        console.log('fn2')
    }
}

class Factory {
    create(name) {
        return new Creator(name)
    }
}

// 测试
let factory = new Factory();
let f1 = factory.create('f1');
f1.init()
f1.fn1()

console.log('---分割线---')
let f2 = factory.create('f2');
f2.init()
f2.fn1()