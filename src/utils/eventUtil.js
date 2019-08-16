export const addEvent = function (elem, type, eventHandler) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.addEventListener) {
        elem.addEventListener(type, eventHandler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent(`on${type}`, eventHandler);
    } else {
        elem[`on${type}`] = eventHandler;
    }
};

export const removeEvent = function (elem, type, eventHandler) {
    if (elem === null || typeof elem === 'undefined') {
        return;
    }
    if (elem.removeEventListener) {
        elem.removeEventListener(type, eventHandler, false);
    } else if (elem.detachEvent) {
        elem.detachEvent(`on${type}`, eventHandler);
    } else {
        elem[`on${type}`] = null;
    }
};