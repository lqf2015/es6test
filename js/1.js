/**
 * Created by jianshan on 16/8/4.
 */
// 1..var 和 let/const的比较
//除了var,我们现在还可以使用两个新的标示符来定义一个变量———let和const.和var 不一样的是,let和const不存在变量提升
//使用var 的例子
var snack = "jserlin";
function getFood(food) {
    if(food){
        var snack = "jserwu";
        return snack;
    }
    // console.log(snack);
    return snack;
}
getFood(false);  //undefined
//用let代替var的时候
let snack2 = "jserlin";
function getFood2(food) {
    if(food){
        let snack2 = "let_jserlin";
        return snack2;
    }
    return snack2;
}
// console.log(getFood2(false)); //jesrlin
/*let 和const是块级作用域因此变量在未被定义之前使用它会产生一个 ReferenceError*/

//用块级作用域代替IIFES
//函数立即表达式 的通常用途是创造一个内部的作用域,在ES6中,我们能够创造一个块作用域而不仅限于函数作用域

//IIFES
(function () {
    var name = "jserlin";
}());
// console.log(food);//ReferenceError
//ES6的块级作用域
{
    let name = "jserlin";
}

// 2..我们经常需要给回调函数维护一个词法作用域的上下文this
function person(name) {
    this.name = name;
}
// person.prototype.prefixName = function (arr) {
//     return arr.map(function (character) {
//         return this.name + character;  //cannot read property 'name' of undefined
//     });
// };
//解决方法。。1  this存在变量中
person.prototype.prefixName = function (arr) {
    var _that = this;
    return arr.map(function (character) {
        return _that.name + character;  //cannot read property 'name' of undefined
    });
};
//解决方法。。2   传递一个合适this的上下文
person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return _that.name + character;  //cannot read property 'name' of undefined
    },this);
};
//解决方法。。3   绑定上下文
person.prototype.prefixName = function (arr) {
    return arr.map(function (character) {
        return _that.name + character;  //cannot read property 'name' of undefined
    }.bind(this));
};

//使用箭头函数this将不会受到影响,并且我们可以重写上面的函数
function person2(name) {
    this.name = name;
}
person2.prototype.prefixName = function (arr) {
  return arr.map(character => this.name + character);
};
//写函数的时候,箭头函数更加简洁并且可以很简单地返回一个值
const arr =[1,2,3,4,5];
// var squares = arr.map(function (x) {
//     return x*x;
// });
const squares = arr.map(x => x*x);
// console.log(squares);

// 3..字符串
  // .includes()和.repeat()
  //判断字符串是否包含某些字符串
  var string ='food';
  var substring = 'foo';
// console.log(string.indexOf(substring) > -1);
// console.log(string.includes(substring));  //es6 方法
//.repeat()
function repeat(string,count) {
    var arr = [];
    while (arr.length < count){
        arr.push(string);
    }
    return arr.join('');
}
//ES6 方法 string.repeat(numberOfRepetitions)

// `` 使用模板字符串可以不用对某些特殊字符进行转义处理,支持换行且不需要额外的处理,支持表达式在${}中
//    模板字符串还支持插入,可以把变量值和字符串连接起来
(function () {
    let text = `this is strig contains "double qutes" which don't nedd to be escaped anymore`;
    const name = 'jserlin';
    const age ="18";
    console.log(`MY name is ${name} and is ${age} years`);
})();








