# 其他语言

## C++
* 友元函数不是类的成员函数。
* 无法继承构造函数和析构函数。
* 虚基类：class Student : virtual public Person{};
* 虚函数：virtual func_type func_name() {} ,可通过调用基类的虚函数来调用派生函数中的同名函数。
* 一般将析构函数声明为虚函数。
* 纯虚函数：virtual func_type func_name() = 0 .带纯虚函数的类是抽象类，只能当作基类，且不能被实例化。

## PHP
* 字符串和数字比较，或者两个涉及数字的字符串比较时会转换成数字比较，所以0=='a', '10'=='1e1'
* in_array默认是弱类型比较
