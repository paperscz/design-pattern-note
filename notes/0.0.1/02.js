class People {
    public name
    age
    protected weight // 受保护属性，只有自己或子类可用

    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
    }
    getName() {
        console.log(`名字: ${this.name}`)
    }
    getAge() {
        console.log(`年龄: ${this.age}`)
    }
}

// 继承
class Student extends People {
    id
    private girlFriend
    constructor(name, age, id) {
        super(name, age)
        this.id = id
        this.girlFriend = '赵雪'
    }
    getId() {
        console.log(`${this.name}，年龄 ${this.age}，学号 ${this.id}`)
    }
    getWeight() {
        console.log(`${this.weight}`)
    }
}

const xm = new Student('小明', 24, '002');
xm.getWeight();
// console.log(xm.girlFriend)