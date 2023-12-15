import React, { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import './UpdateAction.css'
import { Cross2Icon } from '@radix-ui/react-icons';

const UpdateAction = ({updatedData, indexVal}) => {
    const [todoData, setTodoData] = useState({id: 0, title: '', description: ''});

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

      const handlerBtn = () => {
        const data = {id: indexVal, title: todoData.title, description: todoData.description}
        updatedData(data);
      }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="Button violet">Update</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
          <div className="w-[80%] p-2 flex flex-col gap-2">
            <label htmlFor="title">Task Title</label>
            <input onChange={(e)=>handlerTitleTodo(e)} type="text" className="border border-solid border-gray-300" />
            <label htmlFor="title">Task Description</label>
            <input onChange={(e)=>handlerDescriptionTodo(e)} type="text" className="border border-solid border-gray-300" />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <Dialog.Close asChild>
                <button onClick={handlerBtn} className="Button green">Update changes</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default UpdateAction;
