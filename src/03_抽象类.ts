// 抽象类是专门用来被继承的，使用abstract 修饰的类为抽象类，抽象类不能直接new，
abstract class Animal {
    name: string;
    constructor(name: string){
        this.name = name
    }
    // abstract修饰的方法为抽象方法，需要在子类中重写
    abstract sayHello():void
}
class Dog extends Animal {
    age: number;
    constructor(name: string, age: number){
        super(name)
        this.age = age
    }
    sayHello(): void {
        
    }
}