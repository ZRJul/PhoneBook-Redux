
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addContact} from '../store/index.js'

function AddContact() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [contact, setContact] = useState({
        name: '',
        username: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSaveContact = () => {
        dispatch(addContact(contact));
        navigate('/contacts');
    };

    return (
        <div>
            <h1>Додати контакт</h1>
            <form>
                <div>
                    <label htmlFor="name">Ім'я:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Прізвище:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={contact.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleSaveContact}>Зберегти</button>
                <Link to="/">Скасувати</Link>
            </form>
        </div>
    );
}

export default AddContact;


