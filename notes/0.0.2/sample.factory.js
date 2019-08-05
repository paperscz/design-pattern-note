class SampleFactory {
    constructor(opt) {
        this.role = opt.role;
        this.permissions = opt.permissions;
    }

    // 静态方法
    static create(role) {
        switch (role) {
            case 'admin':
                return new SampleFactory({
                    role: '管理员',
                    permissions: ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论']
                });
                break;
            case 'developer':
                return new SampleFactory({
                    role: '开发者',
                    permissions: ['开发', '推送', '提问', '评论']
                });
                break;
            default:
                throw new Error('参数只能为 admin 或 developer');
        }
    }

    show() {
        const str = `是一个${this.role}, 权限：${this.permissions.join(', ')}`;
        console.log(str);
    }

}

// 实例
const xm = SampleFactory.create('admin');
xm.show();

const xh = SampleFactory.create('developer');
xh.show();

const xl = SampleFactory.create('guest');
xl.show();