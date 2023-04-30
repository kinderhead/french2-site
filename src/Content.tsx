import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import './Content.css'
import { PropsWithChildren } from 'react';

export default function Content(props: PropsWithChildren<object>)
{
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <LinkContainer to="/french2-site">
                        <Navbar.Brand>MSSM French 211</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <LinkContainer to="first">
                                <Nav.Link>Topic 1</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="content-body">
                {props.children}
            </div>
        </>
    );
}