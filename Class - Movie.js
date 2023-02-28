
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        if(rating == undefined){
            this.rating = "P.G";
        }
        else{
            this.rating = rating
        }
    }
    //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
    getPG(arr_movie){
        return arr_movie.filter(x=>x.rating == "PG");
    }
}
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var m = new Movie("Casino Royale","Eon Productions","PG13");

var movies = [
  new Movie("Inception", "Warner Bros. Pictures Legendary", "G"),
  new Movie("Interstellar", "Legendary Pictures Syncopy", "PG"),
  new Movie("Tenet", "Syncopy", "PG"),
];
var PG_movies = m.getPG(movies);
console.log(PG_movies.map(x=>x.title));