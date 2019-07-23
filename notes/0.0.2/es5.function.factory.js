// 工厂模式方法 es5
function Repo(permissions){
    if(this instanceof Repo){
        return this[permissions](permissions);
    }
    return new Repo();
}
Repo.prototype.owner = function(permissions){
    var permissions = ['set', 'del', 'move', 'manage', 'create', 'develop', 'commit', 'push', 'clone', 'issue', 'comment'];
    var value = permissions.join(', ');
    console.log(`\n 角色 ${permissions}       \n => ${value}`);
}
Repo.prototype.developer = function(permissions){
    var permissions = ['develop', 'commit', 'push', 'clone', 'issue', 'comment'];
    var value = permissions.join(', ');
    console.log(`\n 角色 ${permissions}       \n => ${value}`);
}
Repo.prototype.guest = function(permissions){
    var permissions = ['issue', 'comment'];
    var value = permissions.join(', ');
    console.log(`\n 角色 ${permissions}       \n => ${value}`);
}

var owner = new Repo('owner');
var developer = new Repo('developer');
var guest = new Repo('guest');
