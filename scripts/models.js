var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict';
    // aqui podemos manejar los modelos de la aplicacion.
    /* Los Modelos generalmente se refiere a clases, las cuales son las que sirven de base
            para estructurar el objeto que se necesita manipular, si bien sabemos que JSON
            es lo que se va a mandar a la base de datos, es mas util manipular un objeto OOP
            que solo JSON.
        */
    var Comanda = (function () {
        function Comanda(mesero, area, mesa, cantPersonas, fechaHora, folio, ordenes) {
            // Constructor de la clase
            this._mesero = mesero;
            this._area = area;
            this._mesa = mesa;
            this._cantPersonas = cantPersonas;
            this._fechaHora = fechaHora;
            this._folio = folio;
            this._ordenes = ordenes || new Array(); // especificamos que si orden === null, que guarde un nuevo arreglo de ordenes.
        }
        Object.defineProperty(Comanda.prototype, "mesero", {
            get: function () {
                return this._mesero;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Comanda.prototype, "mesa", {
            get: function () {
                return this._mesa;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Comanda.prototype, "folio", {
            get: function () {
                return this._folio;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Comanda.prototype, "cantPersonas", {
            get: function () {
                return this._cantPersonas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Comanda.prototype, "fechaHora", {
            get: function () {
                return this._fechaHora;
            },
            enumerable: true,
            configurable: true
        });
        Comanda.prototype.agregarOrden = function () {
            var _this = this;
            var ordenes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                ordenes[_i - 0] = arguments[_i];
            }
            ordenes.forEach(function (orden) {
                _this._ordenes.push(orden);
            });
        };
        Comanda.prototype.cerrarComanda = function () {
            var b;
            var p;
            var total;
            var totalB;
            var totalP;
            this._ordenes.forEach(function (orden) {
                orden.bebidas.forEach(function (bebida) {
                    b += bebida.nombre + "\t " + bebida.precio + "\n";
                    totalB += bebida.precio;
                });
                orden.bebidas.forEach(function (bebida) {
                    b += bebida.nombre + "\t " + bebida.precio + "\n";
                    totalB += bebida.precio;
                });
            });
            var s;
            s = ("Folio No: " + this._folio + "\nMesero: " + this.mesero + "\nMesa: " + this.mesa + "\n") +
                ("Fecha: " + this.fechaHora + "\n Cantidad de Personas: " + this.cantPersonas + "\n") +
                ("Pedido:\n\nBebidas: " + b + "\n Total de las Bebidas:\t" + totalB + "\n\n") +
                ("Platillos:  " + p + "\n Total de los Platillos:\t" + totalB + "\n\nTotal: " + total);
            return s;
        };
        return Comanda;
    })();
    ComandasExample.Comanda = Comanda;
})(ComandasExample || (ComandasExample = {}));
var Orden = (function () {
    function Orden(platillos, bebidas, mesa, mesero, noOrden) {
        this._platillos = platillos;
        this._bebidas = bebidas;
        this._mesa = mesa;
        this._mesero = mesero;
        this._noOrden = noOrden;
    }
    Object.defineProperty(Orden.prototype, "mesero", {
        get: function () {
            return this._mesero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orden.prototype, "mesa", {
        get: function () {
            return this._mesa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orden.prototype, "noOrden", {
        get: function () {
            return this._noOrden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orden.prototype, "platillos", {
        get: function () {
            return this._platillos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Orden.prototype, "bebidas", {
        get: function () {
            return this._bebidas;
        },
        enumerable: true,
        configurable: true
    });
    Orden.prototype.agregarPlatillo = function () {
        var _this = this;
        var platillos = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            platillos[_i - 0] = arguments[_i];
        }
        if (platillos) {
            platillos.forEach(function (platillo) {
                _this._bebidas.push(platillo);
            });
        }
    };
    Orden.prototype.agregarBebida = function () {
        var _this = this;
        var bebidas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bebidas[_i - 0] = arguments[_i];
        }
        if (bebidas) {
            bebidas.forEach(function (bebida) {
                _this._bebidas.push(bebida);
            });
        }
    };
    Orden.prototype.cerrarOrden = function () {
        var b;
        var p;
        this._bebidas.forEach(function (bebida) {
            b += bebida.nombre + "\n";
        });
        this._platillos.forEach(function (platillo) {
            p += platillo.nombre + "\n";
        });
        var s;
        s = ("Orden No: " + this.noOrden + "\nMesero: " + this.mesero + "\nMesa: " + this.mesa + "\n") +
            ("Pedido: " + b + p);
        return s;
    };
    return Orden;
})();
exports.Orden = Orden;
var Producto = (function () {
    function Producto(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }
    Object.defineProperty(Producto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "precio", {
        get: function () {
            return this.precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Producto.prototype, "pracio", {
        set: function (precio) {
            this._precio = precio;
        },
        enumerable: true,
        configurable: true
    });
    return Producto;
})();
var Platillo = (function (_super) {
    __extends(Platillo, _super);
    function Platillo(nombre, precio) {
        _super.call(this, nombre, precio);
    }
    Object.defineProperty(Platillo.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platillo.prototype, "precio", {
        get: function () {
            return this.precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Platillo.prototype, "pracio", {
        set: function (precio) {
            this._precio = precio;
        },
        enumerable: true,
        configurable: true
    });
    return Platillo;
})(Producto);
exports.Platillo = Platillo;
var Bebida = (function (_super) {
    __extends(Bebida, _super);
    function Bebida(nombre, precio) {
        _super.call(this, nombre, precio);
    }
    Object.defineProperty(Bebida.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bebida.prototype, "precio", {
        get: function () {
            return this.precio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bebida.prototype, "pracio", {
        set: function (precio) {
            this._precio = precio;
        },
        enumerable: true,
        configurable: true
    });
    return Bebida;
})(Producto);
exports.Bebida = Bebida;
//# sourceMappingURL=models.js.map