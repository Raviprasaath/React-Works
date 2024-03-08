import TableBody from "./TableBody";
import { useState } from "react";

const TableHeader = () => {
  const [check, setCheck] = useState(false);
  const handlerCheck = () => {
    setCheck(!check);
  };

  return (
    <div className="my-4 flex justify-center">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handlerCheck} checked={check} />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <TableBody check={check} />
        </tbody>
      </table>
    </div>
  );
};

export default TableHeader;
