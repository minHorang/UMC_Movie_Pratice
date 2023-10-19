import { useState } from 'react';
import styled from "styled-components";


const Text = styled.p`
    margin: 5px;
    color: white;
    display: flex;
    align-items: center;
`;


const DetailBundleBox = styled.div`
    margin: 10px;
    width: 200px;
    height: 365px;
    overflow: auto;
    opacity: ${props=>props.opacity||0};
    position: absolute;
    background-color: black;
`;

const DetailBundle = styled.div`
    padding: 30px 10px 0px 10px;
    width: 200px;
    height: 270px;
    overflow: auto;
    position: absolute;
    background-color: black;
`;


function MovieDetailStyle(props){
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return(
        <DetailBundleBox
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        opacity={isHovering?0.7:0}
        >
            <DetailBundle>
                <Text>{props.title}</Text>
                <br/>
                <Text>{props.detail}</Text>
            </DetailBundle>
        </DetailBundleBox>
    )
}

export default MovieDetailStyle;