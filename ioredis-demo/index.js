const ioredis = require('ioredis')

// 建立连接
const redis = new ioredis({
  port: 6379,
  host: '127.0.0.1'
})

// 操作数据库
// redis.set('foo','bar',(err, ret)=> {
//   // 回调函数，结果
//   if (err) {
//     console.log('写入失败:', err)
//   }else {
//     console.log('写入成功：', ret)
//   }
// })
// redis.get('foo',(err,ret)=> {
//   if (err) return console.log('err:', err)
//   console.log('ret:', ret)
// })

// Promise 操作
// redis.get('80-foo').then(ret => console.log('ret:', ret)).catch(err => console.log('err:', err))

// 流水线
// const pipeline = redis.pipeline()

// for(let i=0; i<100; i++) {
//   pipeline.set(`${i}-foo`,i)
// }

// pipeline.exec().then(res => console.log('res:', res)).catch(err=> console.log('err:', err))

// 事务
async function main() {
  try {
    const ret = await redis
                      .multi()
                      .set('Jack', 100)
                      .set('Rose',200)
                      .exec()
    console.log('ret:', ret)
  } catch(err) {
    console.log('操作失败', err)
  }
}
main()


