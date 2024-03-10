import { MdOutlineDelete } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

const TableContent = ( {item, handlerUpdate, handlerDelete, inputChanger, handlerCheckBox, check, singleCheck, updateInput} ) => {

  const [updatedDetails, setUpdatedDetails] = useState({
    'name':'',
    'email':'',
    'role': '',
  })
  
  const handlerUpdateDetails = (values, e) => {
    setUpdatedDetails((prev)=>({...prev, [values]: e.target.value }));
  }

  const handlerTick = (id) => {
    if (updatedDetails.name && updatedDetails.email && updatedDetails.role) {
      updateInput(updatedDetails, id);
    }
  }

  return (
    <>
      <td className="px-4">
        {check && 
          <input onChange={(e)=>handlerCheckBox(e, item.id)} type="checkbox" name="checkbox" checked={check && true || null} />
        }
        {!check && 
          <input onChange={(e)=>handlerCheckBox(e, item.id)} type="checkbox" name="checkbox"  />
        }
      </td>
      <td className="px-8 w-fit">{inputChanger !== item.id  ? item.name : <input type='text' onChange={(e)=>handlerUpdateDetails('name', e)} className='border border-gray-300 w-32' />}</td>
      <td className="px-8 w-fit">{inputChanger !== item.id  ? item.email : <input type='text' onChange={(e)=>handlerUpdateDetails('email', e)} className='border border-gray-300 w-32' />}</td>
      <td className="px-8 w-fit">{inputChanger !== item.id  ? item.role : <input type='text' onChange={(e)=>handlerUpdateDetails('role', e)} className='border border-gray-300 w-32' />}</td>
      <td>
        <div className="flex gap-2 px-8 justify-center items-center">
          <button className="px-2 py-1 rounded-md">
              {inputChanger !== item.id  ? 
              <PiNotePencilBold onClick={()=>handlerUpdate(item.id)}  className="text-xl"/> : 

              <div className='flex gap-1'>
                  <TiTick onClick={()=>handlerTick(item.id)} className="text-xl text-green-500" />
                  <MdOutlineCancel onClick={()=>handlerUpdate(-1)} className="text-xl text-red-500" />
              </div>
              }
              
          </button>
          <button onClick={()=>handlerDelete(item.id)} className="px-2 py-1 rounded-md text-red-400">
              <MdOutlineDelete className="text-xl"/>
          </button>
        </div>
      </td>
    </>
  )
}

export default TableContent