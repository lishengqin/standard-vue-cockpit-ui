export const getListeners = (attrs) => {
  const listeners = {}
  for (let key in attrs) {
    if (key.indexOf("on") === 0) {
      listeners[key] = attrs[key]
    }
  }
  return listeners
}