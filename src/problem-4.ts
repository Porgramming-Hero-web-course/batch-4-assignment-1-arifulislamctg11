{
type Circle = {
    shape: "circle";
    radius: number;
  };
  
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  
  type Shape = Circle | Rectangle;
  
  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius ** 2;
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    throw new Error("Unknown shape type");
  }
  
  // Example usage:
  const myCircle: Circle = { shape: "circle", radius: 5 };
  const myRectangle: Rectangle = { shape: "rectangle", width: 10, height: 4 };
  
  console.log("Circle Area:", calculateShapeArea(myCircle)); // 78.53981633974483
  console.log("Rectangle Area:", calculateShapeArea(myRectangle)); // 40

}  