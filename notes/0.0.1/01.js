// 类，即模板
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

// 创建实例
const zhang = new People('张三', 27);
zhang.getName();
zhang.getAge();

// 创建实例
const li = new People('李四', 22);
li.getName();
li.getAge();

// 子类继承父类
class Student extends People {
    constructor(name, age, id) {
        super(name, age)
        this.id = id
    }
    getId() {
        console.log(`${this.name}，年龄 ${this.age}，学号 ${this.id}`)
    }
}

// 创建实例
const wang = new Student('王五', 22, '001')
wang.getId();
