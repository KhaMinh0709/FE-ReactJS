import React from 'react';
import styled from "styled-components";
//css-in-js
const StyleCard = styled.div`
    position: relative;
`;

const CardImage = styled.div`   
    height: 400px;
    width: 400px;
    border-radius: 20px;
    border: 2px solid pink;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const Info = styled.div`
    position: absolute;
    bottom: -80px;
    left: 15%;
    transform: translate(-10%, 0%);
    z-index: 0;
    border-radius: 20px;
    padding: 20px;
    width: 300px;
    height: 100px;
    background-color: white;
    border: 2px solid black;
`;

const Vcl = styled.div`
    width: 300px;
    height: 20px;
    display: flex;
    align-items: center;
`;

const ImgAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Hainamsau = styled.span`
    padding: 10px;
    margin-left: 100px;
`;

const Author = styled.span`
    padding: 0 10px;
    font-weight: bold;
`;

const Oduoi = styled.div`
    padding: 20px 0;
`;

const Hello = styled.h3`
    margin: 0;
    padding: 0 0 10px 0;
`;
const Gia = styled.span`
    color:darkgray;
`
const Card = (props) => {
    return (
        <StyleCard>
            <CardImage>
                <CardImg src={props.srcIMG} />
            </CardImage>
            <Info>
                <Vcl>
                    <ImgAvatar src={props.avt} />
                    <Author>{ props.Author}</Author>
                    <Hainamsau>256</Hainamsau>
                </Vcl>
                <Oduoi>
                    <Hello>Cosmic Prephertive</Hello>
                    <Gia>12,000 PSL</Gia>
                </Oduoi>
            </Info>
        </StyleCard>
    );
};

export default Card;
