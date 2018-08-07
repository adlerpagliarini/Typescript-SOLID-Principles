/*
The Interface segregation principle tells us that many client-specific interfaces are better 
    than one general-purpose interface, which means that we should split our interfaces.
*/

interface IShape4 {
    area(): number;
}
interface RectangleInterface {
    width: number;
    height: number;
}

interface CircleInterface {
    radius: number;
}

interface Serializable {
    serialize(): string;
}
/*
  Using the new interfaces, we are implementing our domain layer in a way that is completely isolated from infrastructure concerns like serialization.
*/
abstract class Shape4 implements IShape4{

    abstract area();

    public getArea() {
        return this.area();
    }
    
}
class Rectangle4 extends Shape4 implements RectangleInterface {

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

class Circle4 extends Shape4 implements CircleInterface {

    public radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

function getSumArea4(shape4s: IShape4[]) {
    return shape4s.reduce((previous, current) => previous + current.area(),0);
}

function getAreaIndividual4(shape4s: IShape4[]) {
    return shape4s.map(shape4 => shape4.area());
}

let rectangle4 = new Rectangle4(5,4);
let circle4 = new Circle4(5);

//Solved using a external function
console.log('External Function: Individual area Rectangle4 & Circle4', getAreaIndividual4([rectangle4, circle4]));
console.log('External Function: Sum areas Rectangle4 & Circle4', getSumArea4([rectangle4, circle4]));
//Solved using a inheritance method
console.log('Rectangle4', rectangle4.getArea(), 'Circle4', circle4.getArea());



/*In the infrastructure layer we can use a new set of entities that deal with serialization:*/
class RectangleDTO implements RectangleInterface, Serializable {

    public width: number;
    public height: number;

    public serialize() {
        return JSON.stringify(this);
    }
}

class CircleDTO implements CircleInterface, Serializable {

    public radius: number;

    public serialize() {
        return JSON.stringify(this);
    }
}

let cDTO = new CircleDTO();
cDTO.radius = 120;


let rDTO = new RectangleDTO();
rDTO.width = 10;
rDTO.height = 10;

console.log('Serialize', rDTO.serialize(), cDTO.serialize());

