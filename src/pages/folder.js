import styled from "styled-components"

const Folderbox = styled.a`
    text-decoration: none;
    color: #000;
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
const Folder = ({data}) => {
    return (
    <Li>
     <Folderbox href="#">
        <Foldername>{data.name}</Foldername>
        <Folderupdate>{data.update}</Folderupdate>
        <Delete>X</Delete>
     </Folderbox >
     </Li>
    );
  }
  export default Folder;