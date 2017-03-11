

"use strict";
let module = angular.module("psMovies");


    function MovieListController($http) {

        let self = this;
        self.movies= [];

        self.$onInit = function () {
            fetchMovies($http).then(function(movies) {
                self.movies = movies;
            });
        };

        self.upRating = function (movie) {
            if(movie.rating < 5) movie.rating++;
        }

        self.downRating = function (movie) {
            if(movie.rating > 1) movie.rating--;
        }

    }

    function fetchMovies($http) {///???? why not self.fetchMovies??
        return $http.get("./movies.json")
            .then(function (response) {
                return response.data;
            });
    }



    module.component("movieList", {
        templateUrl: 'ps-movies/movie-list.component.html',
        controller: ["$http", MovieListController]//$http is to simulate fetching data from a remote server, in our program we will use a static json file called movies.json
    });

