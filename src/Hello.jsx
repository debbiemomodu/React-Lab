export function Hi() {
    return <p>Hello, I am learning React!</p>
 }
 
 import {useState} from "react"

 export function State (){
    const [pext,petText] = useState("Hi, I am learning React!");
 
  const handleClick = () => {
    petText("you clicked the button!");
  }
  return (
    <div><h1>{pext}</h1>
    <button onClick={handleClick}>Click Me</button>

    </div>

  )
}

export function Greet () {
   const [name, setName] = useState("");
   
   const handleClick = (event) => {
    setName(event.target.value)
   }

    return (
      <div>
        <h1>Hello {name ? name : "Stranger"}!</h1>
       <input type = "text" placeholder="Type your name" value={name} onChange={handleClick} />
      </div>
    )
}

