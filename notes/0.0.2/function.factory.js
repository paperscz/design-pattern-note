class FunctionFactoryBase { // 抽象类
    constructor(role) {
        if (new.target === FunctionFactoryBase) {
            throw new Error('抽象类不能实例');
        }
        this.role = role;
    }
}

class FunctionFactory extends FunctionFactoryBase { // 子类
    constructor(role) {
        super(role);
    }

    static create(role) {
        switch (role) {
            case 'admin':
                return new FunctionFactory({
                    role: '管理员',
                    permissions: ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论']
                });
                break;
            case 'developer':
                return new FunctionFactory({
                    role: '开发者',
                    permissions: ['开发', '推送', '提问', '评论']
                });
                break;
            default:
                throw new Error('参数只能为 admin 或 developer');
        }
    }

    show() {
        const { role, permissions } = this.role;
        const str = `是一个${role}, 权限：${permissions.join(', ')}`;
        console.log(str)
    }
}

// let xl = new FunctionFactoryBase(); // 此行会报错，注释后方可正常执行后面

let xm = FunctionFactory.create('admin');
xm.show()

let xh = FunctionFactory.create('developer');
xh.show()

let xl = FunctionFactory.create('guest');
xl.show()

