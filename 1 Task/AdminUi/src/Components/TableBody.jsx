import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetching, getPageLength } from "../slice/sliceFetch";
import TableContent from "./TableContent";


const TableBody = ( {check} ) => {
  const { fetchedValues, searchValue, currentPage, deleteSelected } = useSelector((state) => state.fetchedData);

  const dispatch = useDispatch();
  const [dataDisplay, setDataDisplay] = useState([]);
  const [pageStart, setPageStart] = useState(1);
  const [pageEnd, setPageEnd] = useState(10);
  const [inputChanger, setInputChanger] = useState(0);
  const [selectDelete, setSelectDelete] = useState([]);
  const [singleCheck, setSingleCheck] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handlerCheckBox = (e, value) => {
    setSingleCheck(!singleCheck)
    if (e.target.checked) {
      setSelectDelete(prev => [...prev, value]);
    } else {
      setSelectDelete(prev => prev.filter(item => item !== value));
    }
  }

  const handlerUpdate = (e) => {
    if (inputChanger === e) {
      setInputChanger(-1);
    } else {
      setInputChanger(e);
    }
  }

  const handlerDelete = (e) => {
    if (searchResult.length === 0) {
      setDataDisplay(dataDisplay.filter((item)=>item.id !== e));
    } else if (searchResult.length !== 0) {
      setSearchResult(searchResult.filter((item)=>item.id !== e));
    }
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
    if (check) {
      
      const temp = [];
      for (let i=pageStart; i<10; i++) {
        temp.push(i+1);
      }
      const temp2 = dataDisplay.filter((item, index) => {
        return !temp.includes(index + 1);
      });
      // if (searchResult.length === 0) {
      //   setDataDisplay(temp2);
      // } else if (searchResult.length !== 0) {
      //   setSearchResult(temp2);
      // }
      setDataDisplay(temp2);
      setSearchResult(temp2);
      
    } else {
      
      const temp = dataDisplay.filter((item)=> {
        return !(selectDelete).includes(item.id)
      })
      
      // if (searchResult.length === 0) {
      //   setDataDisplay(temp);
      // } else if (searchResult.length !== 0) {
      //   setSearchResult(temp);
      // } 
      setDataDisplay(temp);
      setSearchResult(temp);
    }
  }, [deleteSelected])

  const updateInput = (data, id) => {
    const updatedDataDisplay = dataDisplay.map((item) => {
      
      if (item.id === id) {
        return { ...item, name: data.name, email: data.email, role: data.role };
      }
      return item;
    });
    setDataDisplay(updatedDataDisplay);
    setSearchResult(updatedDataDisplay);
    setInputChanger(-1);
  }

  useEffect(() => {
    const arrayCopy = [...dataDisplay];
    
    let filteredData = arrayCopy.filter((item) =>
      item.name.toLowerCase().includes(searchValue?.toLowerCase()) ||
      item.email.toLowerCase().includes(searchValue?.toLowerCase()) ||
      item.role.toLowerCase().includes(searchValue?.toLowerCase())
    );
    console.log(searchValue);
    if (searchValue.length !== 0) {
      setSearchResult(filteredData);
    } else if (searchValue.length === 0) {
      let array = [];
      setSearchResult(array);
    }
  }, [searchValue]);

  if (searchResult.length !== 0) {
    return (
      searchResult.length > 0 && (searchResult.slice(pageStart, pageEnd).map((item)=>
        <tr key={item.id} >
          <TableContent 
            item={item} 
            handlerUpdate={handlerUpdate} 
            inputChanger={inputChanger} 
            handlerDelete={handlerDelete} 
            handlerCheckBox={handlerCheckBox} 
            check={check} 
            singleCheck={singleCheck} 
            updateInput={updateInput}
          />
        </tr>
      ))
    );
  }

  return (
    dataDisplay.length > 0 && (dataDisplay.slice(pageStart, pageEnd).map((item)=>
      <tr key={item.id} >
        <TableContent 
          item={item} 
          handlerUpdate={handlerUpdate} 
          inputChanger={inputChanger} 
          handlerDelete={handlerDelete} 
          handlerCheckBox={handlerCheckBox} 
          check={check} 
          singleCheck={singleCheck} 
          updateInput={updateInput}
        />
      </tr>
    ))
  );
};

export default TableBody;
