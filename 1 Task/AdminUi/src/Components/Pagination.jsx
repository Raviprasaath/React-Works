import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RiArrowLeftSLine , RiArrowRightSLine  } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPageValue, getDeleteSelected } from "../slice/sliceFetch";

const Pagination = () => {
  const { pageLength } = useSelector((state) => state.fetchedData);
  let page = Math.floor(pageLength/10) + 1;
  const [currentPage, setCurrentPage] = useState(1);
  let arr = [];
  arr.length = page;
  const pageValue = arr.fill(0);

  const dispatch = useDispatch();

  const handlerButton = (e) => {
    setCurrentPage(e)
  }

  const handlerButtonNP = (value) => {
    if (value === "next") {
      if (page > currentPage) {
        setCurrentPage(prev => prev+1);
      }
    } else if (value === "prev") {
      if (page >= currentPage && currentPage !== 1) {
        setCurrentPage(prev => prev-1);
      }
    }
  }

  const handlerButtonNPFull = (value) => {
    if (value === "next") {
      setCurrentPage(page);
    } else if (value === "prev") {
      setCurrentPage(1);
    }
  }

  const handlerDeleteSelected = () => {
    dispatch(getDeleteSelected());
  }

  useEffect(()=> {
    dispatch(getCurrentPageValue(currentPage));
  }, [currentPage])

  return (
    <div className="flex w-full justify-around py-4 px-2">
      <button onClick={handlerDeleteSelected} className="w-1/7 px-1 py-1 rounded-md bg-red-400">
        Delete Selected
      </button>
      <div className="w-5/7 flex justify-center items-center gap-2">
        <button onClick={()=>handlerButtonNPFull("prev")} className="text-xl">
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button onClick={()=>handlerButtonNP("prev")} className="text-xl">
          <RiArrowLeftSLine />
        </button>
        {pageValue?.map((item, index)=> (
          <button onClick={()=>handlerButton(index+1)} key={index} className={`border-2 rounded-full w-7 h-7 ${index+1 === Number(currentPage)  ?"text-black border-blue-300  ":"text-white bg-blue-400"}  `}>
            {index+1}
          </button>
        ))}

        <button onClick={()=>handlerButtonNP("next")} className="text-xl">
          <RiArrowRightSLine  />
        </button>
        <button  onClick={()=>handlerButtonNPFull("next")}  className="text-xl">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      <div className="1/7">

      </div>
    </div>
  )
}

export default Pagination
