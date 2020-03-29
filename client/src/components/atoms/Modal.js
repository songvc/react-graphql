import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    display: block;
`;

const ModalHeader = styled.div`
    display: block;
`;

const ModalBody = styled.div`
    display: block;

`; 

const ModalFooter = styled.div`
    display: block;
`; 

const Modal = ({ children, props}) => {
    
    return <ModalWrapper>
        <div>
            hello
        </div>
    </ModalWrapper>
}

export default Modal;

{/* <Modal>
    <ModalHeader>
    </ModalHeader>
    <ModalBody>
    </ModalBody>
    <ModalFooter>
    </ModalFooter>
</Modal> */}