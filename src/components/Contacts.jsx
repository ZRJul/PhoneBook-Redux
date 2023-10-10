
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Modal from "./Modal.jsx";
import { useDispatch, useSelector } from 'react-redux';
import {updateContacts, deleteContact} from '../store/index.js'


function Contacts() {

    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts);

    useEffect(() => {
        if (!contacts.length) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => dispatch(updateContacts(data)));
        }
    }, [contacts, dispatch]);

    const handleDeleteContact = (contactId) => {
        setIsModalOpen(true);
        setContactToDelete(contactId);
    };

    const confirmDelete = () => {
        dispatch(deleteContact(contactToDelete));
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <h1>Список контактів</h1>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дії</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <Link to={`/edit/${contact.id}`}>Редагувати</Link>
                            <button onClick={() => handleDeleteContact(contact.id)}>
                                Видалити
                            </button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal
                isOpen={isModalOpen}
                onCancel={cancelDelete}
                onConfirm={confirmDelete}
            />
        </div>
    );
}

export default Contacts;



