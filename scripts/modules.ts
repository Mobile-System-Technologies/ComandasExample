/// <reference path="_references.ts" />
module ComandasExample {
    'use strict';
    // aqui podemos declarar los modulos de angular y exponerlos a Comandas Example
    export module modulos {
        export var Comandas = angular.module("Comandas", ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngSanitize']);
    }
}