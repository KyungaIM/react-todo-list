import styled from "styled-components"
import Folder from './folder';
import { dummyData } from '../static/dummyData';
const Ul = styled.ul`
    margin: 0;
    padding: 0;
`

const FolderList = () => {
    return (
        <Ul>
        {
            dummyData.map((data)=> {
                return(
                <Folder data = {data}/>
                )
            })
        }
        </Ul>

    );
  }
export default FolderList;