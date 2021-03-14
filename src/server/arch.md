# 架构

## 事件驱动和消息
* 上游attach下游类，上游动作完成后，调用下游notify方法
* 由一个中央类管理事件和通知的下游
* 使用消息，具体分为push(rabbitmq)和pull(kafka)

