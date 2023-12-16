import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskAddition = () => {
  const [tasks, setTasks] = useState({ title: "", description: "" });
  const [todoList, setTodoList] = useState([]);

  const { state, dispatch } = useContext(TaskContext);

  console.log("all task ", state);

  const handlerDescriptionInput = (e) => {
    setTasks((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handlerTitleInput = (e) => {
    setTasks((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const handlerButton = () => {
    if (tasks.title && tasks.description) {
      setTodoList((prev) => [...prev, tasks]);
      setTasks({ title: "", description: "" });
      dispatch({ type: "ADDING_TASK", payload: tasks });
    }
  };

  return (
    <>
      <div className="flex flex-col w-[70%] gap-2 border p-5 m-2">
        <h2>Title</h2>
        <input
          onChange={(e) => handlerTitleInput(e)}
          value={tasks.title}
          type="text"
          className="border border-gray-300"
        />
        <h2>Description</h2>
        <input
          onChange={(e) => handlerDescriptionInput(e)}
          value={tasks.description}
          type="text"
          className="border border-gray-300"
        />
        <button
          onClick={handlerButton}
          className="rounded-md w-fit px-5 py-1 bg-orange-300 hover:bg-orange-200"
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default TaskAddition;
