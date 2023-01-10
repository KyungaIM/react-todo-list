import styled from "styled-components"

const Navi = styled.nav`
    height: 3rem;
    background-color: #ccc;
    display : flex;
    flex-direction : row ;
    align-items : center;
    
`
const FolderNav = styled.a`
    flex : 1 1 0 ;
    text-align: center;
    background-color: #fff;
    height:3rem;
    line-height: 3rem;
    text-decoration: none;
`
const TodoNav = styled.a`
    flex : 1 1 0 ;
    text-align: center;
    background-color: #F6F6F6;
    height:3rem;
    line-height: 3rem;
    text-decoration: none;
`


const Nav = () => {
    return (
        <Navi>
            <FolderNav href="#">폴더</FolderNav>
            <TodoNav href="#">todo</TodoNav>
        </Navi>
    )
  }
export default Nav;