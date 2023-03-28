import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    static numeroDeCliente = 0;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente
    }

    constructor(cliente, agencia) {
        CuentaCorriente.cantidadCuentas++;
        CuentaCorriente.numeroDeCliente ++;

        this.#cliente = cliente;
        this.numero = CuentaCorriente.numeroDeCliente;
        this.agencia = agencia;
        this.#saldo = 0;

    }

    depositarEnCuenta(valor){
        if (valor>0) 
            this.#saldo += valor;
        return this.#saldo;

    }

    retirarDeCuenta(valor){
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositarEnCuenta(valor);

    }
}