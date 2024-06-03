// public 修饰的属性可以在任意位置随意修改
// private 修饰的属性只能在类中修改
// protected 只能在当前类和子类中访问 
(function(){
    class Person{
        private name: string;
        private age: number;
        constructor(name: string, age: number){
            this.name = name
            this.age = age
        }
        getName(){
            return this.name
        }
        set _name(value:string){
            this.name =value
        }

    }
    let p = new Person('asdsad',23)
    p._name = 'junzong'
    console.log(p)
})()
