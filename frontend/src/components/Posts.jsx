import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { styled } from 'styled-components';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {useState, useEffect} from 'react'

function Posts() {


    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8800/posts')
        .then(response => {
            setData(response.data)
        })
    .catch(() => {

    });
    }, []);

    const [formData, setFormData] = useState({
        sender: '',
        text: '',
    })

    const handleChange = (event) => {
        setFormData({

            ...formData,
            [event.target.name] : event.target.value,

        })
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8800/posts', formData)
        .then(() => {
           

        })
        .catch(() => {
            //Handle errors
        })
    };



  return (
    <div>
        <Group>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Title>
        <Form.Label>Inlägg</Form.Label>
        </Title>
        <Wrap>
        <Form.Control name="text" as="textarea" rows={3} style={{ "background-color": '#f8f8f8' }} placeholder="Type here..." onChange={handleChange}/>
        </Wrap>
      </Form.Group>
      <ButtonGroup>
      <Button variant="primary" type="submit">
        Skicka
      </Button>
      </ButtonGroup>
    </Form>

<CardGroup>

{data.map(item => (
                <div key={item.id}>
                    <CardI>
                    <Card>
      <Card.Body>{item.text}</Card.Body>
    </Card>
    </CardI>
                    </div>
            ))}

    </CardGroup>
    </Group>
    </div>
  )
}

export default Posts

const Group = styled.div`
margin-right: 100px;
height: 500px;
position: relative;
top: 200px;
left: 620px;

@media screen and (max-width: 1180px) {
left: 600px;

}

`

const CardGroup = styled.div`
width: 80vh;
margin-right: auto;
position: relative;
top: 90px;
`
const CardI = styled.div`
margin-top: 60px;
`

const Wrap = styled.div`
width: 80vh;

::placeholder {
    color: black;
    font-weight: 500;
}

`

const ButtonGroup = styled.div`
position: relative;
top: 20px;
left: 410px;
`

const Title = styled.h1`
position: relative;
top: -20px;
font-size: 35px;
`
