# 后端

## 架构
### 事件驱动和消息
* 上游attach下游类，上游动作完成后，调用下游notify方法
* 由一个中央类管理事件和通知的下游
* 使用消息，具体分为push(rabbitmq)和pull(kafka)

## 组件
### Linux
* Shell
    * Factor:分解质因数。
    * Alt + .可一得到上一条命令的最后一个参数。
    * curl：命令行下的文件传输工具。
    * wget：下载文件。
    * lynx：字符界面的浏览器。
    * tail -f :动态显示文件内容。
    * Ctrl+r可匹配历史命令。
    * linux下sh和bash不一致的坑：/bin/bash和/bin/sh可能不一致，即使version相同。
    * 用$SHELL获取当前登录的shell路径
