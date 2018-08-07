interface IShape {
    area(): number;
}

abstract class Shape implements IShape{

    abstract area();

    public getArea() {
        return this.area();
    }
}
class Rectangle extends Shape {

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

class Circle extends Shape {

    public radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    public area() {
        return this.radius * this.radius * Math.PI;
    }
}

function getSumArea(shapes: IShape[]) {
    return shapes.reduce((previous, current) => previous + current.area(),0);
}

function getAreaIndividual(shapes: IShape[]) {
    return shapes.map(shape => shape.area());
}

let rectangle = new Rectangle(5,4);
let circle = new Circle(5);

//Solved using a external function
console.log('External Function: Individual area Rectangle & Circle', getAreaIndividual([rectangle, circle]));
console.log('External Function: Sum areas Rectangle & Circle', getSumArea([rectangle, circle]));
//Solved using a inheritance method
console.log('Rectangle', rectangle.getArea(), 'Circle', circle.getArea());
