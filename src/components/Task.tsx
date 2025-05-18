import { useDispatch } from 'react-redux'
import styled from 'styled-components'  
import { deleteTask } from '../store/kanbanSlice'
import { useDrag } from 'react-dnd'
import { useRef } from 'react'

const TaskWrapper = styled.div<{ isDragging?: boolean }>`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 20px;
    gap: 30px;
    font-family: dmFont;
    bottom: 30px;
    padding: 10px 30px;
    background-color: #E4E4E4;
    font-size: 18px;
    border: 1px black solid;
    cursor: grab;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #151515;
    border-radius: 50%;
`

const Delete = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: auto;
`

interface TaskProps {
    id: string
    name: string
    columnName: string
}

const Task: React.FC<TaskProps> = ({ id, name, columnName }) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLDivElement>(null)

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id, columnName },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    drag(ref)
    
    const handleDeleteTask = () => {
        dispatch(deleteTask({ id: id }))
    }
    
    return (
        <TaskWrapper ref={ref} isDragging={isDragging}>
            <Checkbox></Checkbox>
            {name}
            <Delete src="/delete.svg" alt="delete icon" onClick={handleDeleteTask} />
        </TaskWrapper>
    )
}

export default Task