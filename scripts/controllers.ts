/// <reference path="_references.ts" />
module ComandasExample {
    'use strict';  // use strict es una herramienta para escribir mejor javascript, arroja erroes en runtime cuando el javascript
                       // tiene variables sin declarar (ej. var variable1; vs variable1; la segunda no esta delcarada y arroja error cuando use strict esta habilitado).
    /* Recuerden que El modulo principal es donde estaran todos nuestos modulos internos.
        En este caso el Modulo Principal es ComandasExample.
        y el modulo interno es controladores.
        Las palabras reservadas "export" y "module" son propias de typescript (y en un futuro Javascript ES6).
    */
    export module controladores {
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
        comandas.controller("HomeCtrl", ($scope) => {
            $scope.nombre = "Rene";
        }); // de esta forma podemos tener un codigo mas limpio y separado.
        comandas.controller("SegundaCtrl", ($scope, SegundaFactory) => { // En este caso Angular es el encargado de saber quien es SegundaFactory no typescript
            // la inyeccion de modulos sigue de la misma forma, aqui en este caso SegundaFactory esta en el modulo Factorias
            SegundaFactory.getNombre().then((response) => {
                $scope.nombre = response.data.nombre;
            }, function (error) {
                alert(error);            
                });
            $scope.nombre = "Rene";
        });
    }
}