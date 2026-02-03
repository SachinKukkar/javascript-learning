const accountId = 141
let accountEmail = "sachin@nvidia.com"
// var accountPass = "12345"   // prefer not to use => because of issue in block scope and functional scope
accCity = "JPR"   // can be done but not a good practice

let accountState;

// accountId = 111   not allowed
accountEmail = "sachin@google.com"
accountPass = '123456gs'
accCity = "BGLR"

console.table([accountId,accountEmail,accountPass,accCity,accountState])
