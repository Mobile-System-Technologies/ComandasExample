/// <reference path="_references.ts" />
module ComandasExample {
    'use strict';
    export module factorias {
        /* En este caso, podemos separar las factorias de los controladores
            Y tener nuestro codigo modularizado y guapeton.
        */
        var comandas;
        comandas = ComandasExample.modulos.Comandas;
        comandas.factory("SegundaFactory", ($http) => { 
            /* La Sintaxis () => { }  es conocida como una expresion Lambda, en typescript es equivalente a esto: function () { } 
                El beneficio de las expresiones lambda es que permiten hacer invocaciones en menos lineas de codigo cuando tiene
                sentido invocar una expresion lambda, no es tampoco para que se use como si fuera el pan de cada dia.
            */
            return {
                getNombre: () => {
                    return $http.get("scripts/nombre.json");
                    /* SegundaFactory es un objeto de javascript { }, en este caso, getNombre es una propiedad de SegundaFactory
                        que si bien es una funcion, es una propiedad, si se preguntan por que un return dentro de un return,
                        Es para el funcionamiento asincronico del $http.get(), regresa un objeto de tipo promesa (dentro de la propiedad getNombre), para que se pueda
                        utilizar la aplicacion en lugar de que se congele al pedir los datos al servidor.
                        Lo que significa que cada que se mande a llamar getNombre del objeto SegundaFactory en realidad se esta invocando el metodo $http.get().
                    */
                }
            }
        });
    }
}