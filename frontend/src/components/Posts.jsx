import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { styled } from 'styled-components';

function Posts() {
  return (
    <div>
        <Group>
        <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Title>
        <Form.Label>Inlägg</Form.Label>
        </Title>
        <Wrap>
        <Form.Control as="textarea" rows={3} style={{ "background-color": '#f8f8f8' }} placeholder="Type here..."/>
        </Wrap>
      </Form.Group>
      <ButtonGroup>
      <Button variant="primary" type="submit">
        Skicka
      </Button>
      </ButtonGroup>
    </Form>
    </Group>
    </div>
  )
}

export default Posts

const Group = styled.div`
height: 500px;
position: relative;
top: 200px;
left: 600px;

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
