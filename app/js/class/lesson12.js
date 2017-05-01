{
  // 基本定义和生成实例
  class Person {
    constructor(name = 'moren') {
      this.name = name
    }
  }
  const person = new Person('xiugai')
  console.log('构造函数和实例', person);
}

{
  //继承
  class Person {
    constructor(name = 'moren') {
      this.name = name
    }
  }
  class Child extends Person {}
  console.log('继承', new Child())
}

{
  //继承传递参数
  class Person {
    constructor(name = 'moren') {
      this.name = name
    }
  }
  class Child extends Person {
    constructor(name = 'child') {
      super(name)
      this.type = 'type' //如果子类要自己增加属性，一定要放在super之后
    }
  }
  console.log('继承传递参数', new Child())
}


{
  //getter,setter
  class Person {
    constructor(name) {
      this.name = name
    }
    get longName() {
      return 'prefix' + this.name
    }
    set longName(value) {
      this.name = value
    }
  }
  // get,set是属性！！并不是方法
  let v = new Person('test')
  console.info('get', v.longName) //prefixtest
  v.longName = 'set'
  console.info('set', v.longName) //prefixset
}

{
  //静态属性和静态方法
  class Person {
    constructor(name = 'moren') {
      this.name = name
    }
    static tell() {
      console.log('tell')
    }
  }
  Person.tell()
  Person.type = 'type'
  console.log('静态属性', Person.type)
}
