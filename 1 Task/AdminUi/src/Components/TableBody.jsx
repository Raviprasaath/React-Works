import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching, getPageLength } from "../slice/sliceFetch";
import TableContent from "./TableContent";


const TableBody = ( {checked} ) => {
  const { fetchedValues, pageLength, currentPage, deleteSelected, deleteSelectedAll } = useSelector((state) => state.fetchedData);

  const dispatch = useDispatch();
  const [dataDisplay, setDataDisplay] = useState([]);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(10);
  const [inputChanger, setInputChanger] = useState(0);
  const [selectDelete, setSelectDelete] = useState([]);

  const handlerCheckBox = (e, value) => {
      if (e.target.checked) {
          setSelectDelete(prev => [...prev, value]);
      } else {
          setSelectDelete(prev => prev.filter(item => item !== value));
      }
  }
  
  console.log(selectDelete);


  const handlerUpdate = (e) => {
    if (inputChanger === e) {
      setInputChanger(-1);
    } else {
      setInputChanger(e);
    }
  }

  const handlerDelete = (e) => {
    setDataDisplay(dataDisplay.filter((item)=>item.id !== e))
  }



  useEffect(() => {
    dispatch(fetching());
  }, []);

  useEffect(()=> {
    setDataDisplay(fetchedValues);
  }, [fetchedValues])

  useEffect(()=> {
    dispatch(getPageLength(dataDisplay.length));
  }, [dataDisplay])

  useEffect(()=> {
    setPageStart((currentPage*10) - 10);
    setPageEnd(currentPage*10)
  }, [currentPage])



  useEffect(()=> {
    const temp = [];
    for (let i=pageStart; i<10; i++) {
      temp.push(i+1);
    }
    const temp2 = dataDisplay.filter((item)=> {
      return !(temp).includes(item.id)
    })
    setDataDisplay(temp2)
    console.log('temp2', temp);

  }, [deleteSelectedAll, deleteSelected])

  useEffect(()=> {
    const temp = dataDisplay.filter((item)=> {
      return !(selectDelete).includes(item.id)
    })
    setDataDisplay(temp)
  }, [deleteSelected])




  console.log(pageStart, pageEnd);
  console.log(checked);
  return (
    dataDisplay.length > 0 && (dataDisplay.slice(pageStart, pageEnd).map((item)=>
      <tr key={item.id} >
        <TableContent item={item} handlerUpdate={handlerUpdate} inputChanger={inputChanger} handlerDelete={handlerDelete} handlerCheckBox={handlerCheckBox} checked={checked} />
      </tr>
    ))
  );
};

export default TableBody;
