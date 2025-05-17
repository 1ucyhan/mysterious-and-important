import styled from 'styled-components'

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
    margin-top: 40px;
    padding: 30px;
    background-color: white;
    width: 350px;
    height: 550px;
    border: 2px solid black;
    box-shadow: 20px 20px 0px 0px #000000;
`

interface ColumnProps {
    title: string;
}

const Column: React.FC<ColumnProps> = ({title}) => {
    return (
        <Background>
            <Header>{title}</Header>
        </Background>
    );
};

export default Column;