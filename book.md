一、 类型
  String 字符串
  Hash   散列
  List   列表
  Set    集合
  ZSet   有序集合
  Bit
  ...
  
二、Redis 中的键
  1. 不能太长
  2. 不能太短 （可读性差）
  3. 允许的最大为512M
  4. 统一命名规范
  
三、 字符串 String
  SET key value 设置key的值为value，如果已经存在value则修改
  KEYS *  查询当前数据库所有的键
  GET key 查询当前key的值
  GETSET key value 将key的值设置为 value， 并返回旧值
  SETNX key value 设置key的值为value，key必须是表中没有的键
  MSET key value key value ... 设置多个键值对
查询
  GETRANGE key start end 获取当前key值的某个部分
  MGET key key key  获取多个key值
  STRLEN key 返回key对应的value的长度，length
  EXISTS key key key 判断该key是否存在 0 1
  TYPE key 判断key 的类型
删除
  DEL key key 删除命令

数字值的字符串
  操作一样
  INCR key 数字自增1
  INCRBY key n  自增n
  DECR key 自减
  DECRBY key n  自减n

四、hash 类型
  HSET key key1 value1 key2 value2 
   eg: HSET myhash a 1 b 2
  HKEYS key 查看keys
  HGET key key 查询key中的key的value
  HSETNX key key value 设置key的值为value，key必须是表中没有的键
  
  HLEN key 返回长度
  HMGET hash key1 key2 获取多个key的value值
  HGETALL hash 获取hash表中所有key value
  HEXISTS hash  key 判断key 是否在hash表中
  HVALS hash 获取hash表中所有value值
  HINCRBY hash key n 自增hash表中的key，自增n
  HDEL hash key key 删除hash表中的 key
  DEL hash 删除整个hash
  
五、列表
  LPUSH list value value 在列表中插入多个value，列表不存在自动创建
  LRANGE list start end  查询列表区间内容，end 可为负数 -1 倒数第一个 ....
  RPUSH list value value 在列表右侧（末尾）插入多个value
  LINSERT list BEFORE oldval value 在某个(oldval)元素前面插入一个数据value
  LINSERT list AFTER oldval value 在某个元素后面插入value
  LSET list index newvalue 修改索引为index的元素值为newvalue
  LINDEX list index 获取列表索引为index处的值
  LLEN list 获取列表长度
  LPOP list 移除最左侧（第一个）的一个元素，返回移除的元素
  RPOP list 移除列表最后一个元素，返回移除的元素
  LREM list count value 移除列表中值为value的元素，移除count个。count 移除的元素个数，count>0 从头向尾遍历移除，count<0 从尾向头移除，count=0 移除全部匹配的元素
  
  p14
  
  
  