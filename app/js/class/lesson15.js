{
  //generator基本定义
  let tell = function*() {
    yield 'a'
    yield 'b'
    return 'c'
  }

  let k = tell()

  console.log(k.next()) //{value:a,done:false}
  console.log(k.next()) //{value:b,done:false}
  console.log(k.next()) //{value:c,done:false}
  console.log(k.next()) //{value:undefined,done:true}
}

{
  //另一种定义iterator的接口方式
  let obj = {}
  obj[Symbol.iterator] = function*() {
    yield 1
    yield 2
    yield 3
  }

  for (let value of obj) {
    console.log('value', value)
  }
}

{
  //状态机制
  let state = function*() {
    while (1) {
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  let status = state()
  console.info(status.next()) //A
  console.info(status.next()) //B
  console.info(status.next()) //C
  console.info(status.next()) //A
  console.info(status.next()) //B
}

//ES7 async await
// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }

{
  let draw = function(count) {
    //具体抽奖逻辑
    console.info(`剩余抽奖${count}次`)
  }

  let residue = function*(count) {
    while (count > 0) {
      count--
      yield draw(count)
    }
  }

  let start = residue(5)
  let btn = document.createElement('button')
  btn.id = 'start'
  btn.textContent = '抽奖'
  document.body.appendChild(btn)
  document.getElementById('start').addEventListener('click', function() {
    start.next()
  }, false)
}

{
  //长轮询
  let ajax = function*() {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 0
        })
      }, 200)
    })
  }
  let pull = function() {
    let generator = ajax()
    let step = generator.next()
    step.value.then(function(d) {
      if (d.code != 0) {
        setTimeout(() => {
          console.log('wait')
          pull()
        }, 1000)
      } else {
        console.log(d)
      }
    })
  }
  pull()
}
