import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";


function App() {
  const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const handledecrement = ()=>{
    dispatch(decrement())
  }

  return (
   <div>
    <div>
      <h1>calculate</h1>
      <button onClick={handleIncrement}>increment</button>
      <div>0</div>
      <button onClick={handledecrement}>decrement</button>
    </div>
   </div>
  )
}

export default App
