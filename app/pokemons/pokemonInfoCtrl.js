(function () {
    "use strict";
    angular
        .module("pokedex")
        .controller("PokemonInfoCtrl",
                     ["pokemonResource",
                         PokemonInfoCtrl]);

    function PokemonInfoCtrl(pokemonResource) {
        var vmInfo = this;

        pokemonResource.Pokemon.get({ id : 1 }, function (data) {
            vmInfo = data;
            console.log(data);
        });

        
    }
}());