import { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchingValue, setSearchingValue] = useState("");
  const [debouncedSearchingValue, setDebouncedSearchingValue] = useState("");

  const handlerSearching = (e) => {
    setSearchingValue(e.target.value);
  };

  useEffect(()=> {
    let time = setTimeout(()=> {
        setDebouncedSearchingValue(searchingValue);
    }, 1000)
    return ()=>clearTimeout(time);
  }, [searchingValue])

  console.log(debouncedSearchingValue);

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
