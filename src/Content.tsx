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
            <Navbar bg="light" expand="lg" sticky="top">
                <Container fluid>
                    <LinkContainer to="/french2-site">
                        <Navbar.Brand>MSSM French 211</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/french2-site/directs-indirects">
                                <Nav.Link>Les pronoms objets directs et indirects</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Verb tenses/moods">
                                <NavDropdown drop="end" title="Le passé composé avec avoir" className="fix-nav">
                                    <LinkContainer to="/french2-site/passé-composé-avoir-written">
                                        <NavDropdown.Item>Written activity</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/french2-site/passé-composé-avoir-written-key">
                                        <NavDropdown.Item>Written activity - Key</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/french2-site/passé-composé-être">
                                    <NavDropdown.Item>Le passé composé avec être</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/french2-site/imparfait">
                                    <NavDropdown.Item>L’imparfait</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/french2-site/conditionnel">
                                    <NavDropdown.Item>Le conditionnel</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/french2-site/subjonctif">
                                    <NavDropdown.Item>Le subjonctif</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/french2-site/futur">
                                    <NavDropdown.Item>Le futur simple</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/french2-site/funnies">
                                <Nav.Link>Funny images</Nav.Link>
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