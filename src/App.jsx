 import { Hi,State,Greet} from "./Hello"
 import {Greting,lastName }from "./Greetinggs"
 import {Card} from "./Card"
 import {ToggleText} from "./ToggleText" 
 import {List,TodoList }from "./Map"
 import Skill from "./Skill" 
 import ControllledInput from "./Input"
 import FormExample from "./Submit"
 import Todoform from "./TodoForm"
 import {EffectExample, EffecExample2, Counter, Counter2} from "./EffectPractice"
 import {LocalStorageCounter,LocalStorageCounter2} from "./localstorage"
 
 
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
    <EffectExample />
    <EffecExample2 />
    <Counter />
    <Counter2 />
    <LocalStorageCounter />
    <LocalStorageCounter2 />
  </div>
   
  
}

export default App
