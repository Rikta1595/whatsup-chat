import React, {useState} from 'react'
import Login from './Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/conversationProvider';

function Dashboard({id}) {
    const {selectedConversation} = useConversations()
    return (
        <div className='d-flex' style={{height: '100vh'}}>
            <Sidebar id={id} />
            { selectedConversation && <OpenConversation /> }
        </div>
        
    );
}

export default Dashboard;
