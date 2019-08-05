class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = slice.call(document.querySelectorAll(selector));
        let len = dom ? dom.length : 0;
        for (let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len
        this.selector = selector || ''
    }
    addClass(name) {
        console.log(name)
    }
    html(data) {

    }
    // 省略多个 API
}

// 工厂模式
window.$ = function (selector) {
    return new jQuery(selector);
}

// 实例
const $li = $('li')
$li.addClass('item');