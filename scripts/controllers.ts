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
        var Comanda = modelos.Comanda;
        var Orden = modelos.Orden
        var Platillo = modelos.Platillo;
        var Bebida = modelos.Bebida;
        var _comanda: modelos.Comanda;
        var _orden1: modelos.Orden;
        var _orden2: modelos.Orden;
        // inicializamos por el momento lo que se va a usar
        //en produccion esto no se hara ya que los objetos se iran cnstruyendo conforme se vallan pidiendo.
        var _platillos1 = [new Platillo("aguachiles", 50.89), new Platillo("Higado EncebollinChile", 40.98)];
        var _bebidas1 = [new Bebida("Refresco", 15.21), new Bebida("Agua Natural", 16.50)];
        var _platillos2 = [new Platillo("Camarones Mojo de Ajo", 50.89), new Platillo("Enchiladas", 40.98)];
        var _bebidas2 = [new Bebida("Refresco", 15.21), new Bebida("Refresco Dieta", 15.60)];
        var _ordenes = [];
        var fecha = new Date().toLocaleString();
        // gracias a que exportamos el modulo Comandas, podemos accesar a el.
        comandas.controller("HomeCtrl", function($scope) {
            
        }); // de esta forma podemos tener un codigo mas limpio y separado.
        comandas.controller("ComandasCtrl", function ($scope) {
            // controlador de la vista de comandas
            var comForm = document.getElementById('comForm');
            var cerrarCom = document.getElementById('cerrarCom');
            _orden1 = new Orden(_platillos1, _bebidas1, $scope.mesa, $scope.mesero, 1999);
            _orden2 = new Orden(_platillos2, _bebidas2, $scope.mesa, $scope.mesero, 1992);
            _ordenes.push(_orden1);
            _ordenes.push(_orden2);
            //agregamos las ordenes a el arreglo que usaremos en la comanda de ejemplo
            var abrirComanda = function () {
                _comanda = new Comanda($scope.mesero, $scope.area, $scope.mesa, $scope.cantPersonas, fecha, $scope.folio, _ordenes);
                //creamos un objeto tipo comanda
                var cercom = document.getElementById('cerrarCom');
                angular.element(cercom).css('visibility', 'visible');
                // una vez creado el objeto damos visibilidad al boton de cerrar la comanda.
            };

            var cerrarComanda = function () {
                // mandamos a cerrar la comanda
                var comCerrada = _comanda.cerrarComanda();
                // cerrar comanda nos regresa un string
                var comandaCerrada = document.getElementById('comandaCerrada');
                comandaCerrada.innerText = comCerrada; // mostramos el contenido de la comanda listo para el cobro en caja
                // en produccion en lugar de solo generar un string, se va a mandar a imprimir ese string.
                _comanda = null; // liberamos la comanda para cuando se quiera crear una nueva
                var cercom = document.getElementById('cerrarCom');
                angular.element(cercom).css('visibility', 'hidden'); //escondemos el boton de cerrar comanda.
                
            };
            comForm.addEventListener('submit', abrirComanda, false);
            cerrarCom.addEventListener('click', cerrarComanda, false);
        });
        comandas.controller("OrdenesCtrl", ($scope) => {

        });
    }
}