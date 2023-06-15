import React from "react";

import './Movielist.css'

const Movielist = ({ movies }) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  const moviecardlist = movies.map((mv) => {

    const txtcolor = (mv.vote_average < 6) ? "red" : (mv.vote_average >= 6 && mv.vote_average < 8) ? "orange" : "green";

    return (
      <div className="container" style={{ width: "18rem" }}>
        <img
          src={IMGPATH + mv.poster_path}
          class="card-img-top"
          alt="img"
          className="img"
        />
        <div class="card-body d-flex justify-content-between">
          <p class="card-text w-50">{mv.title}</p>
          <h5 class="card-title" style={{color:txtcolor}}>&#9734; {mv.vote_average}</h5>
        </div>
       
      </div>
    );
  });

  return (
    <>
      <div className="d-flex flex-wrap justify-content-evenly">
        {moviecardlist}
      </div>
    </>
  );
};

export default Movielist;