import MovieStyle from "./Components/Moive/Movie.style";
import MovieDetailStyle from "./Components/MovieDetail/MovieDetail.style";
import { movies } from "./movieDummy";
import { styled } from "styled-components";
import GlobalStyle from "./Components/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <AppContainer>
        {
          movies.results.map((items) => {
            return (
              <TitleDetailSet>
                <MovieStyle title= {items.title} poster={items.poster_path} vote={items.vote_average}/>,
                <MovieDetailStyle title= {items.title} detail={items.overview}/>
              </TitleDetailSet>
              )
          })
        }
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
display: flex;
  flex-direction: row;
  width: 100vw;
  flex-wrap : wrap;
  align-items: center;
  justify-content: center;  
`;



const TitleDetailSet = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;



export default App;
