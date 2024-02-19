import React, { Fragment } from "react";
import "../estilos/Error.css";

const Error = () => {
  return (
    <Fragment>
      <div className="divError">
        <h2>Error</h2>
        <p>Ha habido un error, vuelve a intentarlo...</p>
      </div>
      <div className="divError">
        <img className="imgError" src="https://vcryhsrmqbdvqyvrascb.supabase.co/storage/v1/object/sign/img/error.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWcvZXJyb3IucG5nIiwiaWF0IjoxNzA4MzY0NTMyLCJleHAiOjE3Mzk5MDA1MzJ9.YIEyqTdeaYUwRWTQGfK1jjB3u65epTTUwWWdDi2NyqU&t=2024-02-19T17%3A42%3A12.367Z" alt="Error"/>
      </div>
    </Fragment>
  );
};

export default Error;
