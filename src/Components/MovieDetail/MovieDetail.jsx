import { useState } from 'react';

function MovieDetail(props){
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return(
        <div
            className = {isHovering ? "detailBundle":"detailBundleInvi"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <p>{props.title}</p>
            <br/>
            <p>{props.detail}</p>
        </div>
    )
}

export default MovieDetail;