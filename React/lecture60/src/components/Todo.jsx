import React, { useEffect, useState } from 'react'

function Todo() {

    // let value = ""
    let [value , setValue] = useState("")
    let [todos , setTodos] = useState(["todo 1","todo 2","todo 3"])
    // let todos = ["todo 1","todo 2","todo 3" ]

    function printValue(e){
        // console.log(e.target)
        // console.log(e.target.value)
        setValue(e.target.value)
    }

    function addTodo(e){
        e.preventDefault()

        // console.log(value)
        // todos.push(value)
        if(!value.trim()){
            return
        }
        setTodos((prev) => {
            return [...prev , value]
            // value = ""
        })
        setValue("")
    }

  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={addTodo}>
            <input value={value} type="text" onChange={printValue} />
            <button>Add</button>
        </form>

        <ul>
            {
                todos.map((todo) => <li>{todo}</li>)
            }
        </ul>
    </div>
  )
}

export default Todo