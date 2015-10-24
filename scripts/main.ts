/// <reference path="_references.ts" />
module ComandasExample {
    'use strict';
    // Archivo principal para nuestra aplicacion (y no el dispositivo).
    // si queremos inicializar cosas de angular, winjs, backbone, etc. se puede realizar aqui.
    export var comandas = modulos.Comandas.config(rutas.routesConfig);
}