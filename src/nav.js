import styled from "styled-components"
import{ useParams } from "react-router-dom";

const Navi = styled.nav`
    height: 3rem;
    display : flex;
    flex-direction : row ;
    align-items : center;  
`
const FolderNav = styled.div`
    flex : 1 1 0 ;
    text-align: center;
    background-color: ${(props)=>props.id ? '#F6F6F6' :'#fff' };
    height:3rem;
    line-height: 3rem;
`
const TodoNav = styled.div`
    flex : 1 1 0 ;
    text-align: center;
    background-color: ${(props)=> props.id ? '#fff' :'#F6F6F6' };
    height:3rem;
    line-height: 3rem;
`


const Nav = ({todo}) => {
    const { id } = useParams();
    return (
        <Navi>
            <FolderNav id={id} >폴더</FolderNav>
            <TodoNav id={id} todo={todo}>todo</TodoNav>
        </Navi>
    )
  }
export default Nav;