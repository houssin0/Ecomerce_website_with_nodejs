import styled from "styled-components"
import Navbar from "../compenents/Navbar"
import Announcement from "../compenents/Announcement"
import Products from "../compenents/Products"
import Footer from "../compenents/Footer"
import Newsletter from "../compenents/Newsletter"
import { mobile } from "../responsive"


const Container = styled.div``

const Title = styled.h1`
    margin: 20px;

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}

`
const FilterText = styled.span`
    font-size: 20px;
    font-weight:600;
    margin-right:20px ;
    ${mobile({marginRight:"0px"})}

`
const Select =styled.select`
    padding:10px;
    margin-right:20px ;
    ${mobile({margin:"10px 0px"})}

`
const Option =styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Fruits</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option>All</Option>
                <Option>Summer Fruits</Option>
                <Option>Summer Veggies</Option>
                <Option>Winter Fruits</Option>
                <Option>Winter Veggies</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price-Low to Hight</Option>
                <Option>Price-Hight to Low</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList