import { MdOutlineDelete } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

const TableContent = ( {item, handlerUpdate, handlerDelete, inputChanger, handlerCheckBox, checked} ) => {

  return (
    <>
        <td className="px-4">
          <input onChange={(e)=>handlerCheckBox(e, item.id)} type="checkbox" name="checkbox" id="" checked={checked} />
        </td>
        <td className="px-8 w-fit">{inputChanger !== item.id  ? item.name : <input type='text' className='border border-gray-300 w-32' />}</td>
        <td className="px-8 w-fit">{inputChanger !== item.id  ? item.email : <input type='text' className='border border-gray-300 w-32' />}</td>
        <td className="px-8 w-fit">{inputChanger !== item.id  ? item.role : <input type='text' className='border border-gray-300 w-32' />}</td>
        <td>
          <div className="flex gap-2 px-8 justify-center items-center">
            <button className="px-2 py-1 rounded-md">
                {inputChanger !== item.id  ? 
                <PiNotePencilBold onClick={()=>handlerUpdate(item.id)}  className="text-xl"/> : 

                <div className='flex gap-1'>
                    <TiTick className="text-xl text-green-500" />
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
