# 个人

## 熟悉(需要知道底层原理细节)

### 编程语言
* Python
    * CPython
        * [为什么Pypy没有被推广以及取代CPython？ - 知乎](https://www.zhihu.com/question/55767604/answer/667060255)
    * Class与Object：鸡生蛋，蛋生鸡
        * [先有Class还是先有Object？ - RednaxelaFX的回答 - 知乎](https://www.zhihu.com/question/30301819/answer/47539163)
    * 垃圾回收
    * JIT
        * pypy
        * python3 type-hint
    * 应用领域
        * [为什么Pypy没有被推广以及取代CPython? - 知乎](https://www.zhihu.com/question/55767604/answer/146160980)
            * 科学计算
            * web服务
            * 脚本
* Go
    * plugin

* Java

### 数据结构&算法
* 基础
* 常见
    * [LSM Tree/B+ Tree](https://www.jianshu.com/p/3fb899684392)

### 组件

* Linux

* MySQL
    * 索引：B+树
    * 事务级别

* Redis
    * copy-on-write

* Nginx
    * epoll

* Kafka
    * 原理
        * [Kafka 设计解析（一）：Kafka 背景及架构介绍](https://www.infoq.cn/article/kafka-analysis-part-1/)
    * 高性能原因：
        * 顺序写磁盘: 甚至比随机写内存性能高
        * [zero-copy](https://blog.csdn.net/u013256816/article/details/52589524)
* Elasticsearch
    * [Elasticsearch: 权威指南](https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html)
    * [Elasticsearch中数据是如何存储的](https://elasticsearch.cn/article/6178)

* Docker
    * 底层技术
        * Namespace: 解决了隔离性的问题
        * Cgroup(Control Groups)：解决了资源限制的问题
        * Rootfs: 解决了可移植性的问题
    * 容器编排: Kubernetes(k8s)

* Thrift

### 框架

* Django

### 工具

* Shell

* Git

### 原理

* HTTP
    * HTTPS
    * HTTP/2
    * keep-alive, ajax轮询 & 长轮询long poll & WebSocket
    * 跨域: JSONP & CORS & JsonWebToken
    * cookie: 同源策略

### 架构
* 高并发系统
    * 并发与并行

* 设计模式
    * 单例模式的各种类型

### 模块
* SSO
* 正则表达式
* ID生成器
    * UUID:
        * Mac地址
        * [RFC4122](https://tools.ietf.org/html/rfc4122)
    * 数据库自增ID
        * 数据库号段模式
    * Redis：incr
    * Snowflake算法

## 了解(基本用法，大致原理)
### 编程语言
* JavaScript

### 组件
* 大数据&分布式应用
p   * 计算：MR、Spark、Storm、Flink; 存储：HDFS、HBase；查询：Hive；其他：Yarn、ZK
    * 原理：
        * 一致性hash
        * CAP定理
        * [写放大](http://blog.jcix.top/2018-06-05/write_amplification/)
* 时序存储
    * tsdb、InfluxDB，应用：实时监控 & Prometheus & Grafana
    * 时序性数据特点
        * 数据按时间顺序追加
        * 数据操作：写(insert) >> 读(select)，过期批量删除，几乎无修改操作
        * 按照时间聚合分析读取数据
        * 数据可多维关联（tags）
        * 无事务要求
    * 存储
        * 传统数据库存储采用的都是 B tree，这是由于其在查询和顺序插入时有利于减少磁盘寻道次数
        * 时序性数据库多采用 LSM-tree，放弃部分读能力，换取写入的最大化能力
    * 常见时序存储数据库
        * TimescaleDB，基于postgrSQL
        * vividcortex，基于mysql
* MongoDB
    *
* OpenTracing
    * [分布式系统跟踪标准OpenTracing介绍（设计原则）](https://zhuanlan.zhihu.com/p/48308774)
    * [Go微服务全链路跟踪详](https://zhuanlan.zhihu.com/p/79419529)])
### 框架
* Gin
* Flask
### 前端
* Vue.js
    * HTML5, CSS3 & Less, Lodash.js & Node.js
### 工具
* Vim

