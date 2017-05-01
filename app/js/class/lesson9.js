{
  //symbol类型是唯一的。永远不会相等
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2)
  //symbol.for，当变量在全局未定义时，生成一个唯一的symbol值，
  //当变量在全局定义是，取的这个key的值
  let a3 = Symbol.for('a3')
  let a4 = Symbol.for('a3')
  console.log(a3 === a4)
}


{
  //symbol为唯一，所以跟key值为abc的并不冲突
  let a1 = Symbol.for('abc');
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  };
  console.log('obj', obj);
  //无论用forin或者forof都无法遍历出symbol属性的值
  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value);
  }
  //获取sybmol类型的api
  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.log(obj[item]);
  })
  //遍历带有symbol类型的obj
  Reflect.ownKeys(obj).forEach(function(item) {
    console.log('ownkeys', item, obj[item]);
  })

}
