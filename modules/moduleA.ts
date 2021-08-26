/**
 * This file content the examples of the most basic concepts about
 * modules in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

export const name:string = 'Alejandro'

export const petInfo = (name: string, age?: number, type: string = 'dog'):string => {
    if(age){
        return `Hi! i'm ${name} and i'm ${age} years old... I'm a ${type}`
    }else{
        return `Hi! i'm ${name} and i'm a ${type}...`
    }
}


