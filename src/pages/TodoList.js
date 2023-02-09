import{ useParams } from "react-router-dom";
import Loading from "../component/Loding";
import useFetch from "../util/useFetch";
import Todo from "./Todo";
import Nav from "../component/nav";
import Header from "./Header";
import TodoAdd from "./TodoAdd";
import {fetchPatch} from '../util/api';
import { useState } from "react";

const TodoList = () => {
    const { id } = useParams();
    const [todos, isPending, error] = useFetch(`http://localhost:3001/todos/${id}`)
    const [todoName, setTodoName] = useState('');
    const handleSubmitClick = () => {
        if(todoName === '') return ;
        todos.list.push({
            "index": todos.list.length + 1,
            "todo": todoName,
            "check": false
          })
        const date = new Date();
        const today = date.toLocaleDateString().slice(0,10).replace(/ /gi,'0');
        let patchData = {
          "update": today,
          "list" : [...todos.list]};
        fetchPatch('http://localhost:3001/todos/', id, patchData);
        window.location.href = `http://localhost:3000/todos/${id}`
    }
    return (
        <>
        <Nav/>
        { isPending && <Loading/> }
        { error && <div>{ error }</div> }
        { todos && <Header todos={todos}/>}
        <ul>
            { todos && 
                    todos.list.map((todo,index,arr)=> {
                    return(
                    <Todo key={todo.index} todo = {todo} index={index} id={id} list={arr}/>
                    )})
                    }
        </ul>
        <TodoAdd click={handleSubmitClick} todoName={todoName} setTodoName={setTodoName}/>
        </>
    )
}

export default TodoList; 