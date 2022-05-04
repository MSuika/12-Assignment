"use strict"

var kaina = prompt("Kokia prekės kaina?")
var pvmemas = kaina * 0.21
var bePvm = kaina - (kaina * 0.21)


// if (isNaN(kaina)) {
//         prompt("Kokia prekės kaina?")
// }


console.log("Prekės kaina su PVM: " + kaina + " €")
console.log("PVM: " + pvmemas.toFixed(2) + " €")
console.log("Prekės kaina be PVM: " + bePvm.toFixed(2) + " €")