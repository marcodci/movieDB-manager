## Movie DB manager

in this workshop we are gonna build an interactive database manager.

## Topics (no particular order):

- interactivness with `readfile-sync`
- reading/writing/check file with `fs` (readFileSync, writeFileSync, existsSync)
- `JSON` (parse, stringify)
- `classes` (constructor, method, this, new )
- `objects`
- `array methods` (forEach, map, filter)
- `logical operators`
- `if statements`
- `while loop`
- `switch`

### Folder and File Descriptions

`node_modules/`
The node_modules directory contains all the packages and modules that the project depends on. These are installed via NPM (Node Package Manager) and should not be added to version control (e.g., Git).

`main.js`
This is the main JavaScript file of our application. It contains the core logic and is the entry point of the program.

`data.json`
data.json is used for storing data in JSON (JavaScript Object Notation) format. It acts as a local database or a configuration file, where we store and retrieve data necessary for the application.
It contains an array of object movies.

`package-lock.json`
The package-lock.json file is automatically generated and contains the exact version information for every package installed in the node_modules directory. This ensures that the same versions of the packages are installed in every environment, providing consistency.

`package.json`
The package.json file is the heart of any Node.js project. It contains metadata relevant to the project. This file is used for managing project dependencies, scripts, version information, and much more.

## Code overview

The MovieDB manager is a simple Node.js console application for managing a collection of movies. It allows users to add new movies, list all movies, and filter movies based on various criteria such as author, year, genre, and title.

### Features

**Add Movies**: Add new movies to the database with details like title, author, genre, and year.

**List Movies**: View a list of all movies in the database.

**Filter Movies**: Search for movies based on specific criteria.

### Installation

To run this application, you need to have Node.js installed on your system.

Once Node.js is installed, follow these steps:

- _Clone or download_ the application from the repository.
- _Navigate_ to the application directory.
  Install dependencies:

```sh
npm install
```

### Usage

To start the application, run the following command in your terminal:

```sh
node main.js
```

The application will present you with a menu with the following options:

**1. Add a new movie**: Enter the details for a new movie to add it to the database.
**2. List all movies**: Displays all movies currently in the database.
**3. Filter movies**: Search for movies based on specific criteria.
**4. Exit**: Exit the application.

Choose an option by entering the corresponding number.

### Data Storage

The application stores movie data in a JSON file (movies.json). This file is read at startup to load existing movies and is updated whenever new movies are added.

### Dependencies

**fs:** For reading from and writing to the file system.
**readline-sync:** For synchronous readline operations.
