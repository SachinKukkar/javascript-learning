// Stack Memory and Heap Memory

// Stack memory used for Primitive data types and Heap Memory is used for Non-Primitive data types

let myYoutubeName = "nullpointeracademy"

let anotherName = myYoutubeName


anotherName = "academyofDSA"

console.log(myYoutubeName)
console.log(anotherName)


let user1 = {
    email : 'user@ybl.com',
    upi : "user@ybl"
}

let user2 = user1

user2.email = "newuser2@ybl.com"

console.log(user1.email);
console.log(user2.email);