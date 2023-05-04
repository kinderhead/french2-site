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
                        <Navbar.Brand>MSSM French</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav navbarScroll>
                            <NavDropdown title="Les pronoms objets">
                                <LinkContainer to="/pronoms-description">
                                    <Nav.Link>Description</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/pronoms-oral-1">
                                    <Nav.Link>Written oral 1</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/pronoms-written-1">
                                    <Nav.Link>Written activity 1</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/pronoms-written-key">
                                    <Nav.Link>Written activities key</Nav.Link>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/litteraires">
                                <Nav.Link>Les éléments littéraires</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Verb tenses/moods">
                                <NavDropdown drop="end" title="Le passé composé avec avoir" className="fix-nav">
                                    <LinkContainer to="/passe-avoir">
                                        <NavDropdown.Item>Description</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/passe-avoir-oral">
                                        <NavDropdown.Item>Oral activity</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/passe-avoir-written-1">
                                        <NavDropdown.Item>Written activity 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/passe-avoir-written-2">
                                        <NavDropdown.Item>Written activity 2</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/passe-avoir-written-key">
                                        <NavDropdown.Item>Written activities key</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/passe-etre">
                                    <NavDropdown.Item>Le passé composé avec être</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/imparfait">
                                    <NavDropdown.Item>L’imparfait</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown drop="end" title="Le conditionnel" className="fix-nav">
                                    <LinkContainer to="/conditionnel">
                                        <NavDropdown.Item>Description</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/conditionnel-written-1">
                                        <NavDropdown.Item>Written activity 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/conditionnel-written-2">
                                        <NavDropdown.Item>Written activity 2</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/subjonctif">
                                    <NavDropdown.Item>Le subjonctif</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown drop="end" title="Le futur simple" className="fix-nav">
                                    <LinkContainer to="/futur-description">
                                        <NavDropdown.Item>Description</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-written-1">
                                        <NavDropdown.Item>Written activity 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-written-2">
                                        <NavDropdown.Item>Written activity 2</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-oral-1">
                                        <NavDropdown.Item>Oral activity 1</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-oral-2">
                                        <NavDropdown.Item>Oral activity 2</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-oral-3">
                                        <NavDropdown.Item>Oral activity 3</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-cheatsheet">
                                        <NavDropdown.Item>Cheatsheet</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-test">
                                        <NavDropdown.Item>Test</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-written-quiz">
                                        <NavDropdown.Item>Written quiz</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/futur-written-key">
                                        <NavDropdown.Item>Written activities key</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </NavDropdown>
                            {/* <NavDropdown title="Tools">
                                <LinkContainer to="/test-maker">
                                    <NavDropdown.Item>Test maker</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown> */}
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