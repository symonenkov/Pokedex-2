(function () {
    "use strict";

    angular
		.module("common.services")
        .factory("pokemonResource",
                 ["$resource",
                  "appSettings",
                    pokemonResource])

    function pokemonResource($resource, appSettings) {

        return {
            List: $resource(appSettings.serverPath + "/api/v1/pokemon/?:params"),
            Pokemon: $resource(appSettings.serverPath + "/api/v1/pokemon/:id")
        }
    }

}());