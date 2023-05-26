import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (

<div className="grid-container">
  <div className="text-column">
    <h2>Heading</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus id molestiae non dicta provident sed ipsum saepe voluptatem rerum, assumenda exercitationem laudantium nobis? Et, ipsum unde, maiores totam aliquid ab fugiat animi quam voluptatem corrupti quos accusamus dolore explicabo placeat voluptatibus at doloremque consequatur ipsam.</p>
<p>Lorem ipsum dolor sit amet.</p>
  </div>

  <div className="form-column">
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
      <Button className="form-submit" variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
  </div>


  );
}

export default LoginForm;
