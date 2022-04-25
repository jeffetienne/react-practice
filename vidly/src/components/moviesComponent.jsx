import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MovieComponent extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {
        console.log(movie)
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Publish date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(m => 
                        <tr key={m._id}>
                            <td>{m.title}</td>
                            <td>{m.genre.name}</td>
                            <td>{m.numberInStock}</td>
                            <td>{m.dailyRentalRate}</td>
                            <td>{m.publishDate}</td>
                            <td><button onClick={this.handleDelete(m)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default MovieComponent;
