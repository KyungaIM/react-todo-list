import styled from "styled-components"
import Folder from './Folder';

const Ul = styled.ul`
    margin: 0;
    padding: 0;
`

const FolderList = ({todos}) => {
    return (
        <Ul>
        {
            todos.map((folder,index)=> {
                return(
                <Folder key={folder.id} folder = {folder} index={index}/>
                )
            })
        }
        </Ul>

    );
  }
export default FolderList;