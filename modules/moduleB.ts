/**
 * This file content the examples of the most basic concepts about
 * generic types in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */
import { name, petInfo } from './moduleA'
import desserts from './moduleC'

console.log(name)

console.log(petInfo('Toby', 10))
 desserts('dessert', 'mango')