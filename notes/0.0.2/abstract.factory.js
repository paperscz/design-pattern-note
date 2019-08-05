// 抽象工厂
function AbstractFactory(subType, superType) {
    if (typeof AbstractFactory[superType] === 'function') {
        //缓存类
        function F() { }
        //继承父类属性和方法
        F.prototype = new AbstractFactory[superType]();
        //将子类 constructor 指向子类（自己）
        subType.prototype.constructor = subType;
        //子类原型继承缓存类（父类）
        subType.prototype = new F();
    } else {
        //不存在该抽象类抛出错误
        throw new Error('抽象类不存在')
    }
}

// 抽象类
AbstractFactory.Phone = function () {
    this.type = 'Phone';
}
AbstractFactory.Phone.prototype = {
    showType: function () {
        return new Error('Phone 抽象方法 showType 不能调用');
    },
    showPrice: function () {
        return new Error('Phone 抽象方法 showPrice 不能调用');
    },
    showColor: function () {
        return new Error('Phone 抽象方法 showColor 不能调用');
    }
}

// 抽象类
AbstractFactory.Pad = function () {
    this.type = 'Pad';
}
AbstractFactory.Pad.prototype = {
    showType: function () {
        return new Error('Pad 抽象方法 showType 不能调用');
    },
    showPrice: function () {
        return new Error('Pad 抽象方法 showPrice 不能调用');
    },
    showColor: function () {
        return new Error('Pad 抽象方法 showColor 不能调用');
    }
}

// 抽象工厂实现对抽象类的继承
function Iphone(type, price, color) {
    this.type = type;
    this.price = price;
    this.color = color;
}

//抽象工厂实现对 Phone 抽象类的继承
AbstractFactory(Iphone, 'Phone');
Iphone.prototype.showType = function () {
    return this.type;
}
Iphone.prototype.showPrice = function () {
    return this.price;
}
Iphone.prototype.showColor = function () {
    return this.color;
}

// 抽象工厂实现对抽象类的继承
function Ipad(type, price, color) {
    this.type = type;
    this.price = price;
    this.color = color;
}

AbstractFactory(Ipad, 'Pad');
Ipad.prototype.showType = function () {
    return this.type;
}
Ipad.prototype.showPrice = function () {
    return this.price;
}
Ipad.prototype.showColor = function () {
    return this.color;
}

// 实例
var iphone5s = new Iphone('iphone 5s', 3000, '白色');
console.log('今天刚买了' + iphone5s.showType() + '，价格是' + iphone5s.showPrice() + '，' + iphone5s.showColor())

var iphone8s = new Iphone('iphone 8s', 8000, '白色');
console.log('今天刚买了' + iphone8s.showType() + '，价格是' + iphone8s.showPrice() + '，' + iphone8s.showColor())

var ipad = new Ipad('ipad air', 2000, '骚红色');
console.log('今天刚买了' + ipad.showType() + '，价格是' + ipad.showPrice() + '，' + ipad.showColor())
