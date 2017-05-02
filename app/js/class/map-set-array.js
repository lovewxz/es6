{
  //数据结构横向对比
  let arr = []
  let map = new Map()
  //增
  map.set('t', 1)
  arr.push({
    t: 1
  })
  console.info('map-array', map, arr)
  //查
  let map_exist = map.has('t')
  let arr_exist = arr.find(item => item.t)
  console.info('map-array-select', map, arr)
  //改
  map.set('t', 2)
  arr.forEach(item => {
    item.t ? item.t = 2 : ''
  })
  console.info('map-array-modify', map, arr)
  //删
  map.delete('t')
  let index = arr.findIndex(item => item.t)
  arr.splice(index, 1)
  console.info('map-array-delete', map, arr)
}


{
  let set = new Set()
  let arr = []

  //增
  set.add({
    t: 1
  })
  arr.push({
    t: 1
  })
  console.info('set-array', set, arr)

  //查
  let set_exist = set.has({
    't': 1
  })
  let arr_exist = arr.find(item => item.t)
  console.info('set-array-select', set_exist, arr_exist)

  //改
  set.forEach(item => {
    item.t ? item.t = 2 : ''
  })

  arr.forEach(item => {
    item.t ? item.t = 2 : ''
  })
  console.info('set-array-modify', set, arr)

  //删
  set.forEach(item => item.t ? set.delete(item) : '')
  let index = arr.findIndex(item => item.t)
  arr.splice(index, 1)
  console.info('set-array-delete', set, arr)
}

{
  let item = {
    t: 1
  }
  let map = new Map()
  let set = new Set()
  let obj = {}
  //增
  map.set('t', 1)
  set.add(item)
  obj['t'] = 1

  //查
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })
  //改
  map.set('t', 2)
  item.t = 2 //set的是引用类型。无法修改
  obj['t'] = 2
  //删
  map.delete('t')
  set.delete(item)
  delete obj['t']
}

//优先使用map，放弃使用obj，array
