/**
 * 此处let为块作用于，显示的表示为{}内的内容为一个块
 * 输出1，2后直接报错，因为在块作用域外的i并没有定义
 * let不能重复定义同一个变量
 */
function test() {
  for (let i = 1; i < 3; i++) {
    console.log(i)
  }
  console.log(i)
}
/**
 * Object为引用类型，此时k是指向这个对象的指针，并非对象本身，
 * 指针无法改变，但是对象自身是可以改变的
 *
 */
function last() {
  const k = {
    a: 1
  }
  k.b = 3
  k.a = 2
  console.log(k)
}

//last()
