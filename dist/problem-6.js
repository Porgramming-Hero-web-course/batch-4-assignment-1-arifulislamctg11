"use strict";
{
    function updateProfile(profile, updates) {
        return Object.assign(Object.assign({}, profile), updates);
    }
    // Example usage:
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const updatedProfile = updateProfile(myProfile, { age: 26 });
    console.log(updatedProfile); // { name: "Alice", age: 26, email: "alice@example.com" }
}
