import styled from 'styled-components';
import { Text } from '../Style';

const getImageUrl = (path, size = 200) => {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
  };

  const Bundle = styled.div`
    width: 200px;
    margin: 10px;
    background-color: #082d8a;
  `;
  const Vote = styled.p`
    text-align: right;
    margin: 5px;
    color: white;
    display: flex;
    align-items: center;
  `;
  const Title = styled.div`
    height: 60px;
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  

  function MovieStyle(props) {
    return (
      <Bundle>
        <img src={getImageUrl(props.poster)}
              alt="movie poster"
         />
        <Title>
          <Text>{props.title}</Text>
          <Vote>{props.vote}</Vote>
        </Title>
        
      </Bundle>
    )
  }
  
  export default MovieStyle;