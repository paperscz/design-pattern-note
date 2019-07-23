// 工厂模式方法
class RepoBase { // 抽象类
    constructor(permissions) {
      console.log('new.target', new.target)
        if (new.target === RepoBase) {
            throw new Error('抽象类不能实例');
        }
        this.permissions = permissions;
    }
}

class Repo extends RepoBase { // 子类
    constructor(permissions) {
        super(permissions);
    }

    create(role) {
        switch (role) {
            case 'owner':
                return new Repo(['set', 'del', 'move', 'manage', 'create', 'develop', 'commit', 'push', 'clone', 'issue', 'comment']);
                break;
            case 'developer':
                return new Repo(['develop', 'commit', 'push', 'clone', 'issue', 'comment']);
                break;
            case 'guest':
                return new Repo(['issue', 'comment']);
                break;
            default:
                throw new Error('参数错误，可选参数：owner、developer、guest');
        }
    }

    showPermissions() {
        const value = this.permissions.join(', ');
        console.log(`\n 角色 ${this.permissions}       \n => ${value}`);
    }
}

let repoBase = new RepoBase(); // 此行会报错，注释后方可正常执行后面
let repo = new Repo();

let owner = repo.create('owner');
owner.showPermissions();

let developer = repo.create('developer');
developer.showPermissions();

let guest = repo.create('guest');
guest.showPermissions();
