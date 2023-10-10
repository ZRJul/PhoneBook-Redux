import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {editContact} from '../store/index.js'

function EditContact({ contacts, setContacts }) {
    const { contactId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selectedContact = contacts.find((contact) => contact.id === parseInt(contactId, 10));
    const [editedContact, setEditedContact] = useState(selectedContact);

    useEffect(() => {
        setEditedContact(selectedContact);
    }, [selectedContact]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedContact({
            ...editedContact,
            [name]: value,
        });
    };

    const handleSaveEdit = () => {
        dispatch(editContact(editedContact));
        navigate('/contacts');
    };

    return (
        <div>
            <h1>Редагувати контакт</h1>
            <form>
                <div>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={editedContact?.name || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Прізвище:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={editedContact?.username || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={editedContact?.phone || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" onClick={handleSaveEdit}>
                    Зберегти зміни
                </button>
                <Link to="/contacts">Скасувати</Link>
            </form>
        </div>
    );
}

export default EditContact;
