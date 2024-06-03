"use strict";
// 抽象类是专门用来被继承的，使用abstract 修饰的类为抽象类，抽象类不能直接new，
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    sayHello() {
    }
}
