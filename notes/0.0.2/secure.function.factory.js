function Factory(){
    if(!(this instanceof Factory)) {
        return new Factory();
    }
}
Factory.prototype.show = function(){
    console.log('factory show');
}
var f = new Factory();
f.show();