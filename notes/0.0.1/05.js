class House {
    constructor(city) {
        this.city = city;
    }
    showCity() {
        console.log(`城市：${this.city}`)
    }
}

class People {
    constructor(name, house) {
        this.name = name
        this.house = house
    }
    getInfo() {
        console.log(`我是${this.name}，有房在【${this.house.city}】`)
    }
}

class Student extends People {
    constructor(name, house) {
        super(name, house)
    }
    getInfo() {
        console.log(`我是${this.name}，一名学生，有房在【${this.house.city}】`)
    }
}

class Engineer extends People {
    constructor(name, house) {
        super(name, house)
    }
    getInfo() {
        console.log(`我是${this.name}，一名工程师，有房在【${this.house.city}】`)
    }
}

// 实例化
const h1 = new House('杭州');
const p1 = new People('张三', h1)
p1.getInfo();

const s1 = new Student('李四', h1)
s1.getInfo();

const e1 = new Engineer('王五', h1)
e1.getInfo();