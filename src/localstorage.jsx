import { useState, useEffect } from "react";

export  function LocalStorageCounter() {
  
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? Number(savedCount) : 0;
  });

  
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export  function LocalStorageCounter2() {
  const [count2,setCount2] = useState(() => {
    const savedCount2 = localStorage.getItem("count2")
    return savedCount2 ? Number(savedCount2) : 0
  })
  useEffect (() => {
    localStorage.setItem("count2", count2)
  },[count2])

  return(
    <div> 
      <h1>{count2}</h1>
      <button onClick={() => setCount2 (count2+1)}>+</button>
      <button onClick={() => setCount2 (count2-1)}>-</button>
    </div>
  )
}