const getImageUrl = (path, size = 200) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`;
};

function Movie(props) {
  return (
    <div className="bundle">
      <img src={getImageUrl(props.poster)}
            alt="movie poster"
       />
       <div className="title">
        <p>{props.title}</p>
        <p className="vote">{props.vote}</p>
      </div>
      
    </div>
  )
}

export default Movie;