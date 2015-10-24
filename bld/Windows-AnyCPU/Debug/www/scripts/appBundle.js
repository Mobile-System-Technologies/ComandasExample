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
                .when("/segunda", {
                controller: "SegundaCtrl",
                templateUrl: "views/segunda.html"
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
        // gracias a que exportamos el modulo Comandas, podemos accesar a el.
        comandas.controller("HomeCtrl", function ($scope) {
            $scope.nombre = "Rene";
        }); // de esta forma podemos tener un codigo mas limpio y separado.
        comandas.controller("SegundaCtrl", function ($scope, SegundaFactory) {
            // la inyeccion de modulos sigue de la misma forma, aqui en este caso SegundaFactory esta en el modulo Factorias
            SegundaFactory.getNombre().then(function (response) {
                $scope.nombre = response.data.nombre;
            }, function (error) {
                alert(error);
            });
            $scope.nombre = "Rene";
        });
    })(controladores = ComandasExample.controladores || (ComandasExample.controladores = {}));
})(ComandasExample || (ComandasExample = {}));
/// <reference path="_references.ts" />
var ComandasExample;
(function (ComandasExample) {
    'use strict';
    var factorias;
    (function (factorias) {
        /* En este caso, podemos separar las factorias de los controladores
            Y tener nuestro codigo modularizado y guapeton.
        */
        var comandas;
        comandas = ComandasExample.modulos.Comandas;
        comandas.factory("SegundaFactory", function ($http) {
            /* La Sintaxis () => { }  es conocida como una expresion Lambda, en typescript es equivalente a esto: function () { }
                El beneficio de las expresiones lambda es que permiten hacer invocaciones en menos lineas de codigo cuando tiene
                sentido invocar una expresion lambda, no es tampoco para que se use como si fuera el pan de cada dia.
            */
            return {
                getNombre: function () {
                    return $http.get("scripts/nombre.json");
                    /* SegundaFactory es un objeto de javascript { }, en este caso, getNombre es una propiedad de SegundaFactory
                        que si bien es una funcion, es una propiedad, si se preguntan por que un return dentro de un return,
                        Es para el funcionamiento asincronico del $http.get(), regresa un objeto de tipo promesa (dentro de la propiedad getNombre), para que se pueda
                        utilizar la aplicacion en lugar de que se congele al pedir los datos al servidor.
                        Lo que significa que cada que se mande a llamar getNombre del objeto SegundaFactory en realidad se esta invocando el metodo $http.get().
                    */
                }
            };
        });
    })(factorias = ComandasExample.factorias || (ComandasExample.factorias = {}));
})(ComandasExample || (ComandasExample = {}));
var ComandasExample;
(function (ComandasExample) {
    'use strict';
})(ComandasExample || (ComandasExample = {}));
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="modules.ts" />
/// <reference path="routes.ts" />
/// <reference path="main.ts" />
/// <reference path="index.ts" />
/// <reference path="controllers.ts" />
/// <reference path="factories.ts" />
/// <reference path="models.ts" />
/*
   El archivo _references.ts es una especie de recopilacion de archivos para que el compilador sepa una serie de cosas.
    1.- Que sepa el orden de importacion.
    2.- Permitir que el Intellisense nos ayude con el autocompletado junto con el debugger.
    3.- Referenciar Librerias o archivos .d.ts
*/ 
//# sourceMappingURL=appBundle.js.map