import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg = "transparent"  data-bs-theme="red">
      <Container fluid>
        <Navbar.Brand href="#">FastTrain.com
          <img className = "nav-logo" src = "https://png.pngtree.com/png-clipart/20201216/ourlarge/pngtree-streamlined-train-clip-art-png-image_2569336.jpg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container-fluid justify-content-around"
            style={{ maxHeight: '200px' }}
          >
            <Nav.Link className = "nav-text" href="#action1">Home</Nav.Link>
            <Nav.Link className = "nav-text" href="#action2">Book Now</Nav.Link>
            <Nav.Link className = "nav-text" href="#action2">Track Train</Nav.Link>
            <Nav.Link className = "nav-text" href="#action2">Help</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for Trains"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;