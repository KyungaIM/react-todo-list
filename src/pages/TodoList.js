import{ useParams } from "react-router-dom";
import Loading from "../component/Loding";
import useFetch from "../util/useFetch";
import Todo from "./Todo";
import Nav from "../component/nav";
import Header from "./Header";
import TodoAdd from "./TodoAdd";

const TodoList = () => {
    const { id } = useParams();
    const [todos, isPending, error] = useFetch(`http://localhost:3001/todos/${id}`)

    return (
        <>
        { isPending && <Loading/> }
        { error && <div>{ error }</div> }
        { todos && <Nav/>}
        { todos && <Header todos={todos}/>}
        <ul>
            { todos && 
                    todos.list.map((todo,index,arr)=> {
                    return(
                    <Todo key={todo.index} todo = {todo} index={index} id={id} list={arr}/>
                    )})
                    }
        </ul>
        { todos && <TodoAdd list={todos.list} id={id}/>}
        </>
    )
}

export default TodoList; 