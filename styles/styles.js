import styled from 'styled-components';
import {device} from './device';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    background-color: #5C5C5C;

    padding: 20px;
`

export const Image = styled.img`
    width: 160px;
    height: 160px;
    
    border-radius: 50%;
`

export const Description = styled.div`
    width: 100%;
    height: 66px;

    color: #FFFFFF;
`

export const Heading2 = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;  
    &::after {
        content: '${ props => props.text}' 
    };    
` 

export const Paragraph = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;   

    &::after {
        content: '${ props => props.text}' 
    };
`
export const CardContent = styled.a`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;

    color: #000000;

    position: relative;

    @media ${device.mobileL} {
        /* padding:10px 5px 10px 5px; */
        margin: 5px;
    }

`
export const CardBorder = styled.div`
    width: 506px;    
    height: 66px;   

    background: linear-gradient(90deg, #FF3D33 3.3%, #00F0FF 95.6%);
    filter: blur(10px);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    @media ${device.mobileL} {
        width: 100%;
        margin: 5px;
    }  
`
export const CardText = styled.div`
    width: 500px;
    height: 60px;
    
    background-color: #FFFFFF;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    
    padding: 15px;

    &::after {
        content: '${ props => props.text}';
    };

    position: relative;

    @media ${device.mobileL} {
        width: 100%;
        font-size: 15px
    }
`

export const IconContent = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    
    &:nth-child(1) {
        margin-left: 10px;
    }
`

export const IconSocial = styled.img`
    margin: 5px;
`