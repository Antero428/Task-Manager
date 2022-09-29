import React from 'react'
import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Comp Sci Project',
            day: 'September 15th at 11:59pm',
            reminder: true,
        },
        {
            id:2,
            text: 'Counseling Appt',
            day: 'September 20th at 11:00am',
            reminder: true,
        },
        {
            id:3,
            text: 'Presentation',
            day: 'September 25th at 10:00am',
            reminder: true,
        },
    ])

    return (
        <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks
