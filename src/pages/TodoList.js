import{ useParams } from "react-router-dom";
import Loading from "./Loding";
import useFetch from "../util/useFetch";
import Todo from "./Todo";
import Nav from "../nav";
import Header from "./Header";


const TodoList = () => {
    const { id } = useParams();
    const [todos, isPending, error] = useFetch(`http://localhost:3001/todos/${id}`)

    return (
        <ul>
            { isPending && <Loading/> }
            { error && <div>{ error }</div> }
            { todos && <Nav todos={todos}/>}
            { todos && <Header todos={todos}/>}
            { todos && 
                    todos.list.map((todo,index,arr)=> {
                    return(
                    <Todo todo = {todo} index={index} id={id} list={arr}/>
                    )})
                    }
        </ul>
    )
}

export default TodoList; 