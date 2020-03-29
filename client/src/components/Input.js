import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
`;  

const Inputs = styled.input`
    margin: 10px 0px;
    width: 200px;
    height: 30px;
    display: block;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);

    :focus {
        outline: none;
    }
`;

// width: 150px;
// height: 30px;
// border: 1px solid rgba(34,36,38,.15);
// margin-right: 5px;
// color: rgba(0,0,0,.87);
// border-radius: .28571429rem;
// :focus {
//     outline: none;
// }

const Input = (props) => {
    // console.log('input props', props);
    return <Inputs {...props} /> 
}
export default Input;