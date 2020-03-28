import React from 'react';
import styled from 'styled-component';

const ListViewStyle = div.styled`

`;

export const ListView = ({ children}) => {
    return <div>
        {children.map((child) => {
            return <ListItem />
        })}
    </div>
}

const ListItem = ({ children, description, link, time }) => {
    return <div>
        <div>{time}</div>
        <div>{description}</div>
        <div>{link}</div>
    </div>
}

{/* <ListView>
    <ListItem desription={} link={} time={} />
</ListView> */}