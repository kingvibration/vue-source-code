
/**
 * 循环遍历数据对象的每个属性
 */
function observable(obj) {
  if (!obj || typeof obj !== 'object') {
    return 'object'
  }
  for (const objKey in obj) {
    defineReactive(obj, objKey, obj[objKey])
  }
}

/**
 * 将对象的属性用 Object.defineProperty() 进行设置
 */
function defineReactive(obj, objKey, val) {
  console.log(obj, objKey)
  Object.defineProperty(obj, objKey, {
    get() {
      console.log('get', val)
      return val
    },
    set(newVal) {
      console.log('set', newVal)
      val = newVal
    }
  })
}
