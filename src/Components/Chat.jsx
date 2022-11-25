import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import {db} from '../firebase'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import SendMessage from './SendMessage';

const Chat = () => {
    //setting msg to a empty array []
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    //useEffect is used for any real time changes
    useEffect(()=>{
        //timestimp will have the real time of server side
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
          let messages = []
          querySnapshot.forEach( (doc) => {
            messages.push({...doc.data(), id: doc.id});
          });
          setMessages(messages);

        });
        return () => unsubscribe();
        
    },[]);
  return (
    <>
    <main className='flex flex-col p-[10px] relative'>
      {/* chat Message component */}
      {messages && messages.map((message) =>(
        <Message key={message.id} message={message}/>
      ))}
    </main>

    {/* Send Message component */}
    <SendMessage scroll={scroll}/>
    <span ref={scroll}></span>
    </>
  )
}

export default Chat
