import Header from './components/Header'
import React from 'react'
import Todos from './components/Todos'
import { useState  } from 'react'
import AddTask from './components/AddTask'

const App = () => {
    const [showAddTodo, setShowAddTodo] = useState(false)
    const [todos , setTodos] = useState(
        [
              {
                  id: 1,
                  text: 'Clean the house',
                  day: 'Jan 5th at 7:10am',
                  reminder: true,
              },
              {
                  id: 2,
                  text: 'Clean the house2',
                  day: 'Jan 5th at 7:10am',
                  reminder: false,
              },
              {
                  id: 3,
                  text: 'Clean the house3',
                  day: 'Jan 5th at 7:10am',
                  reminder: true,
              },
              {
                  id: 4,
                  text: 'Clean the house4',
                  day: 'Jan 5th at 7:10am',
                  reminder: false,
              },
          ]
      )
      //add todo
      const addTodo = (todo) => {
       // console.log(todo)
       const id = Math.floor(Math.random() * 1000) + 1
       const newTodo = {id, ...todo}
       setTodos([...todos, newTodo])
      }
      //delete
      const deleteTodo =(id) =>
      {
//console.log('delete', id)
setTodos(todos.filter((todo) => todo.id !== id))
      }
      //reminder
      const toggleReminder = (id) => {
         // console.log(id)
          setTodos(
              todos.map((todo) => 
              todo.id === id ? {...todo, reminder : !todo.reminder } : todo
          ) 
          )
      }
    return(
        <div className='container'>
            <p style={{color:'purple'}}>Welcome to my first React app! You can add a to-do, delete and set reminder. Enjoy!</p>
            <div className='container'>
        <Header onAdd={()=> setShowAddTodo(!showAddTodo)} showAdd={showAddTodo}/>
        {showAddTodo && <AddTask onAdd={addTodo}/>}
        {todos.length > 0 ?<Todos todos={todos} 
        onDelete={deleteTodo} onToggle={toggleReminder}/> : 
        'No To-dos to show'}
    </div>
        </div>
 
 )
}
//class
/*
class App extends React.Component{
    render(){
return <h1>Hello from a class</h1>
    }
}*/

export default App