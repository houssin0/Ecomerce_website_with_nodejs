import styled from "styled-components"
import {fruit, mix, vegetables}from "../data"
import Mix from "./Mix"
import Fruit from "./Fruit"
import Vegetable from "./Vegetable"

const Container=styled.div`
    padding: 20px;
    flex-wrap:wrap ;
    justify-content:space-between ;

    `
const Wrapper =styled.div`
    width:100%;
    padding:20px;
    /* background-color: white; */
    display:flex ;

`
const InfoContainer=styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    background-color:#e7e7e7 ;
    margin: 10px;
`


const InfoText=styled.h1`
padding:20px;
font-size:40px;
font-weight:bold;
letter-spacing:3px;

`

const Products = () => {
  return (
    
        <Container>
        <InfoContainer>
        <InfoText>fresh and amazing fruit of this period</InfoText>
        <Wrapper>
            {fruit.map((item)=>(
                <Fruit item={item} key={item.id} />
            ))}
            
        </Wrapper>
        </InfoContainer>
        
        <InfoContainer>
        <InfoText>fresh and amazing fruit of this period</InfoText>
        <Wrapper>
            {vegetables.map((item)=>(
                <Vegetable item={item} key={item.id} />
            ))}
            
        </Wrapper>
        </InfoContainer>
        <InfoContainer>
        <InfoText>fresh and amazing fruit of this period</InfoText>
        <Wrapper>
            {mix.map((item)=>(
                <Mix item={item} key={item.id} />
            ))}
            
        </Wrapper>
        </InfoContainer>

        </Container>
    
  )
}

export default Products