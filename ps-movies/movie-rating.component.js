/**
 * Created by Boaz on 08/03/2017.
 */

"use strict";

module.component("movieRating", {
    templateUrl: './ps-movies/movie-rating.component.html ',
    controller: MovieRatingConroller,
    bindings:{
        value: '<',
    },
    transclude : true,
});

function MovieRatingConroller() {
    let self = this;
    
    self.$onInit = function () {
        self.entries = new Array(self.value);
    };

    self.$onChanges = function () {
        self.entries = new Array(self.value);
    };
}



