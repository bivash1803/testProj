import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id}>
          <h2>
            <Link to={`/show/${show.show.id}`}><button>update</button>{show.show.name}</Link>
          </h2>
          <img src={show.show.image?.medium} alt={show.show.name} />
          <p>{show.show.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowList;
