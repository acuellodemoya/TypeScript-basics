/**
 * This file content the examples of the most basic concepts about
 * generic types in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

//generic variable
let languaje:any = "TypeScript"

//generic functions
function genericFunction<T>(data:T):T{
    return data
}

const genericFunction2 = <T> (data:T):T =>{
    return data
}

//console.log(genericFunction('Alejandro'))
//console.log(genericFunction('Hello, world!'))

//Generic Class
class Person<T>{
    name:string
    age:T

    constructor(name:string, age:T){
        this.name = name
        this.age = age
    }
}

let p1 = new Person('Alejandro', '20')
//console.log(p1)

//Generic Interfaces
interface Car<T> {
    model: string
    age: T
}
let c1:Car<string> = {model:'Mustang', age:'2000'}
console.log(c1)
