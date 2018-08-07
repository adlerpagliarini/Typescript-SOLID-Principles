/*
The interface segregation principle helps us prevent violations of the single responsibility principle and the separation of concerns principle.
*/

interface IShape4N {
    area(): number;
    serialize() : string;
    /* 
    The problem is that adding a method named serialize to the Shape interface is a violation of the SoC principle and the single responsibility principles. 
    The Shape is a business concern and being serializable is an infrastructure concern. We shouldn’t mix these two concerns in the same interface.
    */
}

abstract class Shape4N implements IShape4N{

    abstract area();

    public getArea() {
        return this.area();
    }

    public serialize(): string {
        return JSON.stringify(this);
    }    
}
class Rectangle4N extends Shape4N {

    public width: number;
    public height: number;

    constructor(width: number, height: number){
        super();
        this.width = width;
        this.height = height;
    }

    public area() {
        return this.width * this.height;
    }
}

class Circle4N extends Shape4N {

    public radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

function getSumArea4N(shapes: IShape4N[]) {
    return shapes.reduce((previous, current) => previous + current.area(),0);
}

function getAreaIndividual4N(shapes: IShape4N[]) {
    return shapes.map(shape4N => shape4N.area());
}

let rectangle4N = new Rectangle4N(5,4);
let circle4N = new Circle4N(5);

//Using a external function
console.log('External Function: Individual area Rectangle4N & Circle4N', getAreaIndividual4N([rectangle4N, circle4N]));
console.log('External Function: Sum areas Rectangle4N & Circle4N', getSumArea4N([rectangle4N, circle4N]));
//Using a inheritance method
console.log('Rectangle4N', rectangle4N.getArea(), 'Circle4N', circle4N.getArea());
console.log('Serialize', rectangle4N.serialize(), circle4N.serialize());
