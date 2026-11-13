var a = 10;
var b = 3; 

var suma = a + b;
console.log (suma);

var resta = a - b; 
console.log (resta);

var producto = a * b;
console.log (producto);

var cociente = a / b;
console.log (cociente);

var resto = a % b; 
console.log (resto);

var potencia = a **b; 
console.log (potencia);

let intentos = 0;
intentos ++;
console.log(intentos);
intentos ++;
console.log(intentos);
intentos ++;
console.log(intentos);
intentos --;
console.log(intentos);

let saldo = 100; 
saldo += 50;
console.log(saldo);
saldo -= 30; 
console.log(saldo);
saldo *= 2;
console.log(saldo);

let precio = 200000;
precio *= 1.19;
console.log(precio);

// Ejercicio 5: predice y verifica
console.log("5" + 3);
console.log("5" - 3);
console.log(10 % 3);
console.log(2 ** 3);

// Ejercicio 6 (QA): porcentaje de éxito
let totalTests = 20;
let fallidos = 4;
let pasaron = totalTests - fallidos;
let porcentaje = (pasaron / totalTests) * 100;
console.log(pasaron);
console.log(porcentaje);