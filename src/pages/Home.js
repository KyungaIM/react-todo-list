import Loading from "../component/Loding";
import FolderList from "./FolderList";
import styled from "styled-components";
import Nav from '../component/nav';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

const PlusButton = styled.div`
   display: inline-block;
  padding: 0.9rem 1rem;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  text-align: center;

  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #44A0E2;
  box-shadow: 5px 5px 4px 1px rgba(0, 0, 0, .1);
  :hover{
    background-color: #3a92c9;
  }
`

const Home = ({ todos, isPending }) => {
  
    return (
        <div >
        <Nav/>
        { isPending && <Loading />}
        { todos && 
        <FolderList todos={todos} />}
        <Link to="/update">
        <PlusButton>
        <AiOutlinePlus size={30}/>
        </PlusButton>
        </Link> 
        </div>
    );
}
  
export default Home; 