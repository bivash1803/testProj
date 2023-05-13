import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleBooking = () => {
    // TODO: Implement booking logic
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.medium} alt={show.name} />
      <p>{show.summary}</p>
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}

export default ShowDetail;
