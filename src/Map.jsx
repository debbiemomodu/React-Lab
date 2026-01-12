//  function List() {
//   const items = ["React", "JavaScript", "CSS"];

//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }



 export function List (){
    const items = ["original", "java", "css"];
    return(<ul>
    {items.map( (x,y) => (
       <li key={y}>{x}</li>
    ) )}
    </ul>)
}


import { useState } from "react";

 export function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Practice JSX"]);

  return (
    <div>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
}

