# 重写与重载的区别：

![1699326571005](D:\WeChat\WeChat Files\muzhenghua\FileStorage\Temp\1699326571005.png)



toString, equals, hashcode一般都需要子类重写

# 多态

![image-20231107201149975](C:\Users\fengy\AppData\Roaming\Typora\typora-user-images\image-20231107201149975.png)

```java
if("cat".equals(name))
            animal = new Cat();
        if("dog".equals(name))
            animal = new Dog();
```

字符串放前面，为了防止空指针异常错误。

# 属性看左边，方法看右边（属性不存在多态性）

# 编译看左边，运行看右边（多态性只针对方法）

# 多态是运行时行为

不仅可以使用**父类做方法的形参**，还可以使用父类做方法的返回值类型，真实返回的对象可以是**该类的任意一个子类对象**。

简单工厂模式的实现，它是解决大量对象创建问题的一个解决方案。将创建和使用分开，工厂负责创建，使用者直接调用即可。简单工厂模式的基本要求是

1.定义一个static方法，通过类名直接调用

2.返回值类型是父类类型，返回的可以是其任意子类类型

3.传入一个字符串类型的参数，工厂根据参数创建对应的子类产品（传别的类型也可以）

# 类型转换

对象的.运算符是权限很高的，因此在转型的时候，需要加上括号

例如：((Circle)object).getArea();

和原始类型不同的是，原始类型强制转型的时候，会产生一个新的值，如

```java
int age = 45;

byte newAge = (byte)age; // A new value is assigned to newAge
```

但是引用类型不会

```java
Object o = new Circle();
Circle c = (Circle)o; // No new object is created
```

现在o和c都是同一个引用

![image.png](https://oss-cdn.mashibing.com/note_attachment/134726/image.png)

字符流，字节流工作流程

1. 建立源文件
2. 设立目标文件
3. 建立读取通道
4. 建立写入通道
5. 套入增强流到读取通道
6. 逃入增强流到写入通道
7. 设置缓冲数组，开始复制
8. 关闭流

```java
//读取文件
        File f1 = new File("src/Before Sunset2.txt");
        //输入流
        FileReader fr = new FileReader(f1);
        //目标图片
        File f2 = new File("src/Before Sunset2Copy.txt");
        //输出流
        FileWriter fw = new FileWriter(f2);
        //加强读取流,利用buffer
        BufferedReader br = new BufferedReader(fr);
        //加强输出流,利用buffer
        BufferedWriter bw = new BufferedWriter(fw);

        long start = System.currentTimeMillis();
        //开始复制
//        byte[] b = new byte[1024 * 10];
        char[] ch = new char[256];
        int len = br.read(ch);
        while (len != -1)
        {
            bw.write(ch, 0, len);
            len = br.read(ch);
        }
        long end = System.currentTimeMillis();
        System.out.println(end - start);
        //关闭流
        bw.close();
        br.close();
```

# 线程的生命周期

![img](https://oss-cdn.mashibing.com/note_attachment/156122/image_143.png)

![image-20231129220918458](C:\Users\fengy\AppData\Roaming\Typora\typora-user-images\image-20231129220918458.png)

![img](https://msb-edu-qa.oss-cn-beijing.aliyuncs.com/prod/a01ba0972ba841bc84910d317bdd5b09.jpg)

![img](https://msb-edu-qa.oss-cn-beijing.aliyuncs.com/prod/bf71b024840c4662a85b023fb1b010cc.jpg)

![img](https://msb-edu-qa.oss-cn-beijing.aliyuncs.com/prod/f29b311aa3ac46dbae8961f2ed009758.jpg)

![img](https://msb-edu-qa.oss-cn-beijing.aliyuncs.com/prod/9510443fed6342f7996937abb6fe68a8.jpg)

![img](https://oss-cdn.mashibing.com/note_attachment/142742/%E5%9B%BE%E7%89%87_94.png)

# **注意：一个线程进入wait()之后，再被其他线程的notify唤醒后，会沿着之前的wait()后面的代码走。因此，不能用if-else嵌套，否则会走不到其中一部分逻辑里**。而且wait会释放“锁”，sleep则不会释放。

# Static修饰的内容，和类一起加载，比对象先进入内存

# 接口

接口可以声明属性，但必须是public static final的（可以省略不写）

接口方法，jdk8之前，只能是声明抽象方法，public abstract.   jdk8可以声明静态方法，默认方法。jdk9以后，可以声明私有方法（也可以省略public abstract）

# 类是单继承，但是接口可以多继承

本质上并没有太大区别，接口A继承了接口B和接口C，那么接口A的实现类就要重写接口B,C里的抽象方法。

# 有接口的地方，就有多态性存在

# 重写父类方法时，如果父类没有抛出异常，那么子类重写也不能抛出（throws）wa

# Comparable和Comparator的使用区别：

有一些系统自带的类，比如Date或者第三方类，没有实现Comparable接口，但是又没法改源码；或者是有些类实现了，但是我想用其他的排序方式排序，这个时候就要用Comparator。例如一个电商，商品一搜索，默认的排序一般是comparable，那些按照价格排序，按照销量那些，就会是一个comparator对象，传进去前端再做绘制。

# 要重写equels和toString尽量对每个类都重写

# set的无序性，体现在非紧密结构，不像数组是紧密排列

# collections工具类，是专门用来对set,list,map进行操作的

# 类里的属性有不确定的类型时候，就需要定义成泛型类

# 数据库中的一个表，与 java中的一个类对应

# 表中的一条记录，就与java中的一个对象对应

# 表中的一个字段，就与java类中的一个属性对应

![image-20231223165658469](C:\Users\fengy\AppData\Roaming\Typora\typora-user-images\image-20231223165658469.png)

# TCP和UDP协议的区别

1. TCP是客户端和服务端，UDP是发送端和接收端
2. TCP需要先建立TCP连接，形成字节流通道（两者均在线）；UDP是把数据，源，目的地，封装数据包，不建立连接（接收方不在线就收不到）
3. TCP传输前，三次握手，可靠；UDP直接发送，接收方不确认，不可靠。
4. TCP传输数据量大，UDP单包64K限制
5. TCP传输完毕后，需要释放已建立的连接，效率差；UDP没连接不需要释放，效率高。适用于音频视频和普通数据传输

# TCP三次握手，四次挥手

三次握手：1在吗？2我在，你还在吗？3我也在，我们可以开始了

四次挥手：1我要走了。2好的，我知道你要走了。3我这边ok了，你可以走了。4那我走了再见。

# lambda表达式，就是接口重写方法时候，如果只有一个需要重写的抽象方法，就可以用。规则与箭头函数规则一致。这种接口，有个统一的annotation叫functional interface。

# 方法引用规则：

1. #### 对象：：实例方法

   函数式接口的抽象方法a与其内部实现时调用的对象的某个方法b的**形参列表**和**返回值类型**一致**（完全一样，多态，自动装箱都可以）**此时，可以用方法b实现对方法a的替换，覆盖。这个就是方法引用

2. #### 类名：：静态方法

   函数式接口的抽象方法a与其内部实现时调用的对象的某个**静态方法b**的形参列表和返回值类型一致（完全一样，多态，自动装箱都可以）此时，可以用方法b实现对方法a的替换，覆盖。这个就是方法引用

3. #### 类名：：实例方法（难）

​	函数式接口的抽象方法a与其内部实现时调用的对象的某个方法b的**返回值类型**相同，同时，抽象方法A中有N个参数，且方法B中有N-1个参数，并且，抽象方法A的第一个参数是方法B的调用者，后N-1个参数与B的参数相同。

#### 注意：该方法实际是对象调用的，但是写起来是对象所属的类调用的

# Stream三步骤

1. 创建实例，三种方式，通过集合，通过数组，通过of方法
2. 一系列中间操作：排序，映射，筛选与切片等
3. 终止

# **Predicate**接口非常适用于做过滤。
