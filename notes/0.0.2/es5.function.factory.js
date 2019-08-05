function FunctionFactory(role) {
    if(!(['admin', 'developer'].indexOf(role) > -1)){
        throw new Error('参数只能为 admin 或 developer');
    }
    
    // 安全的工厂方法
    if (this instanceof FunctionFactory) {
        return this[role]();
    }
    return new FunctionFactory(role);
}
FunctionFactory.prototype.show = function () {
    var str = '是一个' + this.role + ', 权限：' + this.permissions.join(', ');
    console.log(str)
}
FunctionFactory.prototype.say = function () {
    var str = '是一个' + this.role + ', 权限：' + this.permissions.join(', ');
    console.log(str)
}
FunctionFactory.prototype.admin = function (permissions) {
    this.role = '管理员';
    this.permissions = ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论'];
}
FunctionFactory.prototype.developer = function (permissions) {
    this.role = '开发者';
    this.permissions = ['开发', '推送', '提问', '评论'];
}

var xm = FunctionFactory('admin');
xm.show();

var xh = new FunctionFactory('developer');
xh.show();

var xl = new FunctionFactory('guest');
xl.show();
