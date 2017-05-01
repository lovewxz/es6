{
  /**
   * 不区分大小写
   */
  console.log('B', 0B111110111); //以0B开头的表示二进制数
  console.log(0o767); //以0o开头的表示八进制数
}

{
  /**
   * 是否为有尽数
   */
  console.log('15', Number.isFinite(15));
  console.log('NaN', Number.isFinite(NaN));
  console.log('1/0', Number.isFinite('true' / 0));
  console.log('NaN', Number.isNaN(NaN));
  console.log('0', Number.isNaN(0));

}

{
  /**
   * 是否为整数
   */
  console.log('25', Number.isInteger(25));
  console.log('25.0', Number.isInteger(25.0));
  console.log('25.1', Number.isInteger(25.1));
  console.log('25.1', Number.isInteger('25'));
}

{
  /**
   * 数值是否在2的53次方内
   */
  console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.log('10', Number.isSafeInteger(10)); //true
  console.log('a', Number.isSafeInteger('a')); //false
}

{
  /**
   * 取数字的整数部分
   */
  console.log(4.1, Math.trunc(4.1)); //4
  console.log(4.9, Math.trunc(4.9)); //4
}

{
  /**
   * 是否为负数，0，整数
   */
  console.log('-5', Math.sign(-5)); //-1
  console.log('0', Math.sign(0)); //0
  console.log('5', Math.sign(5)); //1
  console.log('50', Math.sign('50')); //1 会把字符串首先转换成数值型
  console.log('foo', Math.sign('foo')); // NaN
}


{
  /**
   * 取立方根
   */
  console.log('-1', Math.cbrt(-1)); //-1
  console.log('8', Math.cbrt(8)); //2
}
