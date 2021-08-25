/**
 * This file content the examples of the most basic functions
 * in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

//normal function
function add(a:number, b:number):number {
    return a + b;
}
let c:number = add(5,5);
//console.log(c);

/********************************************************************************************************** */
//Arrow function
const greeting = (name:string):void => {
    console.log(`Hi, ${name}!`);
};
//greeting('Alejandro');

/********************************************************************************************************** */
const personalInfo = (name:string, lastName:string, age?:number):void => {
    //if i use the ? symbol between the parameter and is type,
    //it means that parameter is optional
    if(age){
        console.log(`Hi, i am ${name} ${lastName}, i'm ${age} years old...`);
    }else{
        console.log(`Hi, i am ${name} ${lastName}...`);
    }
};
//personalInfo('Alejandro', 'Cuello', 20); // with the third parameter
//personalInfo('Alejandro', 'Cuello De Moya'); //without the third parameter

/*********************************************************************************************************** */

const petInfo = (name: string, age?: number, type: string = 'dog'):string => {
    if(age){
        return `Hi! i'm ${name} and i'm ${age} years old... I'm a ${type}`;
    }else{
        return `Hi! i'm ${name} and i'm a ${type}...`;
    }
};
//console.log(petInfo('Toby', 9));
//console.log(petInfo('Otto', 2, 'Cat'));

/*********************************************************************************************************** */
//If i use the ...<variableName>:<type>[], it means that i can insert multiple parameters of same data type
const desserts = (dessert:string, ...fruits:string[]):void => {
    console.log(`the ${dessert} contains ${fruits}`);
};
