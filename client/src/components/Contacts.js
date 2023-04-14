import React, {useState} from 'react'
import { useContacts } from '../contexts/contactsProvider';
import { ListGroup } from 'react-bootstrap';

function Contacts({id}) {
    const {contacts} = useContacts()
    console.log(contacts)
    return (
        <ListGroup variant='flush'>
            {contacts.map((item)=> (
                <ListGroup.Item key={item.id}>
                    {item.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Contacts;
