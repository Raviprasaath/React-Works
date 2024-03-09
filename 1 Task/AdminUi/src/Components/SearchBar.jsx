import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchValue } from "../slice/sliceFetch";

const SearchBar = () => {
  const [searchingValue, setSearchingValue] = useState("");

  const dispatch = useDispatch();

  const handlerSearching = (e) => {
    setSearchingValue(e.target.value);
  };

  useEffect(()=> {
    let time = setTimeout(()=> {  
      dispatch(getSearchValue(searchingValue));
    }, 100)
    return ()=>clearTimeout(time);
  }, [searchingValue])

  return (
    <>
      <input
        type="text"
        className="border border-black w-11/12 px-2 py-1"
        onChange={handlerSearching}
        value={searchingValue}
        placeholder="Search by name, email or role"
      />
    </>
  );
};

export default SearchBar;
