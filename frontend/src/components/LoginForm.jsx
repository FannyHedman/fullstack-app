import Form from 'react-bootstrap/Form';
import styled from "styled-components"

function LoginForm() {
  return (
<div className="grid-container">

  <div className="text-column">
    <h2>GitTogether <br></br>- Where Hearts Merge!</h2>
    <br></br>
    <p>GitTogether is your go-to destination for finding love and meaningful connections. Join our vibrant community of like-minded individuals, ready  to embark on a romantic journey alongside you. Experience the thrill of new connections, <br></br>engaging conversations, and unforgettable experiences</p>
<p>Start your adventure with GitTogether today,<br></br> and let love guide your path!</p>
  </div>

  <FormColumn>
  <Form>
    <div className="input-field">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Form.Control type="email" placeholder="alice@live.se" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Godkänn villkoren" />
      </Form.Group>
      <ButtonForm variant="primary" type="submit">
        Submit
      </ButtonForm>
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
