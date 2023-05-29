import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
  return (
<div className="grid-container">
  <div className="text-column">
    <h2>GitTogether - Where Hearts Merge!
</h2>
    <p>GitTogether is your go-to destination for finding love and meaningful connections. Join our vibrant community of like-minded individuals,<br></br> ready  to embark on a romantic journey alongside you. Experience the <br></br> thrill of new connections, engaging conversations, and unforgettable experiences</p>
<p>Start your adventure with GitTogether today, and let love guide your path!</p>
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
