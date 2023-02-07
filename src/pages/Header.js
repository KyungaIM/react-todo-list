import styled from "styled-components"

const Add = styled.button`
width: 4rem;
height: 4rem;
border-radius: 50%;
border: none;

bottom: 30px;
right: 30px;
background-color: #44A0E2;

:hover{
  background-color: #3a92c9;
  transition: 0.5s;
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
const Header = ({todos}) => {
return (
    <header>
        <div>
        <h2>{todos.name}</h2>
        <p>{todos.update}</p>
        </div>

        <Add>
        <a>
        <div></div>
        <div></div>
        </a>
        </Add>
    </header>
)
}

export default Header