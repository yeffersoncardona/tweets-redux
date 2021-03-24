import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { validationFormAddTweetAction } from '../actions/validationAction';
import { addTweetAction } from '../actions/tweetsActions';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';
import uuid from 'uuidv4';
import moment from 'moment';


export default function FormAddTweet() {

    const [formValue, setFormValue] = useState({
        name: "",
        tweet: ""
    });
    const { uuid } = require('uuidv4');
    // Inicializacion del dispach y ejecucion de las acciones
    const dispatch = useDispatch();
    const errorForm = state => dispatch(validationFormAddTweetAction(state));
    const addTweet = state => dispatch(addTweetAction(state));
    const closeModal = state => dispatch(openCloseAddTweetModalAction(state));
    //Obtener estado de la validacion del formulario
    const errorFormValue = useSelector(state => state.validations.errorFormAddTweet);

    const onChange = e => {
        setFormValue({
            ...formValue, [e.target.name]: e.target.value

        })
    }
    const onSubmit = e => {
        e.preventDefault(); // evita que se recargue la pagina
        const { name, tweet } = formValue;

        if (!name || !tweet) {
            errorForm(true);

        } else {
            errorForm(false);
            addTweet({
                id: uuid(),
                name,
                tweet,
                date: moment()
            });
            closeModal(false);

        }
    }
    return (
        <Form className="aling-items-center" style={{ padding: 20 }} onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center">
                <h1>
                    Nuevo Tweet
                </h1>
            </Form.Group>
            <Form.Group className="text-center">
                <Form.Control type="text" name="name" placeholder="Escribe tu nombre">

                </Form.Control>
            </Form.Group>
            <Form.Group className="text-center">
                <Form.Control as="textarea" name="tweet" row="3" placeholder="Escribe lo que quieres comunicar..">

                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Tweetear
            </Button>
            { errorFormValue && (
                <Alert variant="danger" className="mt-4">
                    Todos los campos son obligatorios
                </Alert>
            )}
        </Form>
    );
}






