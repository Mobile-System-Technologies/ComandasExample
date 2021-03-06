﻿module ComandasExample {
    'use strict';
    // aqui generamos las rutas para la aplicacion.
    // podemos declarar rutas direfentes para modulos diferentes tambien, dentro de su correspondiente variable, dentro de rutas.
    export module rutas {
        export var routesConfig = ($routeProvider) => {
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
        }
    }
}