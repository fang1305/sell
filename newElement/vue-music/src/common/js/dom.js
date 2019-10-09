export function addClass(el,className) {
    if(hasClass(el,className)){
        // 有这个className
        return 
    }
    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
}

export function hasClass(el,className) {
    // className开头或者空白字符在前,className后边可以跟一个空白字符或者结束
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
}
export function getData(params) {
    
}