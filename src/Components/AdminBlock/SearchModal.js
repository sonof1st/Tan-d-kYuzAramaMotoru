import React from 'react'
import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const SearchModal = props => {

    const StyledDiv = styled.div`
       padding: 15px;
`

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <StyledDiv>
            <Button variant="primary" size="sm" className="mr-5" onClick={handleShow}>
                Sonuçları Görüntüle
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Aradığınız Kişi ile İlgili Kayıtlar Aşağıda Gösterilmiştir:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {props.answer.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>
        </StyledDiv>
    );
};

//{ props.answer + "\n" } 

export default SearchModal;