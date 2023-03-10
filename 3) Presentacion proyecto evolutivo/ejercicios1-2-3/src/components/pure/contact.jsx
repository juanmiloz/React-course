import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>Name: {contact.name}</h2>
            <h2>Lastname: {contact.lastname}</h2>
            <h2>Email: {contact.email}</h2>
            <h2>This contact is: {contact.conected ? 'Contacto En Linea' : 'Contacto No Disponible'}</h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
