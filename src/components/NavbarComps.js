import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Button } from 'react-bootstrap';
import bicilogo from '../images/bicicleta-logo.jpg';
import '../pages/css/menu.css';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class NavbarComps extends Component {

    //al cerrar sesion, saca los datos del usuario de ispeccion>>consola
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    render() {
        
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <img src={bicilogo} class="logo" alt = "logo de la bici"/>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action2">Bicicletas</Nav.Link>

                            </Nav>
                            <Nav 
                                className="me-auto my-2 my-lg-0 nav_carrito"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                
                                <NavDropdown title="🛒" id="navbarScrollingDropdown">
                                    <Nav.Link href="#" >

                                    </Nav.Link>
                                    <NavDropdown.Item href="#action3">Ver Carrito</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                       Comprar Ahora
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <button onClick={()=>this.cerrarSesion()} class="cerrar_sesion"> Cerrar Sesion</button>

                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}