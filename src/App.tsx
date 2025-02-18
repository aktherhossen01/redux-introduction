import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppSelector } from "./redux/hook";


function App() {
  const dispatch = useDispatch();
  const {count} = useAppSelector((state)=>state.counter);
  
  

  const handleIncrement = (ammount:number)=>{
    dispatch(increment(ammount))
  }
  const handledecrement = ()=>{
    dispatch(decrement())
  }

  return (
   <div>
    <div>
      <h1>calculate</h1>
      <button onClick={ ()=>handleIncrement(7)}>increment by 7</button>
      <button onClick={()=>handleIncrement(1)}>increment</button>
      <div>{count}</div>
      <button onClick={handledecrement}>decrement</button>
    </div>
   </div>
  )
}

export default App
