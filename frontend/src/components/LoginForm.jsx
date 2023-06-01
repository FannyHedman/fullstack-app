import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function LoginForm() {

    const [account, setAccount]=useState({
    id: "",
    username: "",
    password:""
    })



    const [error,setError]=useState(false)
    const navigate=useNavigate()

    const handleChange= (e)=> {
        setAccount((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
           const response= await axios.post(`http://localhost:8800/accounts`, account)
           const id= response.data.id
           navigate(`/profile/${id}`)
        }catch(err){
            console.log(err)
            setError(true)
        }
    }

  return (

  <div className="grid-container">
  <div className="text-column">
    <h2>GitTogether <br></br>- Where Hearts Merge!</h2>
    <br></br>
    <p>GitTogether is your go-to destination for finding love and meaningful connections. Join our vibrant community of like-minded individuals, ready  to embark on a romantic journey alongside you. Experience the thrill of new connections, <br></br>engaging conversations, and unforgettable experiences</p>
    <p>Start your adventure with GitTogether today,<br></br> and let love guide your path!</p>
  </div>

  <FormColumn>
  <Form className="login">
    <div className="input-field">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} name="username" type="email" placeholder="alice@live.se" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} name="password" type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Godkänn villkoren" />
      </Form.Group>
      <ButtonForm onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </ButtonForm> {error && "Account does not exist, try again!"}
      </div>
    </Form>
    </FormColumn>
  </div>


  );
}

const ButtonForm= styled.button`
    font-size: 14px;
    padding: 12px 13px;
    background-color: #f3f3ee;
    border-radius: 10px;
    `
const FormColumn=styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 30px;
    width:80%
    `

export default LoginForm;
