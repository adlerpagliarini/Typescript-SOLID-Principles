class RectangleN {
    public width: number;
    public height: number;
}

class CircleN {
    public radius: number;
}

function getAreaN(shapes: (RectangleN|CircleN)[]) {
    return shapes.reduce(
        (previous, current) => {
            if (current instanceof RectangleN) {
                return current.width * current.height;
            } else if (current instanceof CircleN) {
                return current.radius * current.radius * Math.PI;
            } else {
                throw new Error("Unknown shape!")
            }
        },
        0
    );
    /*
        Always that you have to add a new geometric element, you will need to change this method, 
        Even though this code is extensible, to extend it we must have to change the parms that could 
        been acceptable and add a new IF to deal with this new element.
        So this code is extensible but is not closed for modification.
    */
}