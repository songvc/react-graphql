import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainerStyle = styled.div`
    display:block;
    flex: display;
    flex-direction: row;
`;

const TabStyle = styled.div`
    display: inline;
    padding: 15px;
`;

export const TabContainer = ({children}) => {
    const [ current, SetCurrent ] = useState(0);
    return <TabContainerStyle>
        {children}
    </TabContainerStyle>
}

export const Tab = ({ children }) => {
    return <TabStyle>
        {children}
    </TabStyle>
}

{/* <TabContainer>
    <Tab>ff</Tab>
    <Tab>ff</Tab>
    <Tab>ff</Tab>
</TabContainer> */}

