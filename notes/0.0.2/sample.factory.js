class Repo {
    constructor(permissions) {
        this.permissions = permissions;
    }

    static create(role) {
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

let owner = Repo.create('owner');
owner.showPermissions();

let developer = Repo.create('developer');
developer.showPermissions();

let guest = Repo.create('guest');
guest.showPermissions();
