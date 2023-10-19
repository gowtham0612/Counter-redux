import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./Slice";

const Component = () => {
  const count = useSelector((state) => state.value);
  console.log("vount", count);
  const dispatch = useDispatch();

  const hi = () => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => hi()}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Component;
