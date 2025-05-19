import styled from 'styled-components'
import Task from './Task';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/store';
import { useDrop } from 'react-dnd';
import { useRef } from 'react';
import { curryAddTask, curryMoveTask } from '../actions'
import { Column as ColumnType } from '../types';

const Header = styled.h3`
    font-size: 36px;
    margin: 0px;
    padding: 10px 5px;
    font-weight: normal;
    color: var(--important-gray);
    background: var(--mysterious-black);
    display: inline-block;
    width: fit-content;

    @media (max-width: 800px) {
        font-size: 18px
    }

    @media (min-width: 801px) and (max-width: 1024px) {
        font-size: 24px
    }
`
const Background = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 30px;
    background-color: white;
    flex-grow: 1;
    // using calc!
    height: calc(100vh - 300px);
    border: 2px solid black;
    box-shadow: 20px 20px 0px 0px #000000;

    @media (max-width: 800px) {
        flex-grow: 1;
        height: 400px;
    }

    @media (min-width: 1100px) and (max-width: 1250px) {
        width: 260px;
    }
`
const TaskWrapper = styled.div`
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 15px;
    margin-bottom: 30px;
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

    @media (max-width: 800px) {
        font-size: 14px
    }

    @media (min-width: 801px) and (max-width: 1024px) {
        font-size: 16px
    }
`

const Column: React.FC<ColumnType> = ({columnName}) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLDivElement>(null)
    const tasks = useSelector((state: RootState) => 
        state.kanban.tasks.filter(task => task.columnName == columnName)
    )

    const [{ isOver }, drop] = useDrop({
        accept: 'task',
        drop: (item: {id: string; columnName: string }) => {
            if (item.columnName != columnName) {
                curryMoveTask(dispatch)(item.id)(columnName)
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    });

    drop(ref)

    const handleAddTask = () => {
        const newTask = prompt("wut is ur task")
        if (newTask) {
            curryAddTask(dispatch)(columnName)(newTask)
        }
    }

    return (
        <Background
            ref = {ref}
            style = {{
                backgroundColor: isOver ? '#f0f0f0' : 'white',
                boxShadow: isOver ? '25px 25px 0px 0px #000000' : '20px 20px 0px 0px #000000',
                transition: '0.2s ease',
            }}
        >
            <Header>{columnName}</Header>
            {/* <Task taskName="penis"></Task> */}
            {/* mapping all the tasks... */}
            <TaskWrapper>
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id} name={task.name} columnName={columnName}/>
                ))}
            </TaskWrapper>
            <AddTaskButton onClick={handleAddTask}>
                <img src="/plus.svg" alt="plus icon" />
                Yet Another Task...

            </AddTaskButton>
           
        </Background>
        
    );
};

export default Column;