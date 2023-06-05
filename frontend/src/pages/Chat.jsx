import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components';
import Card from 'react-bootstrap/Card';


function Chat() {
  const { senderID } = useParams();
  const [accounts, setAccounts] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8800/accounts/${senderID}/messages`)
    .then(response => setData(response.data))
    .catch(() => {

    })
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8800/accounts')
    .then(response => {
        setAccounts(response.data)
    })
    .catch(() => {

    });
  }, []);

  return (
    <div>
      {accounts.map(user => (
        <div key={user.id}>
          <CoversationCard>
            <Card>
              <Card.Body>{user.name}</Card.Body>
            </Card>
          </CoversationCard>
        </div>
      ))}
      {/* <CoversationCard>
        <Card>
          <Card.Body></Card.Body>
        </Card>
      </CoversationCard> */}
    </div>
  )
}

const CoversationCard = styled.div`
  margin-top: 60px;
`

export default Chat
