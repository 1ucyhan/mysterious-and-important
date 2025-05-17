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

interface TaskProps {
    taskName: string;
}

const Task: React.FC<TaskProps> = ({taskName}) => {
    return (
        <TaskWrapper>
            <Checkbox></Checkbox>
            {taskName}
        </TaskWrapper>
    );
};

export default Task;