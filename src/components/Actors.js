import React from "react";
import { actors } from "../data";

const actorsToDisplay = actors.map((actor) => {
  const actorsMovies = actor.movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ));
  console.log(actorsMovies);
  return (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>{actorsMovies}</ul>
    </div>
  );
});

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay}
    </div>
  );
}

export default Actors;
