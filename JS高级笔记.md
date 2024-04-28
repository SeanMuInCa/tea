# JS高级编程思想

## 变量

#### var和let和const的区别

1. var是函数级作用域，let，const是块级作用域
2. var会变量提升
3. var能重复定义变量
4. var定义的变量，会变成window对象的属性
5. const不能修改其值，但如果是对象，可以修改对象内属性

#### 数据类型

typeof null => object。 typeof是操作符，不是函数

![image-20220831110620358](img/image-20220831110620358.png)

左移，右移，相当于乘2和除2，

#### 逻辑与操作符是一种短路操作符，

![image-20220902094952940](img/image-20220902094952940.png)

#### 逻辑或操作符也具有短路的特性

![image-20220902100528597](img/image-20220902100528597.png)

利用这个行为，可以避免给变量赋值 null 或 undefined。比如：

**let myObject = preferredObject || backupObject;** 

**如果 preferredObject 不是 null，则它的值就会赋给**

**myObject；如果 preferredObject 是 null，则 backupObject 的值就会赋给 myObject。**这种模

式在 ECMAScript 代码中经常用于变量赋值，本书后面的代码示例中也会经常用到。

#### 指数运算符

console.log(Math.pow(3, 2); // 9    ===   console.log(3 ** 2); // 9 

![image-20220902101520620](img/image-20220902101520620.png)

#### 全等和不全等操作符

与相等和不相等操作符类似，只不过它们在比较相等时不转换操作数。全等操

作符由 3 个等于号（===）表示，只有两个操作数在不转换的前提下相等才返回 true

#### **for-in**

for-in 语句是一种严格的迭代语句，用于枚举**对象中的非符号键属性**

由于属性是无序的，因此for in 执行后的返回也是无序的

#### for-of

for-of 语句是一种严格的迭代语句，用于遍历**可迭代对象**的元素

for-of 循环会按照可迭代对象的 next()方法产生值的**顺序迭代**元素

**两者区别**：`for in`遍历的是数组的索引（`index`），而`for of`遍历的是数组元素值（`value`）

使用`for in`会遍历数组所有的可枚举属性，包括原型，如果不想遍历原型方法和属性的话，可以在循环内部判断一下，使用`hasOwnProperty()`方法可以判断某属性是不是该对象的实例属性

`for of`遍历的是数组元素值，而且`for of`遍历的只是数组内的元素，不包括原型属性和索引。`for of`适用遍历数/数组对象/字符串/`map`/`set`等拥有迭代器对象（`iterator`）的集合

**`**for in`遍历的是数组的索引（即键名），而`for of`遍历的是数组元素值****

**`for in`总是得到对象的`key`或数组、字符串的下标**

**`for of`总是得到对象的`value`或数组、字符串的值**

### 变量、作用域与内存

#### 传递参数

ECMAScript 中所有函数的参数都是**按值传递**的。这意味着函数外的值会被复制到函数内部的参数

中，就像从一个变量复制到另一个变量一样。**如果是原始值，那么就跟原始值变量的复制一样，如果是**

**引用值，那么就跟引用值变量的复制一样**。对很多开发者来说，这一块可能会不好理解，毕竟变量有按

值和按引用访问，而传参则只有按值传递。

```javascript
function addTen(num) { 
 num += 10; 
 return num; 
} 
let count = 20;
let result = addTen(count); 
console.log(count); // 20，没有变化
console.log(result); // 30
```

```javascript
function setName(obj) { 
 obj.name = "Nicholas"; 
} 
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"
```

```javascript
function setName(obj) { 
 obj.name = "Nicholas"; 
 obj = new Object(); 
 obj.name = "Greg"; 
} 
let person = new Object(); 
setName(person); 
console.log(person.name); // "Nicholas"
//obj指向完了之后，就销毁了，并不会改变传入参数的引用。因此证明传参是按值传递
```

#### 垃圾回收

为了防止垃圾回收频繁进行影响性能，尽量使用已有的对象复用，减少新建，或用对象池管理，也就是事先定一个数组，来管理对象，需要预留足够大的数组空间

### 原始值包装类型

boolean number string

是原始值，同时又有特殊行为，有自己的方法，当这种情况发生时候，以下三步

1. 创建了一个string类型实例
2. 调用实例上的特定方法
3. 销毁实例

```javascript
let s1 = "some text"; 
let s2 = s1.substring(2);
```

**等同于**

```javascript
let s1 = new String("some text"); 
let s2 = s1.substring(2); 
s1 = null;
```

#### 深拷贝与浅拷贝

指的是拷贝后，是否会互相干扰，主要是指引用类型

#### 调用构造函数new对象的时候执行了什么

要创建 Person 的实例，应使用 new 操作符。以这种方式调用构造函数会执行如下操作。

- (1) 在内存中创建一个新对象。
- (2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。
- (3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
- (4) 执行构造函数内部的代码（给新对象添加属性）。
- (5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

### 函数

箭头函数中的this会保留定义该函数时的上下文

husky当我们对代码进行commit操作的时候，就会执行命令，对代码进行格式化，然后再提交。

```
export const massDel = (data: number[]) => axiosRequest.delete<any, any>(API.MASS_DEL, {data:data});//这个传参不一样
```

这个请求要求body里携带一个数组，传参的时候写法不一样

# 适配，scale方式

这个方式的好处是，如果原型设计图是1920*1080的话，那么这么配置完，就完全按照设计图做就行了，不需要再考虑每个控件的适配

```
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url('./images/bg.png') no-repeat;
  background-size: cover;
  .screen {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 1920px;
    height: 1080px;
    background-color: red;
    transform-origin: left top;
  }
}
</style>
```

```
const screenRef = ref();
onMounted(() => {
  screenRef.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
})

//大屏缩放比例函数
const getScale = (w=1920, h=1080) => {
  let ww = window.innerWidth / w;
  let wh = window.innerHeight / h;
  return ww < wh ? ww : wh;
}
```

```
<template>
  <div class="container">
    <div class="screen" ref="screenRef">
      <div class="top">123</div>
      <div class="main">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>
```

