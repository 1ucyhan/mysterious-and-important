import styled from 'styled-components'
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask, moveTask } from '../store/kanbanSlice'
import { RootState } from '../store/store';

// styles...
const Header = styled.h3`
    font-size: 36px;
    margin: 0px;
    padding: 10px 5px;
    font-weight: normal;
    color: #E4E4E4;
    background: #151515;
    display: inline-block;
    width: fit-content;
`
const Background = styled.div`
    display: flex;
    flex-direction: column; 
    margin-top: 40px;
    padding: 30px;
    background-color: white;
    width: 350px;
    height: 550px;
    border: 2px solid black;
    box-shadow: 20px 20px 0px 0px #000000;
`

const AddTaskButton = styled.button`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 30px;
    margin-top: auto;
    width: fill;
    font-family: ppFont;
    bottom: 30px;
    padding: 10px 30px;
    border-radius: 30px;
    background-color: white;
    font-size: 18px;
    border: 1px black solid;
    transition: box-shadow 0.2s ease, background-color 0.2s ease;

    &:hover  {
        box-shadow: 5px 5px 0px 0px #000000;
    }
`
interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({title}) => {
    const dispatch = useDispatch()
    const tasks = useSelector((state: RootState) => 
        state.kanban.tasks.filter(task => task.columnName == title)
    )
    const handleAddTask = () => {
        console.log("clicked on add task")
        const newTask = prompt("What is your task's name?");
        if (newTask) {
            dispatch(addTask({name: newTask, columnName: title}))
        }
    }
    return (
        <Background>
            <Header>{title}</Header>
            {/* <Task taskName="penis"></Task> */}
            {/* mapping all the tasks... */}
            {tasks.map((task) => (
                <Task key={task.id} id={task.id} name={task.name} columnName={title}/>
            ))}
            <AddTaskButton onClick={handleAddTask}>
                <img src="/plus.svg" alt="plus icon" />
                Yet Another Task...
            </AddTaskButton>
           
        </Background>
        
    );
};

export default Column;