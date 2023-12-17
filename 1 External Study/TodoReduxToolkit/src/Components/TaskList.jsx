import React from "react";
import "@radix-ui/themes/styles.css";
import { Table } from "@radix-ui/themes";

import UpdateTask from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../slices/taskSlices";

const TaskList = () => {
  const { allTasks } = useSelector((state)=>state.taskStore);
  const dispatch = useDispatch();

  const handlerDelete = (item) => {
    dispatch(removeTask(item))
  };

  return (
    <>
    {allTasks.length === 0 ? (<p className="text-center">Tasks Not Added</p>):(

      <div className="flex justify-center align-center">
        <Table.Root className="w-[70%]">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="w-[20%]">
                Title
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="w-[50%]">
                Description
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="w-[30%]">
                Action
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>            
            {allTasks.map((item)=>(
              <Table.Row key={item.id}>
                <Table.RowHeaderCell>{item.title}</Table.RowHeaderCell>
                <Table.Cell>{item.description}</Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3 align-center">
                    <UpdateTask idVal={item.id} />
                    <button onClick={()=>handlerDelete(item)}> <svg width="18" height="18" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" > <path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"></path> </svg> </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    )}

    </>
  );
};

export default TaskList;
