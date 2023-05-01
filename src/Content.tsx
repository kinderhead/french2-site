import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

import './Content.css'
import { PropsWithChildren } from 'react';
import { NavDropdown } from 'react-bootstrap';

export default function Content(props: PropsWithChildren<object>) {
    return (
        <>
            <Navbar bg="light" expand="xl" sticky="top">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>MSSM French 211</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" navbarScroll>
                            <LinkContainer to="/directs-indirects">
                                <Nav.Link>Les pronoms objets directs et indirects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/litteraires">
                                <Nav.Link>Littérature et les éléments littéraires</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Verb tenses/moods">
                                <NavDropdown drop="end" title="Le passé composé avec avoir" className="fix-nav">
                                    <LinkContainer to="/passe-avoir-written">
                                        <NavDropdown.Item>Written activity</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/passe-avoir-written-key">
                                        <NavDropdown.Item>Written activity - Key</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/passe-etre">
                                    <NavDropdown.Item>Le passé composé avec être</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/imparfait">
                                    <NavDropdown.Item>L’imparfait</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/conditionnel">
                                    <NavDropdown.Item>Le conditionnel</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/subjonctif">
                                    <NavDropdown.Item>Le subjonctif</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/futur">
                                    <NavDropdown.Item>Le futur simple</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <LinkContainer to="/funnies">
                            <Nav.Link>Funny images</Nav.Link>
                        </LinkContainer>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="content-body">
                {props.children}
            </div>
        </>
    );
}