
/**
 * This file content the examples of the most basic classes and concepts
 * in typeScript.
 *
 * this file is part of the course about the fundamentals of
 * TypeScript (TS)
 */

class Vehicle {

    public brand:string //Public, private or protected
    public date: string
    public doors: number

    constructor(brand:string, date:string, doors:number){
        this.brand = brand
        this.date = date
        this.doors = doors
    }

    speedUp():void{
        console.log('Speed Up...')
    }

    brake():void{
        console.log('Brake...')
    }
}

const v1 = new Vehicle('Ford', '12/07/2021', 4)
//v1.speedUp()
//v1.brake()
//console.log(v1)

class Car extends Vehicle {

    constructor(brand:string, date:string){
        super(brand, date, 4)
        
    }
}
const c1 = new Car('Chevy', '12/12/2012')
console.log(c1)
