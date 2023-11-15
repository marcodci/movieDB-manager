import fs from 'fs'
import rs from 'readline-sync'

// Define a class to represent a movie
class Movie {
    constructor(title, author, genre, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
    // method that returns a string describing the movie
    describe() {
        return `
        ------------------------
        - Title: ${this.title}
        - Author: ${this.author}
        - Genre: ${this.genre}
        - Year: ${this.year}
        ------------------------
        `;
    }
}

// Define a class to manage a collection of movies
class MovieDB {
    constructor(filename) {
        this.filename = filename;
        this.movies = this.readMoviesFromJson();
    }

    readMoviesFromJson() {
        if (fs.existsSync(this.filename)) {
            let rawData = fs.readFileSync(this.filename);
            let movieObjects = JSON.parse(rawData);
            return movieObjects.map(movie => new Movie(movie.title, movie.author, movie.genre, movie.year));
        } else {
            return [];
        }
    }

    saveMoviesToJson() {
        fs.writeFileSync(this.filename, JSON.stringify(this.movies));
    }

    addMovie(movie) {
        this.movies.push(movie);
        this.saveMoviesToJson();
    }

    listMovies() {
        this.movies.forEach(movie => console.log(movie.describe()));
    }

    filterMovies() {
        const filterBy = rs.question('Filter by (author/year/genre/title): ').toLowerCase();
        if(filterBy !== "author" && filterBy !== "year" && filterBy !== "genre" && filterBy !== "title" ) {
            
            console.log("NOT A VALID OPTION!")
            return
        } else {
            const searchTerm = rs.question(`Enter ${filterBy}: `);
            // creates a new array containing
            // only those movies whose specified property("author", "year", "genre" or "title") 
            // includes the given search term
            // Filtering is case-insensitive (does matter if upper case or lower case)
            let filteredMovies = this.movies.filter((movie) => movie[filterBy.toLowerCase()].toLowerCase().includes(searchTerm));
            filteredMovies.forEach((movie) => console.log(movie.describe()));
        }
    }
}

// DB instance
const movieDB = new MovieDB('movies.json');

// Application infinite loop
while (true) {
    console.clear();
    console.log('** Movie Management Application **');
    console.log('1. Add a new movie');
    console.log('2. List all movies');
    console.log('3. Filter movies');
    console.log('4. Exit');
    let choice = rs.question('Enter your choice: ');

    // handle user input
    switch (choice) {
        case '1':
            // add a movie
            const title = rs.question('Enter title: ');
            const author = rs.question('Enter author: ');
            const genre = rs.question('Enter genre: ');
            const year = rs.question('Enter year: ');
            const movie = new Movie(title, author, genre, year);
            movieDB.addMovie(movie);
            console.log('Movie added.');
            break;

        case '2':
            // list all movies
            movieDB.listMovies();
            break;

        case '3':
            // Filter movies
            movieDB.filterMovies();
            break;

        case '4':
            // Exit application
            console.log('Exiting...');
            process.exit();
        default:
            console.log('Invalid option!');
    }

    rs.question('Press enter to continue...');
}