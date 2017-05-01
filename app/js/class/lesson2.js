{
  let a, b, rest;
  [a, b] = [1, 2];
  //console.log(a, b)
}
/**
 * 输出结果 1，2，[3,4,5,6]
 */
{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, rest)
}
/**
 * 输出1，2
 *
 */
{
  let a, b;
  ({
    a,
    b
  } = {
    a: 1,
    b: 2
  });
  console.log(a, b)
}

/**
 * 输出1，2，3
 * 如果c不赋值，c的值为undefined
 * 默认赋值为了防止不匹配出现undefined
 */
{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c)
}

/**
 * 使用场景1,交换变量
 *
 */
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a]
}

/**
 * 使用场景2
 * 赋值函数返回值，省去遍历
 */
{
  function f() {
    return [1, 2]
  }
  let [a, b] = f()
}


/**
 * 使用场景3
 * 获取函数返回值的特定几个值
 * a的值为1，b的值为4
 */

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let [a, , , b] = f()
}

/**
 * 使用场景4
 * 获取函数返回值的其中一个值，其余返回数组
 * a=1,b=[3,4,5]
 */

{
  function f() {
    return [1, 2, 3, 4, 5]
  }
  let [a, , ...b] = f()
  console.log(a, b)
}

/**
 * 对象的解构赋值
 * @type {Object}
 */
{
  let o = {
    p: 42,
    q: true
  }
  let {
    p,
    q
  } = o
  console.log({
    p,
    q
  })
}

/**
 * a=3,b=5
 * @type {Number}
 */
{
  let {
    a = 10, b = 5
  } = {
    a: 3
  }
  console.log(a, b)
}


{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  let {
    title: esTitle,
    test: [{
      title: cnTitle
    }]
  } = metaData
  console.log(esTitle, cnTitle)
}
