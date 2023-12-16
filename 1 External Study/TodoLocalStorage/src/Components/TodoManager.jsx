import React, { useEffect, useState } from "react";
import '@radix-ui/themes/styles.css';
import { Table } from '@radix-ui/themes';
import UpdateAction from "./UpdateAction";

const TodoManager = () => {
  const [todoData, setTodoData] = useState({title: '', description: ''});
  const [todo, setTodo] = useState([]);

  const handlerTitleTodo = (e) => {
    setTodoData((prev)=>({
      ...prev,
      title: e.target.value
    }))
  }
  
  const handlerDescriptionTodo = (e) => {
    setTodoData((prev)=>({
      ...prev,
      description: e.target.value
    }))
  }
  
  const getDataFromLocal = JSON.parse(localStorage.getItem('todoList')) || [];

  const handlerAddBtn = () => {
    if (todoData.title && todoData.description) {
      localStorage.setItem('todoList',JSON.stringify([
        ...getDataFromLocal, todoData
      ]));
      setTodo((prev)=>([
        ...prev, todoData
      ]));
    }
    setTodoData({title: '', description: ''});
  }
  
  const handlerDeleteBtn = (e) => {
    const tempArr = todo.filter((item, index)=>index !== e);
    setTodo(tempArr);
    localStorage.setItem('todoList', JSON.stringify(tempArr));
  }

  const updatedData = (value) => {
    const tempArr = todo.map((item, index)=>{
      if(value.id === index) {
        return {
          ...item,
          title: value.title,
          description: value.description,
        };
      }
      return item;
    })
    localStorage.setItem('todoList', JSON.stringify(tempArr));
    setTodo(tempArr);
  }
  useEffect(()=> {
    if (getDataFromLocal) {
      setTodo(getDataFromLocal);
    }
  }, [])

  return (
    <>
      <div className="flex flex-col my-4 justify-center items-center">
        <h2 className="text-[1.5rem] my-5">Total No of Tasks {todo.length}</h2>
        <div className="w-[80%] border-2 p-4 flex flex-col">
          <label htmlFor="title">Task Title</label>
          <input type="text" onChange={(e)=>handlerTitleTodo(e)} value={todoData.title} className="border border-solid border-gray-300" />
          <label htmlFor="title">Task Description</label>
          <input type="text" onChange={(e)=>handlerDescriptionTodo(e)} value={todoData.description} className="border border-solid border-gray-300" />
          <button onClick={()=>handlerAddBtn()} className="bg-orange-300 hover:bg-orange-200 w-fit px-2 py-1 my-2 rounded">Add Task</button>
        </div>
        <div className="flex w-[80%] justify-center items-center">
          <Table.Root className="w-full">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className="p-2 w-[20%]">Title</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="p-2 w-[50%]">Description</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="p-2 w-[30%]">Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
                {todo.length <= 0 ? (
                  <Table.Row >
                    <Table.RowHeaderCell className="p-2"></Table.RowHeaderCell>
                    <Table.Cell className="p-2">No Data Found</Table.Cell>
                    <Table.Cell className="p-2"></Table.Cell>
                  </Table.Row>                  
                ):(
                  todo.map((task, index)=> (
                  <Table.Row key={index}>
                    <Table.RowHeaderCell className="p-2">{task.title}</Table.RowHeaderCell>
                    <Table.Cell className="p-2">{task.description}</Table.Cell>
                    <Table.Cell className="p-2">
                        <div className="flex gap-2">
                            <UpdateAction updatedData={updatedData} indexVal={index} />
                            <button className="bg-red-400 px-2 py-1 rounded hover:bg-red-200" onClick={()=>handlerDeleteBtn(index)}>Delete</button>
                        </div>
                    </Table.Cell>
                  </Table.Row>
                  ))
                )}
              
              
              </Table.Body>
          </Table.Root>
        </div>
  


      </div>
    </>
  );
};

export default TodoManager;
