"use strict";
{
    function getProperty(obj, key) {
        return obj[key];
    }
    // Example usage:
    const person = { name: "Alice", age: 25 };
    const name = getProperty(person, "name"); // "Alice"
    const age = getProperty(person, "age"); // 25
    console.log(name); // Output: Alice
    console.log(age); // Output: 25
}
