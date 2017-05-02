{
  let arr = ['hello', 'world']
  let map = arr[Symbol.iterator]()
  console.log(map.next()) //{value:'hello',done:false}
  console.log(map.next()) //{value:'world',done:false}
  console.log(map.next()) //{value:undefined,done:true}
}

{
  //自定义遍历接口
  let obj = {
    start: [1, 2, 3],
    end: [7, 8, 9],
    [Symbol.iterator]() {
      let self = this
      let index = 0
      let arr = self.start.concat(self.end)
      let len = arr.length
      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            }
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  }
  for (let key of obj) {
    console.log(key)
  }
}

{
  let arr = ['hello', 'world'];
  for (let value of arr) {
    console.log('value', value);
  }
}
