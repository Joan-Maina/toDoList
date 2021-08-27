import { useState } from "react"

const AddTask = ({onAdd}) =>
{
    const [ text, setText] = useState('')
    const [ day, setDay] = useState('')
    const [ reminder, setReminder] = useState(false)

const onSubmit = (e) =>{
    e.preventDefault()

    if(!text){
        alert('please add a todo')
        return
    }
    onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)

    }

    return(
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
    <label>
        Task
    </label>
    <input value={text} onChange = {(e) => setText(e.target.value)} type = 'text' placeholder='Add To Do'/>
</div>
<div className = 'form-control'>
    <label>
        Day and time:
    </label>
    <input  value={day} onChange = {(e) => setDay(e.target.value)} type = 'text' placeholder='Add day and time'/>
</div>
<div className = 'form-control form-control-check'>
    <label>
        Reminder
    </label>
    <input  checked={reminder} value={reminder} onChange = {(e) => setReminder(e.currentTarget.checked)} type = 'checkbox' placeholder='set Reminder'/>
</div>
<input type='submit' value='Save to - do' className='btn btn-block'/>
        </form>
    )
}

export default AddTask