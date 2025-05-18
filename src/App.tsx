import {GlobalStyle} from './styles/GlobalStyles'
import styled from 'styled-components'
import Header from './components/Header'
import Column from './components/Column'

const Board = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 900px) {
   flex-direction: column;
   gap: 0px;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Board>
        <Column columnName="Not Done (yet)"/>
        <Column columnName="In Progress"/>
        <Column columnName="Completed!"/>
      </Board>
    </div>
  );
}

export default App;
