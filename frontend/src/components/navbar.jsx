
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div>

<Wrap>
<Navbar>
        <Container>

          <Navbar.Brand className='brand'>
            <Title>Datingapp</Title>
            </Navbar.Brand>

            <Link id="NavLink" to={'/'}>
            <Button variant="outline-dark">

                Logga ut

                </Button>
                </Link>
        </Container>
      </Navbar>
      </Wrap>

    </div>
  )
}

export default navbar


const Wrap = styled.div`
background: #E9CCCC;
`

const Title = styled.div`
font-weight: 300;
font-size: 25px;
color: #000000;
`
