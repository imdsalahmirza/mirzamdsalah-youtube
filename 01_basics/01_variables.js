const accountId = 144553
let accountEmail = "salahmirza@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "mumbai"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState])