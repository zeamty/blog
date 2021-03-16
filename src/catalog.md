# 目录

## 个人
* 规划路径
    * 编程语言：
        * 专注：Python, Java
        * 熟悉：JavaScript, Go
        * 关注动态：Rust, C++
        * 学习相关：C(Linux, Nginx, Redis), Lua(语言实现), Scheme(sicp)
    * 后端: Linux、MySQL、Redis、Nginx、Thrift；Kafka、Elasticsearch、Docker
    * 前端：html5、css3 & less、Vue & lodash & node.js
    * 开发工具：Vim、Git
    * 其他：算法、设计模式、架构、分布式应用、高并发系统
* 长期计划
    * 算法：leetcode
    * zmt-pal: 读源码 & 模仿实现
        * z-lang: 仿lua或c或go，编译器基于jvm或者不基于jvm
        * m-os: 仿linux
        * t-db: 仿redis
        * p-webserver: 仿nginx
        * a-browser: webkit
        * l-editor: Scintilla&SciTE
    * 游戏：RPG-Maker
* 项目实践记录
    * 编程语言
        * 熟悉：C, C++(STL, Boost), Java, SQL, Shell(Bash), Python, PHP, JavaScript, Go
        * 了解：C#(ASP.NET), Perl, Scheme, Lua, Haskell, Scala, Ruby, Prolog, Rust
    * bd1：c++(consumer脚本-含mysql&redis)，php(仿yaf框架、简单版ORM框架), openresty(http api)，go(http api)，机器学习(spark mllib决策树&支持向量机，paddlepaddle深度学习)，大数据(solar cloud)，了解（大数据相关：MapReduce、Hadoop、Hdfs、HBase、Hive、spark、zk；消息队列：kafka）
    * bd2：python(django框架、flask框架、thrift api)、fe(vue+iview&element-ui&mint-ui&vux、react+ant.design)、go(thrift api、gin框架)、了解(mongodb、swagger、tsdb&grafana)

## 计算机科学基础
* 计算机组成原理
* 数据结构与算法
    * 常见算法：通用(贪心算法)、线性规划(0-1规划、混合整数规划MIP)、智能优化&启发式算法(模拟退火SA、粒子群PSO、爬山HC、遗传GA、蚁群ACO、差分优化DEA、免疫IA、禁忌搜索TS、天牛须搜索BAS、布谷鸟搜索CS、神经网络NN)
* 计算机网络
    * 应用层协议
        * HTTP：HTTPS, HTTP/2
            * ajax轮询、长轮询long poll、WebSocket
            * 跨域: JSONP & CORS & JsonWebToken
            * cookie: 同源策略
        * 其他：ftp, smb, webdav
* 操作系统
* 数据库原理
* 编译原理
* 软件工程
* 安全
    * XSS/CSRF/SQL注入、对称&非对称加密算法、数字签名、渗透测试github.com/Micropoor/Micro8

## 编程语言
* 常用
    * 静态类型：C, C++, Java, C#, Go, Rust
    * 动态类型：Python, PHP, Javascript(Typescript), Ruby
* 其他：
    * 过程式：Pascal
    * 面向对象：Groovy(基于JVM), Delphi(Object Pascal)
    * 函数式：Lisp(Scheme, Common Lisp, Logo), Haskell, Erlang, Clojure(基于JVM), Scala(基于JVM), ML, Ocaml, F#
    * 脚本语言：Lua, Perl, Shell, Awk, Tcl
    * 客户端：VB & VB.NET, Objective-C, Swift, Kotlin
    * 专用：科学计算(Matlab, Fortran), 统计分析(R)
    * 逻辑编程语言: Prolog
    * 其他：SQL, Assembly(汇编语言)
## 后端
* 架构
    * 软件架构: MVC、C/S、SOA、微服务、Serverless、Restful
    * 编程范式: 过程式或命令式、OOP、IoC/AOP、模板&泛型、函数式、元编程、声明式如sql
    * 设计模式
    * 高并发系统: 多进程/线程/协程编程、异步IO、负载均衡LB
* 框架
    * Web框架
        * PHP(Yaf&Smarty&Zend Framework)、Python(Django)
        * Python(Flask、Tornado、web.py)、Go(gin)、Ruby(Ruby on Rails)、Lua(Openresty)、Node.js(Express、Koa、eggjs、Thinkjs)、JSP、ASP & ASP.NET
    * RPC框架
        * Thrift(跨语言)
        * grpc(跨语言)、brpc(c++)、dubbo(java)、motan(java)、rpcx(go)
    * 其他
        * Java(vert.x/netty、RxJava), php(swoole)
* 组件
    * OS
        * Linux((Debian&CentOS))
        * VxWorks
    * DB
        * MySQL
        * Oracle、SQL Server、DB2、PostgreSQL、SQLite、PouchDB(js)、TiDB、时序型数据库(openTSDB, InfluxDB, TimescaleDB)
    * Cache
        * Redis(kv型)
        * MongoDB(文档型)、CouchDB(文档型)、Memcached(kv)、Neo4j(图数据库)、LevelDB&RocksDB&SSDB(基于LSM Tree，实现了redis协议，适用于写多读少场景)、Cassandra(分布式，类似文档型)、twemproxy(redis/memcached集群proxy，实现了一致性hash算法)
    * Web部署
        * nginx(php-fpm、uwsgi)、Apache
        * Java(Tomcat、Jetty、Jboss)
    * 中间件
        * 消息队列MQ(Kafka、RabbitMQ、NSQ)
* 模块
    * SSO: OAuth2
* 其他
    * 正则表达式

## 大数据&云计算
* 大数据&分布式应用
    * 批式计算
        * MapReduce: Hadoop、Pig、FlumeJava、Spark
    * 流式计算
        * Storm、Spark Streaming、Flink、Spring Cloud Data Flow
    * 存储
        * HDFS(非结构化数据)、HBase(结构化数据-列存储)
    * 查询
        * Hive、Spark SQL、Spark GraphX(图计算)
    * 组件
        * 协调系统(Paxos、Raft协议)：ZooKeeper、ETCD、Consul
        * 机器学习：Spark Mllib
        * 资源管理：Yarn
        * 消息队列：Kafka
        * 文件系统: Ceph
        * 分布式关系数据库: OLAP&OLTP
    * 算法
        * 一致性hash
        * CAP定理
        * 分布式ID生成器
        * 选举算法
* 云计算
    * 计算
        * 云计算(IaaS&PaaS&SaaS、BaaS&FaaS、*aaS(en.wikipedia.org/wiki/As_a_service))
    * 存储
        * 云计算存储(块存储、对象存储、CDN存储)
    * 部署
        * Docker、Kubernetes(k8s)、Envoy(service mesh)

## 前端
* HTML: HTML5
* CSS: BootStrap、velocity.js、CSS3、Less、Sass、Stylus
* JavaScript
    * 标准：ECMAScript5-9
    * 衍生语言(TypeScript、CoffeeScript、Dart、Node.js、flow.js(类型检查)、asm.js(c/c++翻译成js)、WebAssembly(c/c++翻译成字节码))、
    * 通用框架(jQuery(PC端，链式调用的DSL)、Zepto.js(移动端)、Backbone(mvc)、Ember(mvvm)、Knockout(mvvm)、Angular、Vue、React)
    * 解决方案(WebRTC(直播)、Shadow Dom/Web Components如react/vue等、AppCache/Service Worker(离线web应用))
    * 工具: webserver(Express)、ajax框架(Axios)、tooltips插件(Popper)
        * 实用程序库(Lodash > UnderScore(debounce&throttle))
        * HTML模板引擎(Mustache、Handlebars、Pug(Jade)、EJS、doT)
        * 压缩混淆(UglifyJS、CleanCSS)
        * 打包(通用打包：webpack、Gulp、npm、Grunt，模块打包：Browserify、RequireJS)
        * 自动化测试(phantomJS)
        * 代码规范检查(CSSLint、ESLint、JSHint)
        * ES代码转译：Babel，文档生成器：ESDoc、JSDoc、YUIdoc、documentation.js等
        * 浏览器兼容性：shim&polyfill
* UI
    * 工具：Photoshop、Sketch、GIMP
    * 可视化：SVG(D3、DataV)、Canvas、VML、WebGL、Three.js、ExtJS、YUI、echarts
    * 框架(PC端：iviewUI、ant.design、element-ui，移动端：mint-ui、vux)
* 标记语言: SGML：XML、HTML，Json & Json Schema，MarkDown)
* 其他
    * 编辑器&IDE(Sublime Text、Webstorm、VScode)
    * 调试工具(Chrome dev tools)
    * 设计(PWA渐进式web应用、SPA单页应用、响应式网页设计)
    * 安全(XSS、CSRF)

## 客户端
* 安卓: Java、Kotlin
* iOS: Objective-C、Swift、CocoaPods(包管理工具)、热更新JSPatch
* 移动跨平台: react native、flutter
* 小程序: 微信小程序
* Windows开发：C#、.Net
* PC跨平台：Qt
* 其他：Mac开发、Linux客户端开发

## 应用
* 搜索
    * lucene、solr、Elasticsearch、Druid、Sphinx
* 推荐
* AI
    * 科学计算: numpy, scipy, conda/anaconda
    * 机器学习: scikit-learning、spark MLlib等
        * 深度学习: 框架(TensorFlow、Keras、PaddlePaddle、Apache MXnet、Pytorch、Caffe、Theano等) 、模型(dnn,cnn,rnn,gan,lstm,dbn)
    * NLP(Transformer、GPT、BERT)
* 游戏
    * RPGMaker, Unity(c# & js), unreal虚幻引擎(c++ & lua)，cocos2d移动端游戏开发
* AR & VR
* 物联网IoT
* 区块链

## 工程实践
* 测试
    * 自动化测试(接口自动化测试：Junit等，UI自动化测试：selenium等)
* 运维
    * 部署(Makefile、Ant、Maven)
    * 持续集成(Jenkins、hudson等)
    * 日志&监控：tsdb/grafana/prometheus、ELK(Elasticsearch+Logstash+Kibana)、bosun(数据源：ELK, OpenTSDB, Graphite等)、sentry等
    * 问题排查：opentracing([分布式系统跟踪标准OpenTracing介绍（设计原则）](https://zhuanlan.zhihu.com/p/48308774)、[Go微服务全链路跟踪详](https://zhuanlan.zhihu.com/p/79419529)])
    * 灰度发布&小流量
    * DevOps & SRE
    * ABTest
* 工程管理
    * 项目需求&bug管理(jira、asana)
    * Wiki(Confluence)
    * 流程图(processon.com)
    * 交互设计(axure.com、figma.com)
    * 思维脑图(XMind)
    * 在线文档协作(谷歌docs、腾讯文档、石墨文档)
    * 开发设计模式(敏捷开发、领域驱动设计DDD、测试驱动开发TDD等)
    * 工程开发规范
    * PPT、Excel
    * Tableau(BI图表分析)
    * 沟通技巧&团队协作
* 代码规范
* 开发工具
    * OS
        * Linux(Debian、CentOS等)
    * IDE
        * Vim
        * Emacs、Eclipse、JB's IDE、VScode
    * SCM
        * Git
        * SVN(webdav协议)
    * 其他
        * ssh/mosh/sshfs
        * tmux
