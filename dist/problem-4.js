"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius ** 2;
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("Unknown shape type");
    }
    // Example usage:
    const myCircle = { shape: "circle", radius: 5 };
    const myRectangle = { shape: "rectangle", width: 10, height: 4 };
    console.log("Circle Area:", calculateShapeArea(myCircle)); // 78.53981633974483
    console.log("Rectangle Area:", calculateShapeArea(myRectangle)); // 40
}
