import Loading from "./Loding";
import FolderList from "./FolderList";
import styled from "styled-components";
import Nav from '../nav';
import { Link } from 'react-router-dom';

const PlusButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;

  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #44A0E2;
  
  :hover{
    background-color: #3a92c9;
  }
  div{
    width: 30px;
    transform: translate(10px, 0px);
    border: 1px solid #fff;
  }
  div:nth-of-type(2){
    transform: rotate(90deg) translate(0, -10px);
  }
`

const Home = ({ todos, isPending }) => {
  
    return (
        <div >
            {isPending && <Loading />}
            {todos && <Nav/>}
            {todos && 
            <FolderList todos={todos} />}
        <Link to="/update">
        <PlusButton>
        <a>
        <div></div>
        <div></div>
        </a>
        </PlusButton>
        </Link>
        </div>
    );
}
  
export default Home; 