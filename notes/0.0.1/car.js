class Car {
    constructor(num, name) {
        this.num = num
        this.name = name
    }
}

class Kuaiche extends Car {
    constructor(num, name, price) {
        super(num, name)
        this.price = price
    }
}

class Zhuanche extends Car {
    constructor(num, name, price) {
        super(num, name)
        this.price = price
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`行程开始，名称${this.car.name}，车牌号：${this.car.num}`)
    }
    end() {
        console.log(`行程结束，价格：${this.car.price * 5}`)
    }
}

// 实例
let k1 = new Kuaiche('浙A Z1001', '大众', 1);
let t1 = new Trip(k1);
t1.start();
t1.end();

console.log('---------')
let z1 = new Zhuanche('浙A Z0001', '奔驰', 3);
let t2 = new Trip(z1);
t2.start();
t2.end();