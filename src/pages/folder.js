import styled from "styled-components"
import { Link } from "react-router-dom";
import { fetchDelete } from "../util/api";

const Folderbox = styled.div`
    height: 3rem;
    padding: 0 2rem;
    border-bottom: 1px solid #EAEAEA;
    display : flex;
    flex-direction : row ;
    align-items : center;
    justify-content : space-between;
    :hover {
        background-color: #f5f5f5;
        transition: 0.2s;
    }
`;
const Foldername = styled.div`
    flex : 0 1 30% ;
`
const Li = styled.li`
    list-style: none;
`
const Folderupdate =styled.div`
    color:  #888888;
    font-weight: 200;
    flex : 0 1 30% ;
`
const Delete =styled.button`
 border: 0;
 background: rgba(0,0,0,0);
 color: #d3d3d3;
`
const Folder = ({folder,index}) => {
    const handleDeleteClick = () => {
        fetchDelete('http://localhost:3001/todos/', index);
    }
    return (
    <Li key={folder.id}>
     <Link to={`/todos/${folder.id}`} className='link'>
     <Folderbox>
        <Foldername>{folder.name}</Foldername>
        <Folderupdate>{folder.update}</Folderupdate>
        <Delete onClick={handleDeleteClick}>X</Delete>
    </Folderbox >
    </Link>
     
     </Li>
    );
  }
  export default Folder;