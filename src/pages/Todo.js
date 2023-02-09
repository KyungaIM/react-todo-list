import styled from "styled-components"
import { useState } from "react";
import { fetchPatch } from "../util/api";

const Todobox = styled.div`
    height: 3rem;
    padding: 0 2rem;
    border-bottom: 1px solid #EAEAEA;
    display : flex;
    flex-direction : row ;
    align-items : center;
    justify-content : space-between;
    :hover {
        background-color: #f5f5f5;
        transition: 0.5s;
    }
`;
const Todoname = styled.div`
    flex : 0 1 60% ;
    text-decoration: ${(props) => props.checked && 'line-through'};
    color: ${(props) => props.checked && '#6b6b6b'};
`
const Li = styled.li`
    list-style: none;
    background-color: #fff;
`
const Delete =styled.button`
 border: 0;
 background: rgba(0,0,0,0);
 color: #d3d3d3;
`
const CheckBox = styled.input`
    flex : 0 1 2% ;
    accent-color: ${(props) => props.checked&&'#0093FE'};
    border: 1px solid #ccc;
`
const Folder = ({todo,index,id,list}) => {
    const [isCheck, setIsCheck] = useState(todo.check);
    const handleCheckClick = () => {
        setIsCheck(!isCheck);
        list.splice(index,1,{
            "index": todo.index,
            "todo": todo.todo,
            "check": !isCheck
          })
        let patchData = {"list" : [...list]};
        fetchPatch('http://localhost:3001/todos/', id, patchData);
    }

    const handleDeleteClick = () => {
        list.splice(index,1)
        let patchData = {"list" : [...list]};
        fetchPatch('http://localhost:3001/todos/', id, patchData);
        window.location.href = `http://localhost:3000/todos/${id}`
    }

    return (
    <Li>
     <Todobox checked={isCheck}>
        <CheckBox type='checkbox' checked={isCheck} onChange={handleCheckClick}></CheckBox>
        <Todoname checked={isCheck} >{todo.todo}</Todoname>
        <Delete onClick={handleDeleteClick}>X</Delete>
    </Todobox >
     
     </Li>
    );
  }
  export default Folder;