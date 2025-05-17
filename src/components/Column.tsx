import styled from 'styled-components'
import plus from '/plus.svg'

const Header = styled.h3`
    font-size: 36px;
    margin: 0px;
    padding: 10px 5px;
    font-weight: normal;
    color: #E4E4E4;
    background: #151515;
    display: inline-block;
    width: fit;
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
`
interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({title}) => {
    return (
        <Background>
            <Header>{title}</Header>
            <AddTaskButton>
                <img src="/plus.svg" alt="plus icon" />
                Yet Another Task
            </AddTaskButton>
        </Background>
        
    );
};

export default Column;