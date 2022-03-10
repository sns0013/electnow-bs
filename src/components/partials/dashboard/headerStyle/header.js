import React from 'react'
import { Navbar, Dropdown, Nav, Form, Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'

//image
import logo from '../../../../assets/images/logo.png'
import user1 from '../../../../assets/images/user/1.jpg'
import Button from '@restart/ui/esm/Button'

const Header = () => {

    return (
        <>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <Navbar expand="lg" variant="light" className="p-0">
                        <div className="iq-navbar-logo d-flex justify-content-between">
                            <Link to="/">
                                <Image src={logo} className="img-fluid" alt=""/>
                                <span>ElectNow</span>
                            </Link>
                        </div>
                        <div className="iq-search-bar device-search">
                            <Form action="#" className="searchbox">
                                <Link className="search-link" to="#">
                                    <i className="ri-search-line"></i>
                                </Link>
                                <input type="text" className="text search-input" placeholder="Search here..."/>
                            </Form>
                        </div>
                        <Navbar.Toggle as="button">
                            <i className="ri-menu-3-line"></i>
                        </Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav as="ul" className="ms-auto navbar-list">
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="/" as={Button} className="d-flex align-items-center" variant="search-toggle">
                                        <i className="ri-home-line"></i>
                                    </Dropdown.Toggle>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                                        <i className="ri-group-line"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop sub-drop-large" aria-labelledby="group-drop">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="d-flex justify-content-between bg-primary">
                                                <div className="header-title">
                                                    <h5 className="mb-0 text-white">Friend Request</h5>
                                                </div>
                                            </Card.Header> 
											<Card.Body className="p-0">
												{/*ADD FREND REQUEST LIST HERE*/}  
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                                        <i className="ri-notification-4-line"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop" aria-labelledby="group-drop">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="d-flex justify-content-between bg-primary">
                                                <div className="header-title bg-primary">
                                                    <h5 className="mb-0 text-white">All Notifications</h5>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="p-0">
                                            {/*ADD NOTIFICATION LIST HERE*/}    
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">
                                    <Dropdown.Toggle href="#" as={Button} variant="search-toggle">
                                        <i className="ri-mail-line"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="sub-drop dropdown-menu" aria-labelledby="mail-drop">
                                        <Card className="shadow-none m-0">
                                            <Card.Header className="d-flex justify-content-between bg-primary">
                                                <div className="header-title bg-primary">
                                                    <h5 className="mb-0 text-white">All Message</h5>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="p-0 ">
											{/*ADD MESSAGE LIST HERE*/}
                                            </Card.Body>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown as="li" className="nav-item">

                                    <Dropdown.Toggle href="/dashboard/app/profile" as={Button} bsPrefix="d-flex align-items-center search-toggle" >
									   <Image src={user1} className="img-fluid rounded-circle me-3" alt="user"/>
                                        <div className="caption">
                                            <h6 className="mb-0 line-height">Bni Cyst</h6>
                                        </div>
                                    </Dropdown.Toggle>

                                    
                                </Dropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Header
