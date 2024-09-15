import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    if( Number(inputRef.current.value) !== 0 ){
      setResult((result) => result / Number(inputRef.current.value));
     }else{
      alert('cannot divid by zero')
     }
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App p-5 border border-5 border-primary m-3 rounded rounded-4" > 
      <div className=""> 
        <h1 className="text-center ">Simplest Working Calculator</h1> 
      </div> 
      <form className=""> 
        <p className="text-center border p-2 " ref={resultRef}> 
          {result}
          {/* add the value of the current total */} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          className="form-control my-2 text-center p-2 "
         /> 
        <div className='btn-group w-100 my-2'>
        
        <button className='text-uppercase btn btn-success' onClick={plus}>add</button> 
        {/* Add the subtract button */} 
        <button className='text-uppercase btn btn-danger' onClick={minus}>subtract</button> 
        {/* Add the multiply button */} 
        <button className='text-uppercase btn btn-primary' onClick={times}>multiply</button> 
        {/* Add the divide button */} 
        <button className='text-uppercase btn btn-warning' onClick={divide}>divide</button> 
        {/* Add the resetInput button */} 
        <button className='text-uppercase btn btn-secondary' onClick={resetInput}>reset input</button> 
        {/* Add the resetResult button */} 
        <button className='text-uppercase btn btn-secondary ' onClick={resetResult}>reset results</button>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
