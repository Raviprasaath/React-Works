import TableBody from './TableBody'
import { useDispatch } from 'react-redux'
import { getDeleteSelectedAll } from '../slice/sliceFetch';
import { useState } from 'react';

const TableHeader = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handlerCheck = () => {
    dispatch(getDeleteSelectedAll());
    setChecked(!checked);
  }

  return (
    <div className='my-4 flex justify-center'>
      <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" onChange={handlerCheck} checked={checked} />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          <TableBody checked={checked} />
        </tbody>
      </table>
    </div>
  )
}

export default TableHeader
