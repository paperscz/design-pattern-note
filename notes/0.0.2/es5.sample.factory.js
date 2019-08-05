function Role(options){
    this.role = options.role;
    this.permissions = options.permissions;
}
Role.prototype.show = function (){
    var str = '是一个' + this.role + ', 权限：' + this.permissions.join(', ');
    console.log(str)
}

function sampleFactory(role){
    switch(role) {
        case 'admin':
            return new Role({ 
                role: '管理员', 
                permissions: ['设置', '删除', '新增', '创建', '开发', '推送', '提问', '评论']
            });
            break;
        case 'developer':
            return new Role({ 
                role: '开发者', 
                permissions: ['开发', '推送', '提问', '评论']
            });
            break;
        default:
            throw new Error('参数只能为 admin 或 developer');
    }
}

// 实例
const xm = sampleFactory('admin');
xm.show();

const xh = sampleFactory('developer');
xh.show();

const xl = sampleFactory('guest');
xl.show();