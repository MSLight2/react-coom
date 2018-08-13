export default {
  addEventHandler (elem, eventType, handler, useCapture = false) {
    if (!elem) return;
    if (elem.addEventListener) {
      elem.addEventListener(eventType, handler, useCapture);
    } else if (elem.attachEvent) {
      elem.attachEvent(`on${eventType}`, handler);
    } else {
      elem[`on${eventType}`] = handler;
    }
  },
  removeEventHandler (elem, eventType, handler, useCapture = false) {
    if (!elem) return;
    if (elem.addEventListener) {
      elem.removeEventListener(eventType, handler, useCapture);
    } else if (elem.attachEvent) {
      elem.detachEvent(`on${eventType}`, handler);
    } else {
      elem[`on${eventType}`] = null;
    }
  },
  sessionStorage: {
    get (nameStr, isParse = true) {
      let result = sessionStorage.getItem(nameStr)
      if (isParse) {
        return JSON.parse(result)
      } else {
        return result
      }
    },
    set (nameStr, val) {
      if (nameStr && val) {
        if (Object.prototype.toString.call(val) === '[object String]') {
          sessionStorage.setItem(nameStr, val)
        } else {
          sessionStorage.setItem(nameStr, JSON.stringify(val))
        }
      } else {
        sessionStorage.setItem(nameStr, null)
      }
    }
  }
}