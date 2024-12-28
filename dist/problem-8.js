"use strict";
{
    function validateKeys(obj, keys) {
        return keys.every((key) => key in obj);
    }
    // Example usage:
    const myObject = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(myObject, ["name", "age"])); // true
    console.log(validateKeys(myObject, ["name", "height"])); // false
}
