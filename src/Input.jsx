 import {useState} from "react"
function ControlledInput (){
    const [output, setOutput] = useState("")
    const handleChange = (event ) => {setOutput (event.target.value)}
    const handleClick = () => {setOutput("")}
    return (
        <div>
            <input type="text" value={output} onChange={handleChange} />
            <h2>{output}</h2>
            <button onClick={handleClick}>Clear</button>
        </div>
    )
}
export default ControlledInput