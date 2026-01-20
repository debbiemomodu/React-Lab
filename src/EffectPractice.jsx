import { useState, useEffect } from "react";

export function EffectExample() {
  useEffect(() => {
    // console.log("Component rendered");
  }, []);

  return <h1>Check the console</h1>;
}



export function EffecExample2(){
   useEffect (() => {},[])

   return <h2> Hello effect 2</h2>
}




export function Counter() {
 const[count,setCount] = useState(0);
 useEffect (() => {},[count])
 return <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}


export function Counter2(){
  const [counter,setCounter]= useState (20)
  useEffect (() => {
    console.log("value changed")
  }, [counter])
  return <div>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>+</button>
  </div>
}


