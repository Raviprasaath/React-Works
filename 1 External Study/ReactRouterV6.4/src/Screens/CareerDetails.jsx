import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CareerDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetching = async() => {
    const response = await fetch(`http://localhost:8000/careers/${id}`);
    if (response.ok) {
      const result =  await response.json();
      setData(result);
    } else {
      throw new Error('URL fails')
    }
  }

  useEffect(()=> {
    fetching();
  }, [])

  return (
    <>  
    <div className="flex gap-2 w-fit bg-yellow-300 p-2 m-2">
        <div>
            {data.title}
        </div>
        <div>
            {data.salary}
        </div>
        <div>
            {data.location}
        </div>
    </div>
    </>
  );
};

export default CareerDetails;
