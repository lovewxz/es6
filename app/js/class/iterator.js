//各种es6的iterator接口
{
  let arr = [1, 2, 3, 4, 5, 6, 7]
  let a = new Set(arr)
  for (let [key, value] of arr.entries()) {
    console.log(`${key}-${value}`)
  }
}

{
  let obj = [
    ['key', 123],
    [123, '456']
  ]
  let map = new Map(obj)
  for (let [key, value] of map.entries()) {
    console.log(`${key}-${value}`)
  }
}

{
  let arr = [8, 53, 2, 1]
  for (let [key, value] of Array.entries(arr)) {
    console.log(`${key}-${value}`)
  }
}

{
  let obj = [{
      'title': '我是标题',
      'name': '我是名字'
    },
    {
      'title': '我是标题2',
      'name': '我是名字2'
    },
    {
      'title': '我是标题3',
      'name': '我是名字3'
    }
  ]
  for (let [key, value] of Object.entries(obj)) {
    for (let [k2, v2] of Object.entries(value)) {
      console.log(`${k2}-${v2}`)
    }
  }
}
