import { useSelector } from "react-redux";

const Child1 = () => {
  const val1 = useSelector((state) => state.userData.changedVal);

  return <>value: {val1}</>;
};

export default Child1;
