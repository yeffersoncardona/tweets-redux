import React from 'react';
import { Modal as ModalB } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export default function Modal(props) {
    const { children } = props;
    //dispatch para ejecutar las acciones
    const dispatch = useDispatch();
    const CloseModal = state => {
        dispatch(openCloseAddTweetModalAction(state));
    }

    // useSelector para acceder a un valor en el storage
    const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);


    return (
        <ModalB
            show={isOpenModal}
            onHide={() => CloseModal(false)}
            size="md"
            centered>
            {children}
        </ModalB>);
}
