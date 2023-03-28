/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo', '1325444', '2013254448');
console.log(cliente)
const cliente2 = new Cliente('Maria', '22222', '284544125');
console.log(cliente2)

const cuentaDeLeonardo = new CuentaCorriente(cliente, '001');
const cuentaDeMaria = new CuentaCorriente(cliente2, '001');

let saldo = cuentaDeLeonardo.depositarEnCuenta(150);
console.log(CuentaCorriente.cantidadCuentas)

console.log('El Saldo de la cuenta (CuentaLeonardo) es '+saldo);

console.log(cuentaDeLeonardo.cliente, cuentaDeLeonardo);
console.log(cuentaDeMaria.cliente, cuentaDeMaria);

// if (cuentaDeMaria.cliente) 
//     console.log(cuentaDeMaria.cliente)
// else
//     console.log(cuentaDeMaria)


// cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);

// let saldoMaria = cuentaDeMaria.verSaldo();
// console.log('El Saldo actual de la (CuentaMaria) es '+saldoMaria);

// let saldoLeonardo = cuentaDeLeonardo.verSaldo();
// console.log('El Saldo actual de la (CuentaLeonardo) es '+saldoLeonardo);

