/// <reference path="_references.ts" />
// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
module ComandasExample {
    "use strict";
    /* Este es el archivo de entrada principal de la aplicacion cuando se abre en el dispositivo.
        Aqui se inicializa la aplicacion como tal y se registran los eventos que manejan cuando el dispositivo
        esta listo (cuando la aplicacion ya puede ser cargada), cuando se pausa y cuando se resume.
        Este archivo mas que nada es para inicializar plugins que tienen que ver con el hardware del dispositivo.
        digase plugin de la camara, plugin de almacenamiento local, microfono, vibrador etc.
        Lo que es de el framework o libreria de javascript utilizada, se puede manejar en otro script aparte, no tien que ser aqui.
        en lo posible este archivo debe tener la menor cantidad de lineas de codigo posible.
    */
    export module Application {
        export function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }

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

    }

    window.onload = function () {
        Application.initialize();
    }
}
