/**
 * 
 * 解析 URL 参数
 * @example ?id=1234&a=b
 * @return Object {id:1234,a:b}
 */

export function urlParse() {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=1234','&a=b']
    if (arr) {
        arr.forEach(() => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj.key = val;
        });
        return obj;
    };
}