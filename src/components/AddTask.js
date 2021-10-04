import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
    const[text, setText]= useState("")
    const[day, setDay]= useState("")
    const[reminder, setReminder] = useState(false)

    const onSubmit = (e) =>
    {
        e.preventDefault()

        if(!text)
        {
           alert("Please Add Something in the Input")
           return
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-from" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
            <label>Day in Time</label>
            <input type="text" placeholder="Add Task" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
            <label>Add day in Time</label>
            <input type="checkbox" placeholder="Add Task" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className="btn btn-block" value="Save Task"></input>
        </form>
    )
}

export default AddTask
