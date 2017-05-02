{
  //基本定义 es5中回调的写法
  let ajax = function(callback) {
    console.log('执行')
    setTimeout(function() {
      //call,apply都是改变this的指向
      //函数调用的三种方式:
      // obj.myFunc();
      // myFunc.call(obj,arg);
      // myFunc.apply(obj,[arg1,arg2..]);
      callback && callback.call()
    }, 1000)
  }
  ajax(function() {
    console.log('timeout1')
  })
}


{
  let ajax = function() {
    console.log('执行2')
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve()
      }, 1000)
    })
  }
  ajax().then(() => {
    console.log('promise', 'timeout2')
  })
}
//多次回调
{
  let ajax = function() {
    console.log('执行3')
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve()
      }, 1000)
    })
  }
  ajax()
    .then(function() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve()
        }, 2000)
      })
    })
    .then(function() {
      console.log('timeout3')
    })
}
//promise捕获错误
{
  let ajax = function(num) {
    console.log('执行4')
    return new Promise((resolve, reject) => {
      if (num > 5) {
        resolve()
      } else {
        throw Error('出错了')
      }
    })
  }

  ajax(6).then(() => {
    console.log('log', 6)
  }).catch(err => {
    console.log('catch', err)
  })

  ajax(3).then(() => {
    console.log('log', 3)
  }).catch(err => {
    console.log('catch', err)
  })
}

{
  // 所有图片加载完再添加到页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src;
      img.onload = () => {
        resolve(img)
      }
      img.onerror = err => {
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img)
    })
  }

  Promise.all([
    loadImg('http://ool2rppa7.bkt.clouddn.com/cf9954fa-78f7-444e-af0c-c677282df863.jpg'),
    loadImg('http://ool2rppa7.bkt.clouddn.com/9924a841-1848-47cd-8909-3e770f9f5352.jpg'),
    loadImg('http://ool2rppa7.bkt.clouddn.com/90596124-19ae-4aa4-9cf9-eb1f4be67cdd.png')
  ]).then(
    showImgs
  )
}



{
  // 有一个率先改变。则显示。其他不管
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img')
      img.src = src;
      img.onload = () => {
        resolve(img)
      }
      img.onerror = err => {
        reject(err)
      }
    })
  }

  function showImgs(imgs) {
    imgs.forEach(img => {
      document.body.appendChild(img)
    })
  }

  Promise.race([
    loadImg('http://ool2rppa7.bkt.clouddn.com/cf9954fa-78f7-444e-af0c-c677282df863.jpg'),
    loadImg('http://ool2rppa7.bkt.clouddn.com/9924a841-1848-47cd-8909-3e770f9f5352.jpg'),
    loadImg('http://ool2rppa7.bkt.clouddn.com/90596124-19ae-4aa4-9cf9-eb1f4be67cdd.png')
  ]).then(
    showImgs
  )
}
