import Home from './pages/Home';
import Loading from './component/Loding';
import useFetch from './util/useFetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import TodoList from './pages/TodoList';
import FolderAdd from './pages/FolderAdd';

function App() {
  const [todos, isPending, error] = useFetch("http://localhost:3001/todos/");
  return (
    <BrowserRouter>
    { error && <div>{ error }</div> }
    <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path="/" element={<Home todos={todos} isPending={isPending} />} />
          <Route path="/todos/:id" element={<TodoList />} />
          <Route path="/update" element={<FolderAdd todos={todos}/>} />
        </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App;
