import Nav from '../component/nav';
import styled  from 'styled-components';
import {fetchCreate} from '../util/api';
import { useState } from "react";

const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  margin: 0 2rem;
  input{
   height: 2.6rem;
   padding: 0;
   border: none;
   color: #888;
   border-bottom: 1px solid #888 ;
   font-size: 1rem;
   :focus{
      outline: none;
      border-bottom: 2px solid #888 ;
   }
  }
  button{
   height: 2.6rem;
   margin-top: 1.2rem;
   border: none;
   background-color: #44A0E2;
   color: #fff;
   border-radius: 4px;
   font-size: 1rem;
   :hover{
    background-color: #3a92c9;
  }
  }
`
const FolderAdd = ({todos}) =>{
   const [folderName, setfolderName] = useState('');
   const [noString,setNoString] = useState(false);
   const handleSubmitClick = () => {
      if(folderName === '') {
         return setNoString(true)};
      const newId = todos.length + 1;
      const date = new Date();
      const today = date.toLocaleDateString().slice(0,10).replace(/ /gi,'0');
      const data = {
         "id": newId,
         "name": folderName,
         "update": today,
         "list": []
       }
      fetchCreate('http://localhost:3001/todos/',data,`http://localhost:3000/todos/${newId}`)
      }
      const handleKeyPress = (event) => {
         if (event.key === 'Enter') {
            handleSubmitClick()
         }
      };
 return(
    <>
    <Nav/>
    <Input>
    <input 
    placeholder='폴더명을 작성해주세요' 
    autoFocus={true} 
    value={folderName} 
    onChange={(e)=>setfolderName(e.target.value)}
    onKeyPress={handleKeyPress}/>
    {noString && 
    <p>내용을 입력해주세요</p>
   }
    <button onClick={handleSubmitClick}>폴더생성</button>
    </Input>
    </>
 )
}
export default FolderAdd