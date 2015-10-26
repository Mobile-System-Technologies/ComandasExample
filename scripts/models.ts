/// <reference path="_references.ts" />
module ComandasExample {
    'use strict';
    // aqui podemos manejar los modelos de la aplicacion.
    /* Los Modelos generalmente se refiere a clases, las cuales son las que sirven de base
            para estructurar el objeto que se necesita manipular, si bien sabemos que JSON
            es lo que se va a mandar a la base de datos, es mas util manipular un objeto OOP
            que solo JSON.
        */
    export module modelos {
        export class Comanda {
            // Clase similar a las clases de Java o C#, el encapsulado y el tipado estricto (tipo de dato).
            // de los atributos es opcional.
            private _mesero: string;
            private _area: string;
            private _mesa: number;
            private _cantPersonas;
            private _fechaHora: Date;
            private _folio: number;
            private _ordenes: Orden[];
            private _total: number;

            constructor(mesero, area, mesa, cantPersonas, fechaHora, folio, ordenes?) { // con ? queremos decir que es opcional
                // Constructor de la clase
                this._mesero = mesero;
                this._area = area;
                this._mesa = mesa;
                this._cantPersonas = cantPersonas;
                this._fechaHora = fechaHora;
                this._folio = folio;
                this._ordenes = ordenes || new Array<Orden>(); // especificamos que si orden === null, que guarde un nuevo arreglo de ordenes.
            }
            public get mesero() {
                return this._mesero
            }
            public get mesa() {
                return this._mesa;
            }
            public get folio() {
                return this._folio;
            }
            public get cantPersonas() {
                return this._cantPersonas;
            }
            public get fechaHora() {
                return this._fechaHora;
            }

            agregarOrden(ordenes: Orden[]) {
                ordenes.forEach((orden) => {
                    this._ordenes.push(orden);
                });
            }
            cerrarComanda(): string {
                var listaBebidas: string = "";
                var listaPlatillos: string = "";
                var totalPlatillos = 0;
                var totalBebidas = 0;
                var totalFinal = 0;
                this._ordenes.forEach((orden) => {
                    orden.bebidas.forEach((bebida) => {
                        listaBebidas += `${bebida.nombre}\t\t${bebida.precio}\n`;
                        totalBebidas += bebida.precio;
                    });
                    orden.platillos.forEach((platillo) => {
                        listaPlatillos += `${platillo.nombre}\t\t${platillo.precio}\n`;
                        totalPlatillos += platillo.precio;
                    });
                });
                totalFinal = totalBebidas + totalPlatillos;
                var s: string;
                s = `Folio No: ${this._folio}\nMesero: ${this.mesero}\nMesa: ${this.mesa}\n` +
                `Fecha: ${this.fechaHora}\n Cantidad de Personas: ${this.cantPersonas}\n` +
                `Pedido:\n\n\tBebidas: ${listaBebidas}\n Total de las Bebidas:\t${totalBebidas.toFixed(2) }\n\n\t` +
                `Platillos:  ${listaPlatillos}\n Total de los Platillos:\t${totalPlatillos.toFixed(2)}\n\n\Total: ${totalFinal.toFixed(2) }`;
                return s;
            }
        }

        export class Orden {
            private _platillos: Platillo[];
            private _bebidas: Bebida[];
            private _mesero;
            private _noOrden: number;
            private _mesa;
            constructor(platillos: Platillo[], bebidas: Bebida[], mesa, mesero, noOrden) {
                this._platillos = platillos;
                this._bebidas = bebidas;
                this._mesa = mesa;
                this._mesero = mesero;
                this._noOrden = noOrden;
            }

            public get mesero() {
                return this._mesero
            }
            public get mesa() {
                return this._mesa;
            }
            public get noOrden() {
                return this._noOrden;
            }
            public get platillos() {
                return this._platillos;
            }
            public get bebidas() {
                return this._bebidas;
            }

            agregarPlatillo(platillos: Platillo[]): void {
                if (platillos) {
                    platillos.forEach((platillo) => {
                        this._bebidas.push(platillo);
                    });
                }
            }

            agregarBebida(bebidas: Bebida[]): void {
                if (bebidas) {
                    bebidas.forEach((bebida) => {
                        this._bebidas.push(bebida);
                    });
                }
            }
            cerrarOrden() {
                var b: string = "";
                var p: string = "";
                this._bebidas.forEach((bebida) => {
                    b += `${bebida.nombre}\n`;
                });
                this._platillos.forEach((platillo) => {
                    p += `${platillo.nombre}\n`;
                });
                var s: string;
                s = `Orden No: ${this.noOrden}\nMesero: ${this.mesero}\nMesa: ${this.mesa}\n` +
                `Pedido:\n${b}${p}`;
                return s;
            }

        }

        abstract class Producto {
            // declaramos nuestra clase abstracta de la cual heredaran nuestros productos
            protected _nombre: string;
            protected _precio: number;

            constructor(nombre, precio) {
                this._nombre = nombre;
                this._precio = precio;
            }

            public get nombre(): string {
                return this._nombre;
            }
            public set nombre(nombre: string) {
                this._nombre = nombre;
            }
            public get precio() {
                return this._precio;
            }
            public set precio(precio) {
                this._precio = precio;
            }

        }

        export class Platillo extends Producto {
            constructor(nombre, precio) {
                super(nombre, precio);
            }

            get nombre(): string {
                return this._nombre;
            }
            set nombre(nombre: string) {
                this._nombre = nombre;
            }
            get precio() {
                return this._precio;
            }
            set precio(precio) {
                this._precio = precio;
            }
        }

        export class Bebida extends Producto {
            constructor(nombre, precio) {
                super(nombre, precio);
            }

            get nombre(): string {
                return this._nombre;
            }
            set nombre(nombre: string) {
                this._nombre = nombre;
            }
            get precio() {
                return this._precio;
            }
            set precio(precio) {
                this._precio = precio;
            }
        }
    }
}