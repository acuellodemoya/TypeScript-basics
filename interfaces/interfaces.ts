
/**
 * This file content the examples of the most basic interfaces and concepts
 * in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

interface Person{

    readonly name:string //this property to be only reading
    lastName?:string // ? for opcional params

}

const walk = (person:Person):void => {

    if(person.lastName){
        console.log(`${person.name} ${person.lastName} is walking...`)
    }else{
        console.log(`${person.name} is walking...`)
    }
}

let p1:Person = {name: 'Alejandro', lastName: 'Cuello'}
walk(p1)