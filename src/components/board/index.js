import styled from "styled-components";
import { Content } from "../circular-image";
import Img from '../assets/4.jpg';

const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;
justify-content: center;
`;

const Div = styled.div`
width: 99%;
cursor: pointer;
margin-top: 0.5%;
display: flex;
align-items: center;
height: 7%;
background-color: #4663b9;

`;

const Name = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
margin-left: 1.5%;
font-weight: 450;
color: ${props => props.color === "black" ? "black" : "white"};
`;

const Points = styled.div`
display: flex;
justify-content: flex-end;
flex: 1;
font-size: 25px;
font-weight: 600;
letter-spacing: 2px;
margin-right: 1%;
color: ${props => props.color === "black" ? "black" : "white"};
`;

const Point = styled.div`
display: flex;
justify-content: center;
font-size: 25px;
font-weight: 200;
padding-right: 4%;
color: ${props => props.color === "black" ? "black" : "white"};
`;

function Board() {
    return(
        <Container>
            <Div>
                <Content src={Img} />
                <Name color="white">Hussain Golwala</Name>
                <Points color="white">208000</Points>
                <Point color="white">points</Point>
            </Div>
        </Container>
    )
}

export default Board;