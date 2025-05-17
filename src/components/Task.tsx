import styled from 'styled-components'

const TaskWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 20px;
    gap: 30px;
    width: fill;
    font-family: dmFont;
    bottom: 30px;
    padding: 10px 30px;
    background-color: #E4E4E4;
    font-size: 18px;
    border: 1px black solid;
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

const Task: React.FC<TaskProps> = ({id, name, columnName}) => {
    return (
        <TaskWrapper>
            <Checkbox></Checkbox>
            {name}
            <Delete src="/delete.svg" alt="delete icon"></Delete>
        </TaskWrapper>
    );
};

export default Task;