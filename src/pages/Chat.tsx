import React from 'react';
import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonItem, IonTextarea, IonRow, IonCol, IonFabButton } from '@ionic/react';

import './Chat.css';


const Chat: React.FC = () => {
  const [text, setText] = useState<any>();
  
  let messages = [
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 2',
      msg: 'Hey'
    },
    {
      user: 'User 1',
      msg: 'Where are you?'
    },
    {
      user: 'User 2',
      msg: 'Off for work'
    },
    {
      user: 'User 1',
      msg: 'I am leaving for market, do you want to come'
    },
    {
      user: 'User 2',
      msg: 'Nah'
    },
    {
      user: 'User 1',
      msg: 'Why? What is wrong'
    },
    {
      user: 'User 2',
      msg: 'I have other stuff to work on'
    },
    {
      user: 'User 1',
      msg: 'Alright see you next weekend'
    },
    {
      user: 'User 2',
      msg: 'Yeah you too, Bye!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 2',
      msg: 'Hey'
    },
    {
      user: 'User 1',
      msg: 'Where are you?'
    },
    {
      user: 'User 2',
      msg: 'Off for work'
    },
    {
      user: 'User 1',
      msg: 'I am leaving for market, do you want to come'
    },
    {
      user: 'User 2',
      msg: 'Nah'
    },
    {
      user: 'User 1',
      msg: 'Why? What is wrong'
    },
    {
      user: 'User 2',
      msg: 'I have other stuff to work on'
    },
    {
      user: 'User 1',
      msg: 'Alright see you next weekend'
    },
    {
      user: 'User 2',
      msg: 'Yeah you too, Bye!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 2',
      msg: 'Hey'
    },
    {
      user: 'User 1',
      msg: 'Where are you?'
    },
    {
      user: 'User 2',
      msg: 'Off for work'
    },
    {
      user: 'User 1',
      msg: 'I am leaving for market, do you want to come'
    },
    {
      user: 'User 2',
      msg: 'Nah'
    },
    {
      user: 'User 1',
      msg: 'Why? What is wrong'
    },
    {
      user: 'User 2',
      msg: 'I have other stuff to work on'
    },
    {
      user: 'User 1',
      msg: 'Alright see you next weekend'
    },
    {
      user: 'User 2',
      msg: 'Yeah you too, Bye!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    },
    {
      user: 'User 2',
      msg: 'Hey'
    },
    {
      user: 'User 1',
      msg: 'Where are you?'
    },
    {
      user: 'User 2',
      msg: 'Off for work'
    },
    {
      user: 'User 1',
      msg: 'I am leaving for market, do you want to come'
    },
    {
      user: 'User 2',
      msg: 'Nah'
    },
    {
      user: 'User 1',
      msg: 'Why? What is wrong'
    },
    {
      user: 'User 2',
      msg: 'I have other stuff to work on'
    },
    {
      user: 'User 1',
      msg: 'Alright see you next weekend'
    },
    {
      user: 'User 2',
      msg: 'Yeah you too, Bye!'
    },
    {
      user: 'User 1',
      msg: 'Hi!'
    }
  ];
  
  const currentUser = "User 1"
  
  const msgLst = messages.map((arr, i) => {
    if(currentUser !== messages[i].user){
        return(
          <IonRow id={i.toString()} className="received-msg">
            <IonCol size="8">
              <span> {messages[i].msg} </span>
            </IonCol>
          </IonRow>
        )
    }else{
      return(
        <IonRow className="received-msg">
          <IonCol offset="6" size="8">
            <span> {messages[i].msg} </span>
          </IonCol>
        </IonRow>
      )
    }    
  })

  function sendMessage(txt:string){
    var newMsg = '<IonRow className="received-msg">'+
                    '<IonCol size="8">'+
                      '<span> '+ txt +' </span>'+
                    '</IonCol>'+
                  '</IonRow><br><br>'

    var elm = document.getElementById("new-msg");
    setText("")
    elm?.insertAdjacentHTML('beforeend', newMsg);
    elm?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat Room</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chat Room</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="chat-display">
          <IonRow className="msg-list">
            <IonCol id="new-msg" size="10">
                {msgLst}
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="chat-input">
          <IonRow>
            <IonCol size="10">
              <IonTextarea id="message" value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonCol>
            <IonCol id="sndMsg" size="2" text-center>
              <IonFabButton color="tertiary" onClick={() => {sendMessage(text)}}>Send</IonFabButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
