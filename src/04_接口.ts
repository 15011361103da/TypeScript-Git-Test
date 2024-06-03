(function(){
    interface Animal{
        name:string;

    }
    class Dog implements Animal {
        name: string;
        constructor(name: string){
            this.name = name
        }
    }
})() 
