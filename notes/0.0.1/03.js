class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        console.log(`名字: ${this.name}`)
    }
    getAge() {
        console.log(`年龄: ${this.age}`)
    }
}

class A extends People {
    constructor(name) {
        super(name)
    }
    getName() {
        console.log(`A名字: ${this.name}`)
    }
}

class B extends People {
    constructor(name) {
        super(name)
    }
    getName() {
        console.log(`B名字: ${this.name}`)
    }
}

// 创建实例
const p1 = new People('p1')
p1.getName();

const a1 = new A('a1')
a1.getName();

// 创建实例
const b1 = new B('b1')
b1.getName();