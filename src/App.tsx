import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

import { useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";


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
      <Button onClick={ ()=>handleIncrement(7)}>increment by 7</Button>
      <Button onClick={()=>handleIncrement(1)}>increment</Button>
      <div>{count}</div>
      <Button onClick={handledecrement}>decrement</Button>
    </div>
   </div>
  )
}

export default App
