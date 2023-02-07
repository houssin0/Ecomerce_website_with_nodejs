import styled from "styled-components"
import Navbar from "../compenents/Navbar"
import Announcement from "../compenents/Announcement"
import Newsletter from "../compenents/Newsletter"
import Footer from "../compenents/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"


const Container =styled.div`
`
const Wrapper =styled.div`
    padding:10px;
    display:flex;
    ${mobile({padding:"10px",flexDirection:"column"})}


`
const ImgContainer =styled.div`
    flex:1;
    
`
const Image =styled.img`
    width:100%;
    height:90vh;
    object-fit:cover ;
    ${mobile({height:"40vh"})}

`
const InfoContainer =styled.div`
    flex:1;
    padding:80px 50px;
    ${mobile({padding:"10px"})}
`
const Title =styled.h1`
    font-weight:200 ;
    margin:20px 0px;

`
const Desc =styled.p`
    margin:20px 0px;
`
const Price =styled.span`
    font-weight:100;
    font-size:40px ;
`

const AddContainer =styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({width:"100%"})}

`
const AmountContainer =styled.div`
    display:flex ;
    margin:20px 0px;
    align-items: center;
    font-weight: 700;
`
const Amount =styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;

`
const Button =styled.button`
    padding: 15px;
    border:2px solid teal;
    background-color:white ;
    cursor:pointer;
    font-weight: bold;


    &:hover{
        background-color:#f8f4f4 ;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src={require('../compenents/image/lime.png').default}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Thank you, this proved useful to me in a situation 
                where images may or may not exist in the folder
                 because they are dynamically imported 
                 based on the resource shown.</Desc>
                <Price> $ 1.24 / Kg </Price>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product



