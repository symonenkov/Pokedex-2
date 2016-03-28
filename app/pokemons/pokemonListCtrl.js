(function () {
    "use strict";
    angular
        .module("pokedex")
        .controller("PokemonListCtrl",
                     ["pokemonResource",
                         PokemonListCtrl]);

    function PokemonListCtrl(pokemonResource) {
        var vm = this;
        var offset = 12;

        

        pokemonResource.List.get({ params: 'limit=12&offset=0' }, function (data) {
            vm.pokemons = data.objects;
        });
        
        vm.myFunction = function () {
            pokemonResource.List.get({ params: 'limit=12&offset=' + offset }, function (data) {
                console.log(vm.pokemons);
                console.log(data.objects);
                vm.pokemons = vm.pokemons.concat(data.objects);
                offset += 12;
                if (offset > 778) {
                    alert("There are all pokemons");
                }
                console.log(vm);
            });
        }

        vm.PokeInfo = function ($event) {
            console.log($event.currentTarget.attributes['data-id'].value);
            var idPoke = $event.currentTarget.attributes['data-id'].value;

            vm.pokemons.forEach(function (item, index) {
                if (item.national_id == idPoke) {
                    vm.pokemon = vm.pokemons[index];
                    console.log(vm.pokemons[index]);
                }
            });
      }
    }
}());