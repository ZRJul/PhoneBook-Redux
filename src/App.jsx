import './App.css'
import React, {useState} from 'react';
import Home from "./components/Home.jsx";
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from "./components/Root.jsx";
import EditContact from "./components/EditContact.jsx";



function App() {

    const [contacts, setContacts] = useState([]);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            children:[
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/contacts',
                    element: <Contacts/>
                },
                {
                    path: '/add',
                    element: <AddContact contacts={contacts} setContacts={setContacts}/>
                },
                {
                    path: '/edit/:contactId',
                    element: <EditContact contacts={contacts} setContacts={setContacts}/>
                }
            ]
        }

    ])




    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
