{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size', list.size); //2
}

{
  //第二种创建方式
  let arr = [1, 2, 3, 4, 5];
  let list = new Set(arr);

  console.log('size', list.size); //5
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list', list); //set{1,2}

  //set不会进行类型的转换
  let arr = [1, 2, 3, 1, '2'];
  let list2 = new Set(arr);

  console.log('unique', list2); //set{1,2,3,"2"}
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  console.log('has', list.has('add')); //是否含有
  console.log('delete', list.delete('add'), list); //删除
  list.clear(); //清空
  console.log('list', list); //set{}
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.log('keys', key); //add,delete,clear,has
  }
  for (let value of list.values()) {
    console.log('value', value); //add,delete,clear,has
  }
  for (let [key, value] of list.entries()) {
    console.log('entries', key, value); //add,add,delete,delete,clear,clear,has,has
  }

  list.forEach(function(item) {
    console.log(item);
  })
}


{
  //没有垃圾回收机制,没有size,clear,遍历属性，
  //接收的值只能是对象
  let weakList = new WeakSet();

  let arg = {};

  weakList.add(arg);

  // weakList.add(2);

  console.log('weakList', weakList);
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456); //['123'] => 456

  console.log('map', map, map.get(arr)); //456
}

{
  let map = new Map([
    ['a', 123],
    ['b', 456]
  ]);
  console.log('map args', map);
  console.log('size', map.size);
  console.log('delete', map.delete('a'), map);
  console.log('clear', map.clear(), map);
}

{
  //同Set与SeakSet
  let weakmap = new WeakMap();

  let o = {};
  weakmap.set(o, 123);
  console.log(weakmap.get(o));
}
