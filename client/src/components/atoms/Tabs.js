import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainerStyle = styled.div`
    display: block;
    flex: display;
    flex-direction: row;
`;

const TabHeader = styled.div`
    display:flex;
    flow-direction: row;
    border-bottom: 1px solid grey;
`;

const TabHeaderItem = styled.div`
    display: block;
    padding: 10px; 
    border-right: 1px solid black;
    cursor: pointer;
    color: black;
    background-color: ${props => props.isSelected? " #5f5dff": "white"}
`; 

const TabBody =  styled.div`
    display:block;
    margin: 15px;
`;

const TabStyle = styled.div`
    display: block;
`;

export const TabContainer = ({ defaultTab ,children, tabList }) => {
    const [ current, setCurrent ] = useState(0);
    const titleList = children.map((child) => child.props.title);

    return <TabContainerStyle>
        <TabHeader>
            {titleList.map((title, i) => {
                const isSelected = (i === current);
                return <TabHeaderItem key={i} id={i} isSelected={isSelected} onClick={(e) => setCurrent(parseInt(e.target.id,10))}>{title}</TabHeaderItem>
            })}
        </TabHeader>
        <TabBody>
            {children.map((child, i) => {
                if (i === current) {
                    return <Tab key={i} {...child} isSelected={(i === current)}>{child.props.children}</Tab>
                }
            })}
        </TabBody>
    </TabContainerStyle>
}

export const Tab = ({ children }) => {
    return <TabStyle>
        {children}
    </TabStyle>
}

{/* <TabContainer>
    <Tab title={hello1}>ff</Tab>
    <Tab title={hello2}>ff</Tab>
    <Tab title={hello3}>ff</Tab>
</TabContainer> */}

