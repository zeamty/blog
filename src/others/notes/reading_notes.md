# 读书笔记

## Java程序设计（蔡翠平）
* drawOval(x,y,width,height)  画一个椭圆，设想一个矩形是该椭圆的外接圆，则此矩形的左上点坐标为(x , y).
* Math.random() 产生0-1之间的随机数。
* Javadoc.
* break和continue加标签跳出多重循环。
* System.arraycopy() : 数组元素复制。
* 类中，this指本对象，super指父类（包括直接父类和间接父类）。
* Javac  -d : -d用来指明package的根目录。
* 类的访问控制符只有public和默认(后者只能被同包中的类访问)，类成员的访问控制符有四种：public，protected，private和默认，默认不能被不同包中的子类访问，protected则可以。
* 一个类只能继承一个父类。
* final修饰的类不能被继承。，final修饰的方法不能被子类重写覆盖。
* final域和final局部变量只能被赋值一次，相当于c++中的const，static final 变量相当于常量。
* 含abstract方法的类必定是abstract类；abstract不能与private,static,final,native并列修饰同一方法。
* interface中包含常量(static final)和抽象方法，一个接口可以继承多个父接口，一个类可以实现多个接口。接口可以作为一种引用类型来使用，如 interface i = new class();
* 域变量与方法中的局部变量：前者是对象的一部分，存于堆中，后者存于栈中；前者若未赋初值，会自动赋该类型默认值(0,false,null等)，后者则必须显式赋值后才能使用。
* 面向对象语言基本特征：数据抽象，继承，多态。
* <font color=#FF0000>[important]</font> main函数之所以是static是因为JVM运行程序时未实例化包含main()方法的类，因此用static限制，直接用类名访问main()函数；进一步，若要访问该类的非静态成员，需将其实例化。
* instanceof
* Class class = object.getClass();Field[] fields = class.getFields();Method[] methods = class.getMethods();
* 类的构造函数中可用this(param)调用本类的其他构造函数，用super(param)调用直接父类中的构造函数，两种都不用则系统自动添加上super()，从而保证了任何构造方法最终都会调用到Object类的构造方法。结果是从Object类起，由远及近，到当前类，逐一调用构造方法。
* 子类执行构造时，若父类的构造函数调用了父类的其他被子类重写的方法，则父类构造函数调用的实际上是子类重写后的函数。
* 关于static: (1)static修饰的内部类实际是一种外部类，不依赖外部类的一个实例，在new前面不需要对象变量；(2)static内部类中不能访问其外部类的非static域和方法，需new其所在的外部类；(3)static方法不能不带前缀地new一个非static内部类，需先new外部类（new OuterClass().new InnerClass()）。
* 外部类不能被protected,private,static等修饰,内部类可以，即内部类的地位与其所在类的域和方法相同。
* 若内部类中与外部类有同名的域或方法，可用 OuterClass.this.field/method 访问。
* 方法中的内部类的地位和方法中的局部变量相同，即不能被public,private,protected,static修饰，但可被final,abstract修饰。
* 匿名类不能有修饰符，不能定义构造方法（故构造时不带参数），创建与实例化同时进行。
* 判断字符串内容是否相同时应使用equals()方法，而不是==。例:String str1 = new String("123");String str2 = new String("123");str1==str2返回false，str1.equals(str2)返回true.
* 调用Arrays.binarySearch() (二分法查找)前要先调用Arrays.sort(),否则结果不可预期。
* public static double random()产生0 - 1之间的随机数。
* Collection的子接口有Set(HashSet类实现该接口) 和 List（ArrayList,Vector类实现该接口），前者相当于数学中的集合，元素唯一且无序，可包含仅一个null对象。后者反之。
* Map接口，HashMap，Hashtable类实现该接口。
* 给线程设计一个标记变量的方法来决定线程是否应该终止。


## Java Web开发实战经典（李兴华）
* 当用Eclipse把webapp发布在tomcat/webapps下时，若要修改tomcat/conf/server.xml时，应修改Eclipse的Workspace/Servers中的server.xml，因为Eclipse启动tomcat服务器时，会用此文件覆盖掉tomcat/conf目录下的同名文件。
* mysql驱动名为：com.mysql.jdbc.Driver
* 服务器端跳转和客户端跳转区别：前者地址栏变化，后者不变。
* JSP中尽量用<%=%>代替out.println()
* 消除中文乱码：request.setCharacterEncoding("GBK");
* servlet中response.sendRedirect()能传递session内的属性，而不能传递request范围内的属性。
* JSP页面中最好只导入java.util包。


## Linux 命令、编辑器与shell编程(Sobell/3rd Edition)
> 说明：[str] 表示 str是可缺省的。
### Part 1-2  入门
* 在线计算词典 http://foldoc.org
* apropos搜索含关键字的命令，相当于man -k；whatis仅搜索与关键字完全匹配的命令，相当于man -f。
* info通常显示比man更多的信息。pinfo使用色彩，功能与info类似。
* 获取帮助：[cmd]  --help和 help [cmd]
### Part 1-3  实用程序
* 转义ctrl-H、ctrl-U、ctrl-M等字符方法是在其前加ctrl-V，而不是''和\
* 通配符*：当前目录下所有文件。
* script命令记录shell会话信息，用-a指定保存信息的文件名。
* unix2dos,unix2mac,mac2unix,dos2unix实现文件格式转换。
* 压缩文件（效率依次提高）：compress(后缀为.Z, 解压用uncompress), gzip(后缀为.gz, 解压用gunzip或gzip -d, 显示压缩文件内容用zcat), bzip2(后缀为.bz2, 解压用bunzip2或bzip2 -d, 显示压缩文件内容用bzcat, -k选项保留原文件).
* gzip -c file > file.gz可保留原文件。
* tar的-z选项将先调用gzip 或 gunzip，-j选项调用bzip2 或 bunzip2.
* locate 搜索文件。
* type显示命令是否为内置命令。
* which在设定的搜索路径下搜索命令，whereis在标准路径下搜索命令。
* w：列出系统上的用户，类似于who, finger.
* uptime 显示系统负载和持续运行时间。free显示内存使用情况，-m以MiB为单位（默认为Kib），-t增加Total一行。
* tac 逆转文件中所有行的顺序并输出（tac是cat的反写）。
* killall 根据名称终止进程。
### Part 1-4  Linux文件系统
* 以/或~开头的路径是绝对路径。~username表示username的主目录。
* 删除非空目录用rm -r
* ACL可以精确地控制某些用户访问文件的权限。
* 建立目录的软链接应使用目录的绝对路径。cd + 目录的软链接，用pwd -P才能正确显示链接的目录路径。
### Part 1-5  shell
* -- 用来分隔命令和选项。
* set -o noclobber:禁止重定向时覆盖已有文件，+o则表示允许。
* tr string1 string2:从标准输入读取数据，将其中的string1替换为string2，tr "[a-z]" "[A-Z]"将小写字母替换为大写字母。
* tee file将标准输入复制到file和标准输出。
* 文件名匹配中[0-25]匹配0,1,2,5.
### Part 2-6  vim 编辑器
* u撤消操作，:redo 恢复被撤消的操作。若设置了compatible参数，只能撤消一次。
* ZZ保存并退出。
* 在输入模式下，可使用ctrl-H(删除光标前的字符)，ctrl-W(删除光标前的单词)，ctrl-U(删除光标前至行首的所有字符)，ctrl-M(换行)，ctrl-L(使打印机从当前位置跳到下一页顶端)。
* 在命令模式下，ctrl-G显示正在编辑的文本的名称和相关信息，等价于:f。
* help [feature] : 查看帮助。
* 命令模式下 ctrl-W s打开另一窗口编辑同一文件（等同于:sp），ctrl-W n打开一个新窗口编辑一个空文件，ctrl-W w将光标在窗口间移动，ctrl-W q（或:q）退出窗口。
* w filename:写入文件。
* vim -r显示vim以保存的交换文件列表；vim -r filename编辑filename对应的交换文件。
* 移动光标（命令模式下，以下命令前都可加数字）:
    * fa:光标移动到下一个a，Fa光标移动到上一个a，ta光标移动到下一个a之前，Ta光标移动到上一个a之后，           分号;重复上一条查找移动命令；
    * h j k l 左下上右，BACKSPACE类似于h,SPACE类似于l;
    * w：光标移到下一个字的首字母(标点符号也看作一个字)，W以空格为分隔符移到下一个字的首字母；
    * b：光标移到上一个字的首字母(标点符号也看作一个字)，B以空格为分隔符移到上一个字的首字母；
    * e：光标移到下一个字的尾字母(标点符号也看作一个字)，W以空格为分隔符移到下一个字的尾字母；
    * RETURN移动光标到下一行行首，-移动光标到上一行行首；
    * )移动到下一个句子的开始，(移动到当前句子的开始；
    * }移动到下一段落的开始，{移动到当前段落的开始；
    * H移动光标到屏幕顶端一行行首，M移动到屏幕中间一行行首，L移动到屏幕底部一行行首（3H表示移动到屏幕顶端向下数3行行首，3L类似，M前加数字不起作用，即3M等同于M）；
    * ctrl-D向下移动半屏，ctrl-U向上移动半屏；
    * ctrl-F向下移动一屏(类似于PAGE DOWN),ctrl-B向上移动一屏(类似于PAGE UP)；
    * G移动到文本最后一行行首（3G表示移动到第3行行首）；
    * %移动到同一嵌套层次内匹配的同类型花括号。
* 输入模式：
    * i在当前字符之前插入文本，a在当前字符之后插入文本，I在当前行首插入文本，A在当前行尾插入文本；
    * o在当前行下一行插入文本，O在当前行上一行插入文本；
    * r替换当前字符（替换后返回命令模式），R从当前位置开始替换文本（覆盖原文本）；
    * ctrl-V后，可输入特殊字符，如ctrl-M，ctrl-U，ESCAPE等；
* 删除（命令模式下）：
    * x删除当前字符，X删除光标之前的字符，（其他:3x,4X）；
    * dl等价于x，d0从行首删除到当前字符（不包含当前字符），d^从该行第一个字符（不包括前导空格和制表符）删除到当前字符（不含当前字符）,d$从当前字符删除到行尾（包含当前字符）,D等价于d$,(其他：3D，4dl，2d$)；
    * (d加移动光标的命令：删除移动过程中经过的字符)：dw,d3w,,dW,db,dB,de,d),d3{,dfa,dTc,d3G,dH,dM,dL等;
    * dd删除当前行，3dd从当前行开始，删除3行；
    * （d加数字加指令等价于数字加d加指令，如3dd=d3d，d3w=3dw）
    * d RETURN 删除该行和下一行。
* 修改（命令模式下）：
*  c(修改)类似于上面的d命令，如cl,c0,c$,c2w,c3B,c4),c2{,ctc,cL,cM,cc,3cc等，主要作用是删除指定文本后进入输入模式,同样的：c加数字加指令等价于数字加c加指令，如3cc=c3c，c3w=3cw；
* 命令~可改变当前字符大小写，4~改变当前字符开始的4个字符大小写。
* 替换（命令模式下）：
    * s用1或多个字符替换当前字符，3s用1或多个字符替换当前字符开始的3个字符，S用1或多个字符替换当前行（等价于cc）。
* vim的正则表达式中，\>表示字结束指示符，\<表示字开始指示符。
* 查找字符串（命令模式下）：
    * /regex查找正则表达式匹配的字符串下一次出现的位置，?regex查找正则表达式匹配的字符串上一次出现的位置，(若字符串中包含/或?需用\转义)，n重复上一次搜索，N以相反方向重复上一次搜索。
* 字符串替换（命令模式下）：
    * 语法格式：[[g] address]s/regex/new-string[/option]
    * (1) address示例：5(第5行)，1,5(第1到第5行)，1,.(第一行到当前行)，.,$(当前行到最后一行)，%(所有行，等价于1,$)，/apple/(从当前行往下包含apple的一行)，g/apple/(包含apple的所有行)，.,.+5(从当前行开始的5行)。
    * (2) regex是正则表达式，包含特殊字符\>和\< ;
    * (3) new-string中可用&表示与regex匹配的文本。
    * (4) 替换命令只替换某一行第一个与regex匹配的文本，若要都替换，可加选项g；选项c使vim询问是否修改每个与regex匹配的文本。
* .(句点)重复上一条修改删除替换等命令。
* J将当前行的末尾与下一行连接起来，并在两行之间加一个空格，若当前行以.或!等结尾时，加两个空格。
* 复制（命令模式下）：
    * y命令(yank,将文本复制到缓冲区)类似于d命令，如yy(复制整行，等价于Y)，yw,y0,y$,yH等等；
    * p命令(put,从缓冲区复制文本),当使用d或y命令操作字符和字时，p将它们插入到当前字符之后，P命令将它们插入到当前字符之后。当使用d或y命令操作行、句子或段落时，p将它们插入到当前行之后，P将它们插入到当前行之前。
* 缓冲区：
    * vim有1个通用缓冲区，1个工作缓冲区，26个命名缓冲区(a-z)，9个编号缓冲区(1-9)。
    * (1) 当使用y,d,p时，就是在操作通用缓冲区和工作缓冲区；
    * (2) 命名缓冲区用法："h2yy(复制两行，用其覆盖h缓冲区)，"Kdw(删除一个单词，并追加至k缓冲区),"ap(插入a缓冲区的内容到当前文本).
    * (3) 编号缓冲区:vim将近9次删除的至少有一行长的文本块放到其中，当删除文本块无法撤消时，"1p粘贴最近一次删除的文本，若不是想要的文本，则u然后.粘贴第二个缓冲区的内容（等价于"2p），以此类推。
* :[address]r filename将文件读取至指定位置(0地址表示工作缓冲区的开始位置)。
* :[address]w [filename]：将工作缓冲区的内容写入文件，若要另存为已有文件（即覆盖原文件），使用W!命令，
* :[address] w >> filename:将工作缓冲区的内容追加至已有文件。
* 在shell中设置export VIMINIT='set pram1 param2 ...'来设置vim参数。
* :set all显示所有vim参数。
* 标记：
    * 使用m+字符来设置标记，如mt,则't定位到标记所在行行首，`t(反引号+t)定位到标记的精确位置，。
* d't(删除当前行到标记行之间的文本),d`t(删除当前行到标记所在处之间的文本)。
    * 标记可以在address中使用。
* 编辑其他文件：
    * :e[!] [filename] 编辑其他文件。!表示自上次写入工作缓冲区的内容不保存。该命令不改变通用缓冲区和命名缓冲区的内容。
    * :e!使工作缓冲区返回上次写入的状态。
    * :e#关闭当前文件同时打开上一次编辑的文件。
* 当在shell命令行里用vim编辑多个文件时（即vim file1 file2 ...），用:n不保存对当前文件的修改而编辑下一个文件，:N编辑上一个文件，：files列出当前vim打开的所有文件，:rew不保存对当前文件的修改而编辑第一个文件，可以:w保存修改后再使用:n或:rew .
* q:显示历史命令。
* :Explore调用netrw.vim浏览文件系统。
* :sh派生一个新的交互式shell;
    * :!cmd 派生一个新的shell来执行cmd;
    * !!cmd 将命令的输出替换当前行内容（cmd的标准输入是正在编辑的文件的部分或全部内容）。!Gcmd将当前光标到文件末尾的内容作为标准输入执行cmd.!'qsort将光标至q标记之间的文本进行排序后替换原文本。
    * vim将每组相邻的标点符号看作一个字；vim中的句子以句点、感叹号或问号等结束，后跟两个空格或一个换行符。
    * vim中的段落指前后存在一或多个空白行的文本块。
* 调用vim:
    * vim +[n] filename 从filename的第n行开始编辑，缺省n时从最后一行开始编辑；
    * vim +/pattern filename 从包含/pattern的第一行开始编辑。
### Part 2-7  emacs编辑器(略)
### Part 3-8  bash
* &> 把标准输出和标准错误输出到同一文件。|&与2>&1 | 等价。1>&2 将标准输出重定向至标准错误。
* dirs 显示目录栈内容，pushd [dir]: 将dir压入目录栈，pushd：交换目录栈顶的两目录，pushd +[n]将第n+1个目录与栈顶目录交换，popd将栈顶目录移除，popd +[n]将第n+1个目录移除。
* declare [-a|-f|-i|r|-x] var:声明数组/函数名/整型/只读/全局 变量。-改为+可删除相应属性。
* ![num]执行历史命令，!!执行上一条命令。![num]:n表示第num个历史命令的第n个单词（第0个为命令名），![num]:^表示第1个单词，![num]:$表示最后一个单词，![num]:m-n表示第m~n个单词，![num]:-n：表示第0~n个单词，![num]:n*表示第n到最后一个单词，![num]:*表示除命令名外所有单词(与1*相同)，!$表示上一条命令的最后一个字。例$cat file    $ vim !$（等同于vim file）
* !!:[g]s/old/new/表示将old[全局]替换为new（若接下来换行，可省略最后一个/），等同于^old^new^（若接下来换行，可省略最后一个^）。
* fc -s执行前一条命令。fc -s [num] 执行编号为num的历史命令。
* !!:p：显示而不执行上一条命令。
* \cmd可防止alias的别名替换，如：\ls
* shell函数 func_name(){cmd;},用$1,$2等接收参数，使用func_name来调用函数，export -f func_name来导出函数。
* echo {1..3}显示1 2 3, echo {8..14..2}显示8 10 12 14，echo {a..m..3}显示a d g j m.
* ~+等同于$PWD，~-等同于$OLDPWD（前一工作目录）.
* let后表达式内部不能有空格，否则需加""，如let "a = b + c "
* $((运算表达式))：得到表达式的值。表达式中的变量前可不加$. 例：c=$((a+b))等同于c=$(($a+$b))等同于((c=a+b))等同于let c=a+b等同于let " c = a + b "
* \`cmd\` 等同于$(cmd)
### Part 4-10  bash程序设计
* shift 命令可用于左移位置参数。
* cat -- "$@" 中--作用是告诉cat $@中没有选项。
* if…then…elif…then…else…fi
* sh -x 1.sh用于调试shell脚本程序，等同于在shell脚本文件中开始位置添上set -x (set +x代表取消调试)
* shell脚本程序中，set可将位置参数设置为指定命令的输出，如set -- $(ls -l $file){--是为了防止把ls -l的第一个参数-(普通文件) 当作选项 }
* 若shell程序无退出语句，那么其退出状态就是该shell程序最后一条命令的退出状态。
* for i in list 其中list中参数以空格分离
* for i in {0..6..2} 参数为0 2 4 6
* echo -n 输出内容后不换行
```
for (( x=1; x<10; x++))
do
   [cmd..]
done
```
* for i do [cmds..] done 这里 for i 等同于for i in "$@"
```
case string in
pattern-1)
      cmds
      ;;
pattren-2)
      cmds
      ;;
*)
      cmds
      ;;
esac
```
* cat > f1 << 'quit' 表示输入quit时结束，且f1不包括'quit'
* basename filepath显示文件名，不包括路径。
* set显示shell变量，等同于declare
* export -n 或declare +x 取消导出环境变量。
* printenv或env显示环境变量
* env xx=value ./diplay_xx 在定义了变量xx的shell中运行display_xx
* ${name:-defaultValue}表示如果name值为空或未赋值，使用defaultValue，否则使用name值。
    * ${name:=defaultValue}表示如果name值为空或未赋值，则将defaultValue赋给name.
    * : builtInCmds表示计算builtInCmds的值，但不执行任何命令。如:  : ${TEMPDIR:=/tmp}
    * ${name:?message}表示name为空或未赋值时，将message发送至标准错误。
* 声明数组并赋值：Name={element1 elememt2 ...}
    * echo ${#Name[*]}显示数组中元素个数。
    * echo ${#Name[1]}显示数组中第2个元素长度。
* 函数变量与调用它的shell共享，local可将变量声明为函数的局部变量。
* read -s 表示不显示输入的数据。
* 输出重定向至/dev/tty代表输出至屏幕，输入重定向自/dev/tty代表从键盘接收输入。
* trap 'cmd' signal表示捕获到信号后执行cmd
* : (冒号后有空格) 是一个内置命令，总是返回状态1
* kill [-signal] PID 或 kill %job 终止进程或作业。
* eval cmd 会展开变量、将变量名替换为它的值。
* ${#1} 得到$1的长度
### Part 4.11 Perl脚本语言
* my将变量声明为词汇变量（只在该变量所在的块或文件中起作用）
* 通过defined($var)可确定变量是否已定义，若未定义，则该变量值为undef
* -w选项可使程序发生错误时输出一条错误语句，等同于use warnings。
* print函数输出内容后不换行，say函数输出内容后换行。
* $标量变量，@数组变量，%哈希变量，数组变量有序而哈希变量无序。
* $num = @array则num值为数组array的长度。
* . 用于连接字符串。
* 处理数组的函数：shift()返回并删除数组的第一个元素。push()把一个元素添加到数组的末尾。pop()返回并删除数组最后一个元素。splice()用一个数组的元素替换另一个数组中的元素。例：splice(@array1,1,2,@array2)表示用array2中的元素替换array1中下标为1,2的元素。
* hash变量赋值：
    * 方法1:$hashvar{key} = value;
    * 方法2:%hashvar = ( key1 => value1,key2 => value2 ...);
    * 当key中含空格时，需用引号将key包含起来.
* @array1 = %hashvar ：输出键值对；
    * @array2 = keys(%hashvar) : 输出键；
    * @array3 = values(%hashvar) : 输出键；
* 后缀if/unless语法：print "str" if (expr);
* die(str) : 该函数把参数发送至标准错误，并终止程序。
* if...elsif...else...
* for/foreach [var] (list) : 可以不指定var，此时循环变量为$_
* uc()函数返回参数的大写形式。 若用此函数修饰var,那么list中的元素也会变大写形式。
* for/foreach (expr1;expr2;expr3) ：类似于c语言。
* last、next类似于break和continue.
* @ARGV包含命令行调用perl的参数。
* $_变量可以看作是当前操作的对象。
* reverse()函数逆序返回数组中的元素。
* sort [{$a cmp $b}] @array;结果以升序排列。其中的cmp运算符等同于<=> .
* sort {$b cmp $a} @array;结果以降序排列。
* open()函数打开文件，opendir()函数打开目录。
    * open(file-handle,['mode'] ,"file-ref") ，mode有 < （读取）,>（写入）, >>（追加）.
    * print [file-handle] "text" ：将text写入文件或进程。
    * `$line = <file-handle>`，magic文件句柄<>表示标准输入。
    * close(file-handle)：关闭文件。
* 变量都是包变量，除非用my修饰。在子例程中会继承主程序中的包变量，对其进行的修改也会影响到主程序。
* split(/re/,str)函数用分隔符/re/将一个字符串str分为多个字符串，可将split返回的列表赋予一个数组变量。
* 正则表达式：
    * =~运算符和 !~运算符。
    * //中是正则表达式。
    * .匹配任意单个字符，\n除外。
    * 使用变量保存正则表达式：$re = qr/string/ 。
    * /\/usr/等同于m{/usr} 。
    * $str =~ s/str1/str2/;将str中的str1替换为str2,str1可以是正则表达式。
    * Perl 默认执行贪婪匹配，使用？可使其执行非贪婪匹配，如/{.*?}/ 。
    * 与其他类型的正则表达式不同的是，Perl中的()是特殊字符，要指定为常规字符则需转义。
    * /(re).* $1/则$1中保存的是re, \1等同于这里的$1.
### Part 4.12  Python编程语言
* 类似于bash, 语句末尾的分号是可缺省的，但两个语句在同一行时，需用分号分隔语句。
* 在条件语句、循环语句、函数定义后加 冒号并使用缩进来取代其他语言的大括号等标识。
    **是幂运算运算符。
* raw_input(str) 显示提示str 并读标准输入。
* int(num) 返回num的整数部分，float(num)返回浮点数形式。
* 列表索引可指定为素数，如a[-1]表示列表a中最后一个元素，a[-2]表示倒数第二个元素。
* a[0:2] 返回元素0和元素1，a[2:] 返回a[2] 到最后一个元素，a[:4] 返回a[0] 到a[4]
* a为列表：
    * a.remove(item) : 移除元素；
    * a.append(item) : 追加元素；
    * a.reverse() : 就地反转列表，用新值覆盖原值；
    * a.sort() : 就地排序列表元素，用新值覆盖原值；
    * sorted(a) : 返回排序后的列表；
    * len(a) ： 返回元素数目。
    * b=a 则b和a指向同一列表，b=a[:]则会复制列表，二者不指向同一列表。
* 字典：
    * 初始化：dict = { key1:value1, key2:value2, ... } ;
    * dict.keys() 和 dict.values() 返回键和值；
    * dict[key3] = value3 则增加一个新键值对；
    * del dict[key] : 删除一个键值对；
    * dict.items() : 以元祖列表形式返回键值对，由于字典无序，每次返回的结果可能不同；
    * for i in dict 等同于 for i in dict.keys();
    * 字典中的键和值均可以是不同类型。
* 字符串是可迭代的，如 for char in string 则遍历字符串string , 每次循环将其中一个字符赋给char .
* range([min,] max [, step] ) 返回列表(包含min但不包含max)，min缺省值为0，如range(0,10,3) 返回[0,3,6,9] .
* range()将返回的列表存储在内存中，当生成较长的列表时应使用 xrange()函数。
* 文件操作：
    * f = open(file_ref , 'mode') ，mode包括r w a r+ a+ b ;
    * f.close() ：关闭文件；
    * f.read() : 读取文件；f.readline()：读取文件的一行；f.readlines() : 反复调用readline(), 返回一个行列表；
    * f.write(str) :写入文件；
    * f.writelines(strs) : 反复调用write()，将列表的每一项写入文件。
    * for line in f 与for line in f.readlines()相比，前者不会将文件存储于内存中。
* pickle.dump(objectname, open(filename,'wb')) : 将对象写入磁盘；
* pickle.load(objectname, open(filename,'rb')) : 从磁盘读取对象。
* re用于处理正则表达式：
    * re.findall(regex, string) ：返回一个包含所有匹配的列表；
    * a=search(regex,string) : 返回一个MatchObject匹配对象，匹配不存在返回false；a.group(index)得到MatchObject中的匹配。
    * re.match(regex, string) : 只从字符串的开头查找匹配。
* 函数：
    * 定义函数：def my_function(args)： ;
    * python通过引用传递列表，因此在函数修改列表时，会改变原始列表。
    * 可为参数设定默认值，如def fc(x=10,y=20,z=30) 则调用时可用以下形式：fc(),fc(1,2,3),fc(z=2) .
* 导入模块 : import a
* 导入模块的某部分： from a import b，若程序中已定义同名函数，则使用a.b()调用该函数。
* lambda函数：只能有一个表达式，如a = lambda x: x+1。
* map(func,seq1[,seq2, ...])将函数func应用于参数列表，返回的对象是列表。如：map(lambda x : x*2 , [1,2,3,4] )
* 列表推导：
    * mylist = [x+10 for x in range(10) ] ;
    * mylist = [x for x in range(10) if x % 2 == 0]
    * mylist = [x + y for x in range(5) for y in range(2,4)]
### Part 4.13  MySQL数据库管理系统
* 登陆：mysql -u username -p[userpwd] [database] .
* 从命令行运行sql语句：mysql -u username -p   <  file，file中是sql语句。
* 备份数据库：mysqldump -u username -p > file ;
* 恢复数据库：mysql -u username -p  <  file .
### Part 4.14  AWK模式处理语言
* printf语句中，%[-][x[.y]]conv，其中-号表示左对齐。
    **是幂运算的运算符。
* awk程序最好用单引号引起来，以防转义。
* 部分程序变量：
    * $0表示当前记录，$1,$2...表示当前记录的各个字段；
    * NR表示当前记录的行号；
    * NF表示当前记录的字段数目。
    * FILENAME表示当前输入文件的名称，使用标准输入时值为null;
    * FS表示输入字段分隔符，默认值为空格或换行符；
    * RS表示输入记录分隔符，默认值为换行；
    * OFS表示输出字段分隔符，默认值为空格；
    * ORS表示输出记录分隔符，默认值为换行；
* -v 选项可用来初始化变量。
* print中的逗号输出为OFS。
* 关联数组 array[string] = value，value缺省值为0，支持for (string in array) {cmds} .
* 匹配运算符 ~ 和 !~ ,正则表达式用//包含起来。
* , (范围运算符)用来选取若干组文本行。在第一组文本行中，选中的第一行是逗号之前的模式所指定的行，选定的最后一行是逗号之后的模式所指定的行；重复上述步骤，得到所有符合条件的文本行。
* -f filename 指定存放awk程序的文件。
* BEGIN{cmds}和END{cmds} 表示在awk处理输入信息之前和之后要执行的命令。
* 部分函数：
    * length(str) 返回str中字符个数，若不带参数，返回当前记录中的字符个数；
    * int(num) 返回num的整数部分；
    * split(str,arr,del) 用del作为分隔符，将str中的元素放到数组arr中，返回数组中的元素个数；
    * index(str1,str2) 返回str2在str1中的索引，不存在则返回0；
    * substr(str,pos,len) 返回str中从pos开始，长度为len的子字符串；
    * toupper(str) 和tolower(str) .
* {print > "filename"} 重定向输出。
* gawk支持协进程：cmd |& "cmd2"
* getline str 函数：读取一行文本到str，若str缺省则读取到$0,并修改$1,$2,$3...等。getline的运行独立于awk自动读取的每一行。
### Part 4.15  sed 编辑器
* 无论是否被选中，sed将输出所有行，-n选项使得sed仅输出特定的行（被p指令选定的行）。
* -f filename 指定存放sed程序的文件。
* sed每次读取一行进行处理。
* 1,5 表示第1行到第5行，$表示最后一行。
* 指令：
    * a(append): 在当前选择的行后追加一行或多行文本，用 \ 换行(a指令后也要加反斜线)，没有反斜线的视作尾行。不论sed有没有-n选项，追加的文本都将被输出；
    * c(change): 用新文本替换选定文本，用\换行；
    * d(delete): 删除已选择的行，停止对改行的后续处理，并且不输出本行到标准输出；
    * i(insert): 在选定的行之前插入新文本；
    * n(next): 跳过选定的行；
    * N: 读取下一行，并把内嵌的换行符和下一行追加至原来的行后面；
    * p(print): 输出选定行到标准输出；
    * q(quit): 退出sed；
    * r filename(read): 读取文件内容并追加至选定行之后；
    * s(substitude): s/pattern/new-string/[g][p][w filename]，g全局替换，p输出替换后的文本到标准输出，w将替换后的文本写入到文件；
    * w filename(write): 将选定行写入到文件。
* 指令前加! 表示指令作用于没有被选中的每一行。
* 多条命令用{}括起来。
* 暂存空间：
    * g : 用暂存空间的内容覆盖模式空间中的内容；
    * G : 将一个换行符和暂存空间的内容追加到模式空间中；
    * h : 用模式空间的内容覆盖暂存空间中的内容；
    * H : 将一个换行符和模式空间的内容追加到暂存空间中；
    * x : 交换暂存空间和模式空间中的内容。
*  s/regex/new-string&/这里的&表示与regex正则表达式匹配的值。
### 其他
* mc:文本管理器；screen:管理多个文本窗口；busybox：集成了大量Linux使用程序的功能。
* ps查看cpu和内存占用可用选项-x ,如 ps -aux .
* stty -echo:输入字符不回显；stty echo :输入字符回显。
* read -s pwd：输出字符保存在pwd中，并且不回显。
* sudo date -s 2014/7/4/ 20:22:30 设置时间，sudo hwclock -w 将时间写入CMOS.
* locate建立文件数据库，从中查找文件，速度快于find，可用updatedb更新数据库。

## 鸟哥的Linux私房菜 基础学习篇（第二版）
### Part I  Linux的规则与安装
* bc计算器默认只输出整数，可以输入 scale=n，其中n是小数点位数。
* man 命令中，/str向下搜索字符串，?str向上搜索字符串。
* netstat -a 查看网络连接情况。
### Part II  Linux文件、目录与磁盘格式
* 在ls -l中的第二列，若为文件，则该列为文件的inode数目，若为文件夹，则为文件夹中的文件夹数目（含.和..两个特殊文件夹）。
* chgrp group dir/file ： 改变用户组；
* chown user[:group] dir/file ：改变拥有者。
* uname -r 显示linux核心版本。
* pwd -P :显示实际路径，而非链接路径(link -s)。
* 使用rm -r dir ：删除非空文件夹。
* cp命令：
    * -d：若源文件为链接文件，复制链接文件属性而非文件本身；
    * -l：建立源文件的硬链接，而非复制源文件；
    * -s：建立源文件的符号链接，而非复制源文件；
    * -r：递归复制，用于复制目录；
    * -p：同时复制源文件的属性（包含文件权限等）；
    * -a：等同于-pdr；
    * -u：若目标文件比源文件新，更新目标文件。
* mv -u :若目标文件已存在，且源文件比较新，才会更新。
* basename表示路径的文件名，dirname表示路径的目录名。
* nl类似与cat -n，但功能更多。
* more只能向后翻页和搜索，less则可以向前翻页和搜索。
* od显示二进制文件。
* touch -d或-t可指定修改时间。
* umask -S以符号类型显示权限。
* lsattr和chattr显示和设置文件隐藏属性。
* 文件特殊权限：
    * Set UID(SUID)：只用于二进制文件，不能用于脚本文件，表示用户执行该文件时拥有该文件的文件所有者的权限（如root权限）；
    * Set GID(SGID):若SGID设置在二进制文件上，执行该文件时有效用户组会变成该文件的用户组所有者；
    * Sticky Bit：只对目录有效，目录下的文件及目录只有其创建者和root用户才可以删除。权限中的s表示SUID和SGID，t表示Sticky Bit，可在表示权限的三位八进制数钱加一位数，其中SUID为4，SGID为2，Sticky Bit为1，例：6755即rwsr-sr-x,7666即rwSrwSrwT(由于666没x权限，S和T表示“空的“)。
* which -a cmd：列出所有同名的执行文件路径。
* whereis -b file：只找二进制文件。
* locate搜索文件，locate搜索的数据是通过已建立的文件数据库搜索的。
* find：
    * -atime n：n天之前访问(access)过的文件;
    * -ctime n：n天之前修改过状态(change)的文件;
    * -mtime n：n天之前修改(modification)过的文件;
    * -newer file:比file新的文件；
    * -size [+/-]SIZE：搜索比SIZE大（+）或小（-）的文件。
* MBR只能存储最多4个分区信息，其中扩展分区最多一个，其他为主分区，扩展分区下可再分逻辑分区。
* linux文件系统由inode和块组成，块由若干个扇区组成，在建立文件系统时可指定块大小，inode记录文件或文件夹的各种信息（不包括文件名）和指向存储具体内容的块地址的指针。在建立文件系统（format）时inode和块数目就固定了。
* df查看磁盘或目录的使用情况，du查看目录或文件容量大小。
* fdisk可对硬盘分区。mkfs可将分区格式化为指定的文件系统。mkbootdisk用于制作启动软盘。fdformat用于软盘低级格式化。
* fsck检查和修复硬盘错误，正常情况下使用该命令可能会损坏文件，使用该命令前需先卸载被检查的分区。
* mount --bind olddir newdir:将一个目录载入到另一目录。
* hdparm -Tt /dev/sda：测试硬盘及缓存访问性能。
* tar -N DATE：只归档比DATE新的文件。
* cpio -o > [file|device]：备份，标准输入为文件或目录的路径，可与find命令配合使用； cpio -i < [file|device] :还原。
* dd if=[file|dir] of=[file|dir]：复制if到of中，可用于备份等。
### Part III  学习shell与shell script
* vim:
    * n SPACE：向右移动n个字符；
    * n ENTER：向下移动n行；
    * gg：等同与1G，移动到首行；
    * ctrl-R:重复上一次操作，等同于：redo ;
    * v:反白选择字符；V按行反白选择；ctrl-V：按长方形反白选择数据；y复制，d删除；
* read -t sec : 在sec秒内未反应将略过。
* ${variable}的特殊用法：#遍历变量值，从前向后删，%则从后向前删，//替换内容，例：
    * var=/tmp/test/test.sh
    * echo ${var##/*/} 输出 test.sh ;
    * echo ${var#/*/} 输出 test/test.sh ;
    * echo ${var%%/*/} 输出 /tmp/test/test.sh ;
    * echo ${var%%/*} 输出空内容；
    * echo ${var%/*} 输出 /tmp/test ;
    * echo ${var/test/TEST} 输出 /tmp/TEST/test.sh;
    * echo ${var//test/TEST} 输出 /tmp/TEST/TEST.sh;
* cut -d 'char' -f fields :以char为分割符截取fields段数据（其中fields可以为：3，5表示第3和第5段，3-5表示第3到第5段);
* cut -c scope ： 截取指定范围的字符（如cut -c 10-表示第10到行尾的字符）。
* split [-b SIZE | -l LINES] （按大小或行数）将大文件拆分成小文件。
* -有时可代替STDIN或STDOUT，如 tar -xvf - /home | tar -xvf - ; ls -al /home | split -l 10 - lshome .
* xargs 类似与反引号`，可避免参数列表过长的错误。
* 正则表达式：
    * {n,m}表示重复前面的字符n~m次，{n}表示重复n次，{n,}表示重复n次以上，在grep中{}需写成\{\}以防shell转义；
    * []反向选择为[^]，如[^A-Z],表示除了大写字母；
* diff可以用来比较目录的不同。
* patch可以将旧内容更新到新内容，可配合diff使用。
* let可写作(( ))，如：echo $((1+2))
### Part IV  Linux使用者管理
* 用户主目录的模板：/etc/skel
* chsh可用来改变用户的shell
* su -变换身份为root，su仅获得root权限，su -l user：切换身份到user.
* pstree可查看进程树。
* nice和renice可调整进程的NICE值。
* fuser可用来找出正在使用文件、目录或设备的进程。
* lsof找出进程打开或使用的文件与设备。
### Part V  Linux系统管理员
* man path可用来指定man帮助文件的路径。


## Python核心编程（Wesley J.Chun，第二版）
### Part 1.2  快速入门
* print语句最后加逗号可防止换行。
* 可以在函数、类或模板的起始处添加一个字符串，起到在线文档的作用(可以使用obj.__doc__访问)。
### Part 1.3  Python基础
* #后是注释，\继续上一行。
* python中赋值语句不会返回值。
* python不支持自增和自减。
* 多元赋值：x, y, z = 1, 2.5, 'string' (通常应使用括号扩起来：(x, y, z) = (1, 2.5, 'string') ).
* 变量交换值：x, y = y, x
* 若模块是被导入，__name__的值是模块的名字；若模块是被直接执行，__name__的值是'__main__' .
* del会删除对象的一个引用，如 del x; del myList .
### Part 1.4  Python对象
* 多个比较操作可以在同一行上进行，求值顺序为从左到右。
* 测试两个变量是否指向同一对象：a is b (等价于 id(a) == id(b) )和 a is not b(等价于id(a) != id(b) ) .
* Python会缓存整型数，故：a=1000;b=1000;a is b返回True，而a=1.0;b=1.0;a is b返回False.
### Part 1.5  数字
* 在整数后加L表示长整型数，长整型数的表示范围仅取决于机器的内存大小。
* //运算符是地板除（舍去小数部分）。
* 复数的属性：num.real实部，num.imag虚部，num.conjugate()共轭复数。
* from __future__ import division可将/返回真实的商。
### Part 1.6  序列：字符串、列表和元组
* 字符串是不可变对象，在Python中，单引号和双引号的作用是相同的
* join()函数用法：'char'.join(str1,str2...)将各字符串用分隔符char连接起。
* str*n返回n个str相连接得到的新字符串。
* 字符串前加r或R表示禁止转义，如：r'\n';字符串前加u或U表示Unicode字符串，如u'abc',ur'\n' .
* 内建函数：cmp()根据字符串的ASCII码值进行比较；
* 三引号可以使字符串跨行，这意味着字符串中可包含换行符，制表符或其他特殊字符。
* 列表是可变对象，且列表可以包含不同类型的对象。
* 元组是不可变对象，使用list()和tuple()函数可实现列表和元组的互相转换。
### Part 1.7  映射和集合类型
* 字典是无序的(故不能索引或切片)，可变的数据类型，字典中的键必须是唯一的、可哈希的（整数1和浮点数1.0的hash值是相同的）。
* for key in dict.keys等同于for key in dict .
* dict.has_key(key)等价于key in dict .
* 元组可作为字典的键值，条件是元组中不能含有可变元素（比如列表）。
* 集合是无序的，不能索引或切片。集合分为set和frozenset，分别是可变集合（元素可增删）和不可变集合（可hash）。
### Part 1.8  条件和循环
* C中的条件运算符 C?A:B等价于Python中的A if C else B.
* pass语句用在某些需要代码但暂时没有代码的地方。
* else可用于while或for循环语句后，表示当循环正常完成（非break）后，执行else语句。
* iter(obj)生成对象的迭代器。
* 列表解析：[expr for var in iterable1 if condition].例：[(x,y) for x in range(3) for y in range(x,x+3)]
* 生成器表达式: expr for var in iterable1 if condition.
### Part 1.9  文件和输入输出
* f.seek(0)回到文件开头。
* 文件写入时，应添加换行符（使用os.linesep，有助于跨平台）。
* 输出文件内容，print语句末尾应加逗号防止出现两次换行。
* sys.stdin,sys.stdout,sys.stderr分别是标准输入，标准输出，标准错误。
* Python中的sys.argv、len(sys.argv)相当于C语言中的argv、argc，其中sys.argv[0]是程序的文件名。
### Part 1.10  错误和异常
* try：...except:...else:...表示当try中语句未引发异常时执行else语句。
* finally子句无论异常是否发生都会执行。
* 上下文管理： with context_expr [as var] : with_suite . 例：
```
with open('/tmp/test','r') as f :
    for line in f :
        print line
```
* raise语句用于触发异常，raise空语句用于触发上一个异常。
* 断言assert相当于if not …：raise...
### Part 1.11  函数和函数式编程
* 当函数只有一个返回值时，返回值类型可以是任意的，但当有多个返回值时，则会组合成一个元组。
* 关键字参数：def func(x,y)可以这么调用:func(y=1, x=2) .
* 函数属性须在函数体外才能赋值：def foo():pass;   foo.version = 1.0 .
* 函数内部可以定义内嵌函数，且只能在其外部函数内部调用该内嵌函数。
* def foo():pass  则foo是函数对象的引用，而foo()是函数对象的调用。
* 函数中带默认值的参数必须位于不带默认值的参数之后。
* 可变长度参数：*vargst（元组）和**vargsd(字典)，它们应放在正常的参数后面。
* lambda函数：lambda [vars] : expression
* 函数式编程的内建函数：filter(func, seq), map(func, seq[, seq2...]), reduce(func, seq[, init]) 。
* 偏函数应用（PFA）
* 在函数内部引用全局变量时可使用global var
* 生成器：包含yield语句的函数，对于生成器函数func可以调用func.next(), func.send(), func.close() .
### Part 1.12 模块
* from ... import ... as ...
### Part 1.13 面向对象编程
* 创建类实例：
```
class MyClass(bases):
    'class  doc'
    class_suite
实例化：myObject = MyClass()
```
* 类用作名称空间：
```
创建类：
class MyData(object):
    pass

使用：obj = MyData(); obj.x=1;obj.y=2;
```
* 在类方法中，第一个形参都是self（类似于C++中的this），但在调用该函数时，不须传入该参数。
* __init__(self,other_data)方法是类的构造方法。
* Python中属性不需声明，通常在__init__()函数中直接定义。
* Python中所有的类属性都是公开的。
* 可以用dir()和class.__dict__（等同于vars(class)）查看类的属性。
* Python类的数据属性类似于C++中的static类属性。
* 调用非绑定方法需提供self参数，如子类__init__()调用父类的__init__() .
* 静态方法:
```
def foo():
    pass

foo = staticmethod(foo)

或

@staticmethod
def foo():
    pass
```
* 类方法：需提供类作为第一个参数，定义：
```
def foo():
    pass

foo = classmethod(foo)

或

@classmethod
def foo(cls):
    pass
```
* super(C,self).foo()等价于P.foo(self) ，其中C继承P.
* 与Java不同，子类不会自动调用父类的构造方法。
* __new__(cls,other_data)方法是继承不可变对象的类的构造方法。
* self.__class__返回self对应的类。
### Part 1.14 执行环境
* input()相当于eval(raw_input())
### Part 1.15 正则表达式
* 在*、?、+、{n,m}等表示重复的元字符后加?表示执行非贪婪匹配。
* 匹配多个字符串用| , 例：str1 | str2 .
* \s等同于[\n\t\r\v\f]，表示空白符。
* \b匹配单词边界。
* []只匹配单个字符。
* . 不匹配换行符。
* re.match()只从字符串开头进行匹配，search()从字符串任意位置匹配。
* group()和groups()保存匹配的子组。
* time.ctime(n)将n转化为时间，n的范围为[0 - 2^32-1]，从1970/01/01 00：00：00（epoch）开始 。
* string.lowercase含所有小写字母。
* random.choice()返回序列中任一元素。
### Part 1.16 网络编程
* 在socket_family中，Python仅支持AF_UNIX,AF_NETLINK,AF_INET，在socket_type中，Python支持SOCK_DGRAM（udp）,SOCK_STREAM（tcp）.
### Part 1.20 Web编程
* python -m CGIHTTPServer用于在当前目录建立一个端口号为8000的web服务器，再建立名为cgi-bin的文件夹用于存放Python CGI脚本（cgi脚本的权限至少为500）

## PHP与MySQL程序设计(W.Jason Gilmore/4th Edition)
### Part 3  PHP基础
* PHP支持C/C++/shell三种注释风格。
* 变量以$开头。
* define(name, value)定义常量。
* 给$foo赋值后，可以用 $$foo="& bar"将$bar的值赋给$$foo。$foo和$ {$foo}的值都存在。
* 引用赋值： $foo =&  $bar 或者 $foo =  &$bar .
* 字符串拼接操作符：$a = "ab"."cd"和$a .= 'ef' .
* 字符串用单引号扩起来时将不会解析变量和转义序列（除了\'）.
* heredoc和nowdoc用于输出大量文本。
```
heredoc：
$str = <<< FLAG
    some string....
    other string....
    FLAG;
与heredoc相比，nowdoc不会解析其中的字符串，可用来显示代码等。
```
* foreach（array_expr  as  $var）和 foreach (array_expr as $key => $value)，后者适用于键值对的数组。
* include(filepath)语句导入php语句，需用{}将include()包含起来，括号可省略（如同print, echo）.
### Part 4  函数
* 将函数参数默认值设为空("")意味着该参数是可选参数。
* list($var1,$var2,...) 可接受多个参数给多个变量赋值。
* 可以在函数参数前加类型来限定参数类型(只支持对象和数组)。
### Part 5  数组
* 数组定义：$array1 = array(key1 => value1,key2 => value2...);
* 对于内置的函数、关键词，以及用户定义的类名和函数名是不区分大小写的，不过，PHP 变量区分大小写，一般建议小写。
* is_xxx(var)用来判断是否为指定类型。
* 如果数组索引值是数值类型，则创建时可以省略索引值，如$arr1[] = "a"; $arr1[] = "b" 。
* vprintf()和vsprintf()可以用来显示数组内容，print_r($array)函数可显示整个数组。
* sizeof()和count()可用来得到数组的大小。
* array_unique(array)返回不含重复值的array.
* void sort()对数组进行就地排序，且键-值不再保持关联，使用asort()可使键-值保持关联。rsort()和arsort()函数逆序排列数组。usort()可使用用户自定义的函数来对数组进行排序。
* array_rand()返回数组中一个或多个随机值；shffle()随机地对数组进行排序；array_chunk()将数组划分为多个子数组。
### Part 6  面向对象的PHP
* 调用属性：$object->property,调用方法：$object->method().
* PHP构造函数：__construct()，调用父类构造函数：parent:__construct()；析构函数：__destruct()。
* 在类中引用静态属性应使用self::staticVar 。
### Part 7  高级OOP特性
* PHP5开始，对象被视作引用，可以使用clone克隆对象，并可使用__clone()方法调整克隆行为。
* static::$staticVar用来解决延迟静态绑定问题。
* 接口中只能定义常量（使用const）和方法。
### Part 9  字符串和正则表达式
* PHP使用Perl风格的正则表达式。
* /regex/中间是正则表达式。/regex/i 表示忽略大小写; /regex/g 完成全局搜索；/regex/u取消贪婪匹配。
### Part 10  处理文件和操作系统
* @后接方法表示屏蔽该方法执行时出现的错误。
### Part 13  处理HTML表单
* _POST和_GET变量可用来处理用post和get提交的表单。
* 要使表单提交到表单所在的脚本，可使用：`<form action="<?php echo $_SERVER['PHP_SELF']; ?>" >`
* 对于checkbox这样的多选组件，应注意它们的name属性有一对中括号：<name="somename[]">
### Part 18  会话处理程序
* 使用session前应有session.start()语句。
* session变量为$_SESSION['var'],删除该变量用unset($_SESSION['var']) .
* 检查变量是否存在用isset()函数，如：是isset($_POST['name']) .
### Part 27  MySQL客户端
* 可以向mysql传入由sql语句组成的文件，如 mysql [options] < /path/file .
* 在mysql中，可以用source命令执行文件。
* 在sql语句后加\G以垂直输出格式显示查询结果，如：select * from user \G。
* 在mysql中，\T file或tee file可将会话记录到file中，\t或notee终止记录。
* 在mysql中，\s或status显示服务器当前状态。
* --safe-updates拒绝没有where子句的update或delete语句。
* 在命令行中，-X / -H以XML/HTML格式输出查询结果，如：mysql -X <showDb.sql > dbRecord.xml。
* 在mysql中，show variavles查看配置变量，show variables like "char%"查看以char开头的配置变量;show status查看系统状态信息，也支持%通配符。
* mysqldump用来导出现有的表结构和数据;mysqlshow查看表信息;mysqlimport从定界文本文件将数据导入到数据库; mysqlcheck在mysqld运行时检查并修复表。
### Part 28  MySQL存储引擎和数据类型
* 在mysql中，show engines查看引擎。
* alter table TABLE_NAME type=ENGINE_TYPE用来修改表的存储引擎。
* 定义字段时，用unique可确保该列所有值都互异。
* 字段属性enum("type1","type2"...)从多个值 中选一个，set("type1","type2"...)从多个值中选多个。
* create table if not exists TABLE_NAME则在表未创建时创建表。
* 复制表：create table TABLE_NAME select FIELD from ANOTHER_TABLE.
* 创建临时表：create temporary table TABLE_NAME.
### Part 29  保护MySQL的安全
* CREATE/DROP/RENAME USER用于增加/删除/重命名用户。
* GRANT和REVOKE用于增加和撤销权限。
* show grants for 'USER'@'HOST'查看权限。
### Part 30  结合使用PHP与MySQL
* 基本用法：$mysqli = new mysqli();$mysqli->connect();$mysqli->select_db();$mysqli->close().
* CRUD:对于select,使用$results = $mysqli->query();$results->fetch_row()得到结果，$results->num_rows()得到返回的行数;对于其他sql语句，使用$results->affected_rows()得到影响的行;$results->free()释放查询内存。
* 准备语句：(1)初始化:$stmt=$mysqli->stmt_init();(2)执行准备语句：$stmt->prepare($query);(3)绑定参数：$stmt->bind_param(string types,mixed vars),这里types有i(int)，d(float,double),b(blob),s(其它);(4)执行语句:$stmt->execute();(5)绑定结果参数:$stmt->bind_result($vars);(6)获取结果：$stmt->fetch()等;(7)释放资源：$stmt->close();
* 事务：(1)启动自动提交：$mysqli->autocommit(TRUE);(2)提交事务：$mysqli->commit();(3)回滚事务：$mysqli->rollback().
### Part 31  PDO介绍
* PDO:为不同的数据库提供相同的编程接口。
### Part 32  存储例程
* 存储例程分为存储过程和存储函数(只支持select语句，必须且仅能返回一个值)。
    * 存储过程：create procedure PROCEDURE_NAME(param)  ROUTINE_BODY .
    * 存储函数：create function FUNC_NAME(param) returns TYPE ROUTINE_BODY .
    * param的作用： IN ：只传入;OUT：只传回;INOUT：既传入又传回;后两者在调用时参数名前加@.如：create procedure get_data(IN input char(8), OUT output char(8)) .
* 声明变量:declare var_name type.设置变量：set var_name type或使用select into语句.
* 执行存储例程：call NAME(input,@output).
* 创建多语句例程，使用begin和end作为开始结束标志。
* 可将多语句存储例程存在文件中，再重定向输入到mysql.
* if条件语句：
```
if cond then stmt
elseif cond then stmt
else stmt
end if
```
* case语句：
```
case state
when cond then stmt
when cond then stmt
else stmt
end case
```
* 循环语句（leave label 可以跳出循环）：
```
(1)  declare continue handler for not found set done=1;
[begin_label : ]  loop
stmts;
end  loop [end_label] ;
  注：该循环在done = 1时跳出。

(2)  [begin_label : ]  repeat
stmts;
until  cond
end  repeat [end_label] ;

(3)  [begin_label : ]  while cond  do
stmts;
end  while;
```
* delimiter语句可使chars之间的多条语句（以分号结尾）不会被立即执行：
```
delimiter  chars
stmts;
chars
delimiter;
```
* 修改删除例程使用 alter  (procedure | function)  routine_name [characteristic] 和 drop  (procedure | function)  [if exists] routine_name
* 查看例程状态：show procedure status  [ like 'pattern' ]
* 查看例程创建语法：show create (procedure | funtion)  dbname.routine_name .
### Part 33  触发器
* 触发器分为前触发器和后触发器。
### Part 34  视图
* 查看视图信息:(1)describe view_name; (2)show create view view_name; (3)select * from information_schema .
### Part 35  实用数据库查询
* $_SERVER['PHP_SELF']获取php文件名。
*游标，类似于文件指针。
    * (1)声明游标：declare cursor_name cursor for select_stmt;
    * (2)打开游标：open cursor_name;
    * (3)使用游标：fetch cursor_name into var1,var2...
    * (4)关闭游标：close cursor_name.
### Part 36  索引和搜索
* 创建单列常规索引：创建表时加index(field_name).若只索引field_name前n个字符，则用index(field_name(n)).
    * 多列常规索引：index name (fieldname1, fieldname2...) .
* 全文索引，针对char，varchar，text类型数据。使用全文索引搜索：select field from table where match(search_field) against(search_text) .
* 重建索引：repair table table_name quick .
* 只需对where和order by子句添加索引，多余的索引降低性能。
### Part 37  事务
* InnoDB表支持事务。
* 事务中的sql语句只有commit后才会生效。
    * 启动事务：start transaction ;
    * 提交事务：commit;
    * 回滚事务：rollback;
* 不能回滚数据定义语言（DDL），如：创建、删除、修改数据库或表。
### Part 38  导入和导出数据
* 导入数据使用load data infile 和mysqlimport，后者是前者的命令行版本。
* PHP打开csv文件可使用fgetcsv()函数。
* 导出数据使用select into oufile语句

## C程序设计语言（2nd Edition,Brian W.Kernighan & Dennis M.Ritchie）
* 函数原型中的参数名是可选的，函数声明与函数定义中的参数名可以不同，但类型必须一致。
* C语言中所有参数都是通过值传递。
* enum枚举是一个常量整型值的列表，默认情况下第一个枚举名的值为0,可以显示指定其值，如：enum months {JAN = 1, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC};
* 函数的返回值类型默认为int型。
* static声明的全局变量与函数的作用域是其所在文件，对其他文件隐藏；static声明的局部变量不论其所在函数是否被调用，该变量都会存在。
* 寄存器变量的地址是不能访问的。
* 在不进行显式初始化时，外部变量和静态变量都被初始化为0,局部变量和寄存器变量初值无效。对于外部变量和静态变量，初始化表达式必须是常量表达式。
* 函数的声明可以放在函数中。
* #undef NAME 可取消NAME的宏定义。
* 可以使用条件语句对预处理本身进行限制。
```
    #if ...
        #define …
    #elif …
    #define …
    #endif
```
* #if defined(VAR) 等价于 #ifdef VAR; #if ！defined(VAR) 等价于 ifndef VAR .
* 函数定义中的形参 char a[] 和 char *a 是等价的。
* 若p, q是指针，则q-p+1表示位于p和q指向的元素之间的元素数目。
* 二位数组作函数参数时，函数声明时需指明数组的列数，行数无需指定。
* (*a)[N] 表明参数a指向具有N个元素的一维数组；*a[N]表示指针数组。
* 指针数组中每一个元素（指针）可分别指向不同长度的对象。
* 指向函数的指针： int (*a)(void *, ...) .
* union是一种特殊的结构体： union {int ivar; float fvar; ...}  u .
* 格式化输出中%m.n 中m和n可用*表示，然后在后面给出int类型值。如： printf("%.*f" ,n,num) .
* printf函数的正确声明形式为: int printf(char *fmt, ...) .

##  Java编程思想（第四版）
* 与C/C++不同，Java中作用域小的变量不能覆盖同名的作用域较大的变量。
* Java中将一个对象赋值给另一个对象或传递给方法时，使用的是引用传递。
* ==、！=比较的是对象的引用，equals()的默认行为也是比较引用。
* 将浮点数转换为整型时，对数字进行截尾，若要四舍五入使用java.lang.Math.round() 。
* Java不会将int值转化为布尔值。布尔型数据不能转换成任何其他类型。
* Java中没有sizeof().
* this(params)用来在构造器中调用另一构造器，此语句必须位于构造器起始处，且仅能出现一次。
* Java不允许创建局部对象，必须使用new创建新对象。
* Java局部变量不会自动初始化，但类中的字段会被自动初始化，初始化顺序为字段定义的顺序。
* 静态对象只会在第一次使用时才会初始化，且此后不再初始化。
* static {....}类似于静态对象。
* 所有数组都有一个数据成员 length .
* 编译器不允许指定数组的大小。
* 外部类只有两种权限：public和包权限，一个文件只能有一个public类（且该类类名与文件名相同）。
* 在派生类中用super()调用基类中的对应函数。
* String实现的是不可变字符串，StringBuffer实现的是可变字符串。
* 当基类和派生类有同名函数，但在基类中是private时，动态绑定无法实现，因为基类中的private方法是默认final的，无法被覆盖。（P156，8.2.4）
* interface中的域默认是static final的，而方法默认是public的。
