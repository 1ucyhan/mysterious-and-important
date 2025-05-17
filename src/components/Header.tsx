import React from 'react';
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 46px;
    font-weight: normal;
    margin: 0;
`;

const SubHeading = styled.p`
    font-size: 20px;
    font-family: dmFont;
    font-weight: normal;
    margin: 0;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LineWrapper = styled(Wrapper)`
    flex-grow: 1;
    justify-content: space-between;
`
const BlackLine = styled.hr`
    border-top: 2px black solid;
    margin: 0;

`

const BigWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

`

function Header() {
    return (
        <BigWrapper>
            <Wrapper>
                <Title> yourworkismysteriousandimportant </Title>
                <SubHeading> a very important kanban board </SubHeading>
            </Wrapper>
            <LineWrapper>
                <BlackLine />
                <BlackLine />
                <BlackLine />
                <BlackLine />
            </LineWrapper>
        </BigWrapper>
    );
}

export default Header;