class Role {
    constructor(options) {
        this.role = options.role;
        this.permissions = options.permissions;
    }
    show() {
        const str = `是一个${this.role}, 权限：${this.permissions.join(', ')}`;
        console.log(str);
    }
}

class SampleFactory {
    constructor(role) {
        if(typeof this[role] !== 'function') {
            throw new Error('参数只能为 admin 或 developer');
        }
        return this[role]();
    }

    admin() {
        return new Role({
            role: '管理员',
            permissions: ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论']
        });
    }
    developer() {
        return new Role({
            role: '开发者',
            permissions: ['开发', '推送', '提问', '评论']
        });
    }
}


// 实例
const xm = new SampleFactory('admin');
xm.show();

const xh = new SampleFactory('developer');
xh.show();

const xl = new SampleFactory('guest');
xl.show();