{
  console.log('a', `\u0061`);
  console.log('s', `\u20BB7`);
  /**
   * 输出两个字节的字符串
   * @type {String}
   */
  console.log('s', `\u{20BB7}`);


}


{
  let s = '𠮷';
  console.log('length', s.length);
  console.log('0', s.charAt(0));
  console.log('1', s.charAt(1));
  console.log('at0', s.charCodeAt(0));
  console.log('at1', s.charCodeAt(1));

  let s1 = '𠮷a';
  console.log('length', s1.length);
  console.log('code0', s1.codePointAt(0));
  console.log('code0', s1.codePointAt(0).toString(16));
  console.log('code1', s1.codePointAt(1));
  console.log('code2', s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7"));
  console.log(String.fromCodePoint("0x20bb7"));
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  }
  /**
   * 正确遍历了有两个字节的字符串
   * @param  {[type]} let [description]
   * @return {[type]}     [description]
   */
  for (let code of str) {
    console.log('es6', code); //𠮷,a,b,c
  }
}

{
  let str = "string";
  console.log('includes', str.includes("c")); //是否包含c true
  console.log('start', str.startsWith('str')); //是否以str开头 true
  console.log('end', str.endsWith('ng')); //是否以ng结尾 true
}

{
  let str = "abc";
  console.log(str.repeat(2)); //重复两次输出
}

{
  let name = "list";
  let info = "hello world";
  let m = `i am ${name},${info}`;
  console.log(m); // i am hello word
}

{
  /**
   * 左/右补0
   * 第一个参数为补的位数，第二个参数为补的字符串
   * @type {Object}
   */
  console.log('1'.padStart(2, '0')); //01
  console.log('1'.padEnd(2, '0')); //10
}
/**
 * xss攻击或者多语言模板
 * @type {Object}
 */
{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  console.log(abc `i am ${user.name},${user.info}`);

  function abc(s, v1, v2) {
    console.log(s, v1, v2);
    return s + v1 + v2
  }
}

{
  console.log(String.raw `Hi\n${1+2}`); // Hi\n3
  /**
   * 输出结果
   * Hi
   * 3
   */
  console.log(`Hi\n${1+2}`);
}
