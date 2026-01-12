 import { Hi,State,Greet} from "./Hello"
 import {Greting,lastName }from "./Greetinggs"
 import {Card} from "./Card"
 import {ToggleText} from "./ToggleText" 
 import {List,TodoList }from "./Map"
 import Skill from "./Skill" 
 import ControllledInput from "./Input"
 import FormExample from "./Submit"
 import Todoform from "./TodoForm"
function App (){
  return <div>
    <h1>Components of React</h1>
    <Hi />
    <State />
    <Greet />
    <Greting name="Alice" />
    <lastName last="Momodu" />
    <Card title="mon" description=" tit" />
    <ToggleText />
    <List />
    <TodoList />
    <Skill />
    <ControllledInput />
    <FormExample />
    <Todoform />
  </div>
   
  
}

export default App
