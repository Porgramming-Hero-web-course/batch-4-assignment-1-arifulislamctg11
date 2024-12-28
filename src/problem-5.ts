
{
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    // Example usage:
    const person = { name: "Alice", age: 25 };

    const name = getProperty(person, "name"); // "Alice"
    const age = getProperty(person, "age");  // 25

    console.log(name); // Output: Alice
    console.log(age);  // Output: 25



}