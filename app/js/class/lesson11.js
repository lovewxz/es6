{
  let obj = {
    time: '2017-03-02',
    name: 'li lei',
    _r: 'private'
  }

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象属性的修改
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value
      } else {
        return target[key]
      }
    },
    //拦截key in object操作
    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key]
        return true
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  })

  console.info('get', monitor.time)
  monitor.name = 'han meimei'
  monitor.time = '2011-03-02'
  console.info('set', monitor)

  console.info('has', 'name' in monitor, 'time' in monitor)
  console.info('ownKeys', Object.keys(monitor))

  console.info('delete', delete monitor._r, monitor)
  console.info('delete2', delete monitor.name, monitor)
}

{
  let obj = {
    time: '2017-03-02',
    name: 'li lei',
    _r: 'private'
  }
  console.log('get', Reflect.get(obj, 'time'))
  console.log('set', Reflect.set(obj, 'time', '1'), obj.time)
  console.log('has', Reflect.has(obj, 'name'))
}

{
  /**
   * 对数据进行代理验证
   * @param  {[object]} target   [传入的对象]
   * @param  {[function]} validate [验证的方法]
   *
   */
  function validator(target, validate) {
    return new Proxy(target, {
      _validate: validate,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validate[key]
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}为${value}`)
          }
        } else {
          throw Error(`${key} 不存在`)
        }
      }
    })
  }
  const personValidator = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
      return validator(this, personValidator)
    }
  }
  const person = new Person('lilei', 31)
  console.info('person', person)
  person.name = 48
  console.info('person', person)
}
