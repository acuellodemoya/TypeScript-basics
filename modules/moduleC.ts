/**
 * This file content the examples of the most basic concepts about
 * modules in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

const desserts = (dessert:string, ...fruits:string[]):void => {
    console.log(`the ${dessert} contains ${fruits}`)
}

export default desserts