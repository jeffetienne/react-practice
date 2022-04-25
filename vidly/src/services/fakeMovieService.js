const movies = [
    {
        _id: 1,
        title: 'Terminator',
        genre: {_id: '1', name: 'Action'},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2018-01-03'
    },
    {
        _id: 2,
        title: 'Iron Man',
        genre: {_id: '3', name: 'SCI-FI'},
        numberInStock: 6,
        dailyRentalRate: 4.5,
        publishDate: '2008-06-15'
    },
    {
        _id: 3,
        title: 'Spiderman: No Way Home',
        genre: {_id: '3', name: 'SCI-FI'},
        numberInStock: 6,
        dailyRentalRate: 5,
        publishDate: '2021-12-17'
    },
    {
        _id: 4,
        title: 'Saw',
        genre: {_id: '2', name: 'Horror'},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: '2004-01-03'
    }
]

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id);

    if (!movieInDb) {
        movies.push(movie);
    }
}