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
    var modelos;
    (function (modelos) {
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
            Comanda.prototype.agregarOrden = function (ordenes) {
                var _this = this;
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
                    orden.platillos.forEach(function (platillo) {
                        p += platillo.nombre + "\t " + platillo.precio + "\n";
                        totalP += platillo.precio;
                    });
                });
                total = totalB + totalP;
                var s;
                s = ("Folio No: " + this._folio + "\nMesero: " + this.mesero + "\nMesa: " + this.mesa + "\n") +
                    ("Fecha: " + this.fechaHora + "\n Cantidad de Personas: " + this.cantPersonas + "\n") +
                    ("Pedido:\n\n\tBebidas: " + b + "\n Total de las Bebidas:\t" + totalB + "\n\n\t") +
                    ("Platillos:  " + p + "\n Total de los Platillos:\t" + totalP + "\n\nTotal: " + total);
                return s;
            };
            return Comanda;
        })();
        modelos.Comanda = Comanda;
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
            Orden.prototype.agregarPlatillo = function (platillos) {
                var _this = this;
                if (platillos) {
                    platillos.forEach(function (platillo) {
                        _this._bebidas.push(platillo);
                    });
                }
            };
            Orden.prototype.agregarBebida = function (bebidas) {
                var _this = this;
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
        modelos.Orden = Orden;
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
        modelos.Platillo = Platillo;
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
        modelos.Bebida = Bebida;
    })(modelos = ComandasExample.modelos || (ComandasExample.modelos = {}));
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict';
    // aqui podemos declarar los modulos de angular y exponerlos a Comandas Example
    var modulos;
    (function (modulos) {
        modulos.Comandas = angular.module("Comandas", ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']);
    })(modulos = ComandasExample.modulos || (ComandasExample.modulos = {}));
})(ComandasExample || (ComandasExample = {}));
var ComandasExample;
(function (ComandasExample) {
    'use strict';
    // aqui generamos las rutas para la aplicacion.
    // podemos declarar rutas direfentes para modulos diferentes tambien, dentro de su correspondiente variable, dentro de rutas.
    var rutas;
    (function (rutas) {
        rutas.routesConfig = function ($routeProvider) {
            $routeProvider.when("/", {
                controller: "HomeCtrl",
                templateUrl: "views/home.html"
            })
                .when("/home", {
                controller: "HomeCtrl",
                templateUrl: "views/home.html"
            })
                .when("/comandas", {
                controller: "ComandasCtrl",
                templateUrl: "views/comandas.html"
            })
                .when("/ordenes", {
                controller: "OrdenesCtrl",
                templateUrl: "views/ordenes.html"
            })
                .otherwise({
                redirectTo: "/home",
                templateUrl: "views/home.html"
            });
        };
    })(rutas = ComandasExample.rutas || (ComandasExample.rutas = {}));
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict';
    // Archivo principal para nuestra aplicacion (y no el dispositivo).
    // si queremos inicializar cosas de angular, winjs, backbone, etc. se puede realizar aqui.
    ComandasExample.comandas = ComandasExample.modulos.Comandas.config(ComandasExample.rutas.routesConfig);
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var ComandasExample;
(function (ComandasExample) {
    "use strict";
    /* Este es el archivo de entrada principal de la aplicacion cuando se abre en el dispositivo.
        Aqui se inicializa la aplicacion como tal y se registran los eventos que manejan cuando el dispositivo
        esta listo (cuando la aplicacion ya puede ser cargada), cuando se pausa y cuando se resume.
        Este archivo mas que nada es para inicializar plugins que tienen que ver con el hardware del dispositivo.
        digase plugin de la camara, plugin de almacenamiento local, microfono, vibrador etc.
        Lo que es de el framework o libreria de javascript utilizada, se puede manejar en otro script aparte, no tien que ser aqui.
        en lo posible este archivo debe tener la menor cantidad de lineas de codigo posible.
    */
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = ComandasExample.Application || (ComandasExample.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict'; // use strict es una herramienta para escribir mejor javascript, arroja erroes en runtime cuando el javascript
    // tiene variables sin declarar (ej. var variable1; vs variable1; la segunda no esta delcarada y arroja error cuando use strict esta habilitado).
    /* Recuerden que El modulo principal es donde estaran todos nuestos modulos internos.
        En este caso el Modulo Principal es ComandasExample.
        y el modulo interno es controladores.
        Las palabras reservadas "export" y "module" son propias de typescript (y en un futuro Javascript ES6).
    */
    var controladores;
    (function (controladores) {
        /* Cuando exportamos el modulo, significa que estamos exponiendolo al modulo superior inmediato.
            por asi decirlo, si no existiera la palabra export en module controladores,
            ComandasExample.controladores marcaria error (no estaria disponible en el modulo superior inmediato)
            es por eso que los modulos internos se exponen. el modularizar la aplicacion permite que se puedan separar
            responsabilidades, en este caso estamos separando toda la responsabilidad de los controladores de ComandasExample.
            el responsable de los controladores ahora es controladores.
        */
        var comandas;
        comandas = ComandasExample.modulos.Comandas;
        var Comanda = ComandasExample.modelos.Comanda;
        var Orden = ComandasExample.modelos.Orden;
        var Platillo = ComandasExample.modelos.Platillo;
        var Bebida = ComandasExample.modelos.Bebida;
        // gracias a que exportamos el modulo Comandas, podemos accesar a el.
        comandas.controller("HomeCtrl", function ($scope) {
        }); // de esta forma podemos tener un codigo mas limpio y separado.
        comandas.controller("ComandasCtrl", function ($scope) {
            var _comanda;
            var _orden1;
            var _orden2;
            var _platillos1 = [new Platillo("aguachiles", 50.89), new Platillo("Higado EncebollinChile", 40.98)];
            var _bebidas1 = [new Bebida("Refresco", 15.21), new Bebida("Agua Natural", 16.50)];
            var _platillos2 = [new Platillo("aguachiles", 50.89), new Platillo("Higado EncebollinChile", 40.98)];
            var _bebidas2 = [new Bebida("Refresco", 15.21), new Bebida("Agua Natural", 16.50)];
            var _ordenes = [];
            var comForm = document.getElementById('comForm');
            var cerrarCom = document.getElementById('cerrarCom');
            var abrirComanda = function () {
                _orden1 = new Orden(_platillos1, _bebidas1, $scope.mesa, $scope.mesero, 1999);
                _orden2 = new Orden(_platillos2, _bebidas2, $scope.mesa, $scope.mesero, 1992);
                _ordenes.push(_orden1);
                _ordenes.push(_orden2);
                _comanda = new Comanda($scope.mesero, $scope.area, $scope.mesa, $scope.cantPersonas, new Date().toLocaleString(), $scope.folio, _ordenes);
                var cercom = document.getElementById('cerrarCom');
                angular.element(cercom).css('visibility', 'visible');
                console.log(_comanda);
            };
            var cerrarComanda = function () {
                console.log(_comanda);
                var comCerrada = _comanda.cerrarComanda();
                console.log(comCerrada);
                var comandaCerrada = document.getElementById('comandaCerrada');
                comandaCerrada.innerText = comCerrada;
            };
            comForm.addEventListener('submit', abrirComanda, false);
            cerrarCom.addEventListener('click', cerrarComanda, false);
        });
        comandas.controller("OrdenesCtrl", function ($scope) {
        });
    })(controladores = ComandasExample.controladores || (ComandasExample.controladores = {}));
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict';
})(ComandasExample || (ComandasExample = {}));
/// <reference path="models.ts" />
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="modules.ts" />
/// <reference path="routes.ts" />
/// <reference path="main.ts" />
/// <reference path="index.ts" />
/// <reference path="controllers.ts" />
/// <reference path="factories.ts" />
/*
   El archivo _references.ts es una especie de recopilacion de archivos para que el compilador sepa una serie de cosas.
    1.- Que sepa el orden de importacion.
    2.- Permitir que el Intellisense nos ayude con el autocompletado junto con el debugger.
    3.- Referenciar Librerias o archivos .d.ts
*/ 
//# sourceMappingURL=appBundle.js.map