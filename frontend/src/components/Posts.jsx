import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



function Posts() {

    const { id } = useParams()
    const [data, setData] = useState([])
    const [account, setAccount] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8800/posts')
        .then(response => {
            setData(response.data)
        })
    .catch(() => {

    });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8800/accounts')
        .then(response => {
            setAccount(response.data)
        })
    .catch(() => {

    });
    }, []);

    console.log(account)


    const [formData, setFormData] = useState({
        sender: id,
        text: ''
    })

    const handleChange = (event) => {
        setFormData({

            ...formData,
            [event.target.name] : event.target.value

        })
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8800/posts', formData)
        .then(() => {
        window.location.reload()

        })
        .catch(() => {
            //Handle errors
        })
    };



const handleClickDelete= async (id)=>{
    try{
    await axios.delete(`http://localhost:8800/posts/${id}` )
    window.location.reload()
}catch (err){
    console.error(err)
}}

  return (

    <div>
        <Group>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Title>
        <Form.Label>Post</Form.Label>
        </Title>
        <Wrap>
        <Form.Control name="text" as="textarea" rows={3} style={{ "background-color": '#f8f8f8' }} placeholder="Type here..." onChange={handleChange}/>
        </Wrap>
      </Form.Group>
      <ButtonGroup>
      <Button variant="primary" type="submit">
        Send
      </Button>
      </ButtonGroup>
    </Form>


<CardGroup>
<h2>Feed</h2>
{data.map(item => (
                <div key={item.id}>
                <CardI>
                    <p>{item.name}</p>
                <Card>
      <Card.Body className="post-text">{item.text}
    </Card.Body>

    </Card>
    <CardWrap>
    <FontAwesomeIcon className="icon-btn-trash" onClick={()=>handleClickDelete(item.id)} icon={faTrashAlt} size="xs"/>
    </CardWrap>
    </CardI>
    </div>
    ))}

    </CardGroup>
    </Group>
    </div>
  )
}

export default Posts

const CardWrap=styled.div`
display:flex;
justify-content: end;
margin-top: 15px;
`

const Group = styled.div`
margin-right: 100px;
height: 500px;
position: relative;
bottom: 400px;
left: 620px;


@media screen and (max-width: 1190px) {
left: 600px;

}

@media screen and (max-width: 1140px) {
left: 500px;

}

@media screen and (max-width: 920px) {
left: 440px;

}

@media screen and (max-width: 787px) {
margin-bottom: 300px;
top: 200px;
left: 170px;

}

@media screen and (max-width: 572px) {
top: 200px;
left: 90px;


}

@media screen and (max-width: 474px) {
    top: 200px;
left: 80px;

}

@media screen and (max-width: 437px) {
    top: 200px;
left: 80px;

}

`

const CardGroup = styled.div`
width: 80vh;
margin-right: auto;
position: relative;
top: 90px;

@media screen and (max-width: 1094px) {
width: 74vh;

}

@media screen and (max-width: 920px) {
width: 70vh;

}

@media screen and (max-width: 830px) {
width: 60vh;

}

@media screen and (max-width: 780px) {
width: 70vh;

}



@media screen and (max-width: 414px) {
    width: 37vh;

}




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

@media screen and (max-width: 1094px) {
width: 74vh;

}

@media screen and (max-width: 920px) {
width: 70vh;

}

@media screen and (max-width: 830px) {
width: 60vh;

}

@media screen and (max-width: 780px) {
width: 70vh;

}

@media screen and (max-width: 414px) {
    width: 37vh;

}

`

const ButtonGroup = styled.div`
position: relative;
top: 20px;
left: 410px;

@media screen and (max-width: 1094px) {
left: 300px;

}

@media screen and (max-width: 920px) {
left: 200px;

}
`

const Title = styled.h1`
position: relative;
top: -20px;
font-size: 35px;
`
