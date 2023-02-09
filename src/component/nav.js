import styled from "styled-components"
import{ useParams } from "react-router-dom";
import { AiFillFolderOpen,AiOutlineDownSquare } from "react-icons/ai";

const Navi = styled.nav`
    height: 3.8rem;
    display : flex;
    flex-direction : row ;
    align-items : center;  
`
const FolderNav = styled.a`
    flex : 1 1 0 ;
    text-align: center;
    height: 3.8rem;
    line-height: 4.5rem;
    background-color: ${(props)=>props.id ? '#F6F6F6' :'#fff' };
`
const TodoNav = styled.div`
    flex : 1 1 0 ;
    text-align: center;
    height: 3.8rem;
    line-height: 4.5rem;
    background-color: ${(props)=> props.id ? '#fff' :'#F6F6F6' };
`


const Nav = () => {
    const { id } = useParams();
    return (
        <Navi>
            <FolderNav id={id} href='http://localhost:3000'>
                    <AiFillFolderOpen color="#44A0E2" size={24}/>
            </FolderNav>
            <TodoNav id={id}><AiOutlineDownSquare color="#44A0E2" size={24}/></TodoNav>
        </Navi>
    )
  }
export default Nav;