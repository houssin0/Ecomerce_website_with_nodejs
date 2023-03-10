import {  FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"



const Info=styled.div`
    opacity:0 ;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:all 0.5s ease ;
    cursor:pointer;

`

const InfoContainer=styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const InfoText=styled.h1`
font-size:40px ;

`
const Container=styled.div`
    flex:1;    
    border-radius:10px ;
`

const ContainerFruit=styled.div`
    margin: 5px; 
    align-items: center;
    justify-content: center;
    min-width:280px ;
    height:350px ;
    display: flex;
    background-color: #f5fbfd;
    position: relative;
    border-radius:10px ;


    &:hover ${Info}{
        opacity:1 ;
    }
`


const Circle=styled.div`
    width: 200px;
    height: 200px;
    border-radius:50% ;
    background-color:white ;
    position: absolute;
`
const Image=styled.img`
    height: 75%;
    z-index:2 ;
`

const Icon=styled.div`
    width:40px ;
    height:40px ;
    border-radius:50% ;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition:all 0.3s ease ;


    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1) ;
    }
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const CartTitle = styled.h1`
    font-size: 50px;
`


const Vegetable = ({item}) => {
  return (
    
        <Container>
        <ContainerFruit>
            <Circle />
            <Image src={require('./image/'+item.img+'.png').default}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </ContainerFruit>
        <TitleContainer>
        <CartTitle>{item.title}</CartTitle>
        </TitleContainer>
        </Container>
    
  )
}

export default Vegetable