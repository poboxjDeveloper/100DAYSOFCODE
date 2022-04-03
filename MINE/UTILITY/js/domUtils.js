export function addGlobalEventListener(type, selector, callback, options, parent) {
    if (parent === void 0) { parent = document; }
    parent.addEventListener(type, function (e) {
        if (e.target.matches(selector)) {
            callback(e);
        }
    }, options);
}
export function qs(selector, parent) {
    if (parent === void 0) { parent = document; }
    return parent.querySelector(selector);
}
export function qsa(selector, parent) {
    if (parent === void 0) { parent = document; }
    var elements = parent.querySelectorAll(selector);
    return Array.from(elements);
}
export function create() {
    console.log("create a new element, should be created...");
}
