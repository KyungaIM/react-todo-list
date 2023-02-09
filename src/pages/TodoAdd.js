import styled  from 'styled-components';

const Input = styled.div`
 position: fixed;
 bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #F6F6F6;
  box-shadow: 0px -12px 8px 1px rgba(0, 0, 0, .08);
  input{
   height: 2.6rem;
   margin: 0 1.2rem;
   margin-top: 1.2rem;
   border: none;
   color: #888;
   font-size: 1rem;
   border-radius:4px ;
   :focus{
      outline: 1px solid #44A0E2;
   }
  }
  button{
   height: 2.6rem;
   margin: 1.2rem 1.2rem;
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
const TodoAdd = ({click,todoName,setTodoName}) => {

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          click()
        }
      };
    return(
        <>
        <Input>
        <input placeholder='할일을 추가해주세요' 
                autoFocus={true} 
                value={todoName} 
                onChange={(e)=>setTodoName(e.target.value)}
                onKeyPress={handleKeyPress}/>
        <button onClick={click}>추가하기</button>
        </Input>
        </>
    )
}
export default TodoAdd;