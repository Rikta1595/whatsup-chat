import React, {useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import {contacts, useContacts} from '../contexts/contactsProvider'
import { useConversations } from '../contexts/conversationProvider';
function NewConversationModal({closeModal}) {
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    function handleSubmit(e) {
        console.log(selectedContactIds)
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    function handleCheckboxChange(contactId) {
        console.log('checked', contactId)
        setSelectedContactIds(prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId=> {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }
    return (
        <>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map((contact)=> (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={()=>handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Form.Group>
                        <Button type="submit" style={{marginTop: '10px'}}>Create</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </>
    );
}

export default NewConversationModal;
