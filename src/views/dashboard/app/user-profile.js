import React,{useState} from 'react'
import {Row, Col, Container, Nav, Tab, Button, Modal } from 'react-bootstrap'
import Card from '../../../components/Card'

// images
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/user/11.png'
import img5 from '../../../assets/images/icon/10.png'
import user1 from '../../../assets/images/user/1.jpg'

const UserProfile =() =>{
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

  return(
      <>
         <Container>
            <Row>
               <Col sm={12}>
                  <Card>
                     <Card.Body className=" profile-page p-0">
                        <div className="profile-header">
                           <div className="position-relative">
                              <img src={img1} alt="profile-bg" className="rounded img-fluid"/>
                           </div>
                           <div className="user-detail text-center mb-3">
                              <div className="profile-img">
                                 <img src={img2} alt="profile-img1" className="avatar-130 img-fluid" />
                              </div>
                              <div className="profile-detail">
                                 <h3>User Name</h3>
                              </div>
                           </div>
                          
                        </div>
                     </Card.Body>
                  </Card>
               </Col>
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="card p-0">
                     <div className="card-body p-0">
                        <div className="user-tabing">
                           <Nav as="ul" variant="pills" className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0 ">
                                 <Nav.Link  href="#pills-timeline-tab"  eventKey="first" role="button" className=" text-center p-3">Timeline</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-about-tab" eventKey="second" role="button" className="text-center p-3">About</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-friends-tab"  eventKey="third" role="button" className="text-center p-3">Community</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-photos-tab"  eventKey="forth" role="button" className="text-center p-3">Electorate</Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </div>
                  </div>
                  <Col sm={12}>
                     <Tab.Content>
                        <Tab.Pane eventKey="first" >
                           <Card.Body className=" p-0">
                              <Row>
                                 <Col lg={8}>
                                    <Card id="post-modal-data" >
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Create Post</h4>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <div className="d-flex align-items-center">
                                             <div className="user-img">
                                                <img src={user1} alt="userimg" className="avatar-60 rounded-circle"/>
                                             </div>
                                             <form className="post-text ms-3 w-100 " onClick={handleShow}>
                                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                             </form>
                                          </div>
                                          <hr/>
                                       </Card.Body>
                                       <Modal show={show} onHide={handleClose} size="lg">
                                        <Modal.Header className="d-flex justify-content-between">
                                            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                            <button type="button" className="btn btn-secondary"  onClick={handleClose} ><i className="ri-close-fill"></i></button>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img">
                                                    <img src={img5} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <form className="post-text ms-3 w-100" action="">
                                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                                </form>
                                            </div>
                                            <hr/>

                                            <hr/>
                                            
                                            <Button variant="primary" className="d-block w-100 mt-3">Post</Button>
                                        </Modal.Body>
                                    </Modal>
                                    </Card>
                                    <Card>
                                       
									{/*USER POST LIST HERE*/}

                                    </Card>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="second">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="about1">
                              <Card>
                                 <Card.Body>
                                    <Row>
                                       <Col md={9} className=" ps-4">
                                          
                                                <h4 className="mt-3">Basic Information</h4>
                                                <hr/>
                                                <Row>
                                                   <div className="col-3">
                                                      <h6>Age Range</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">25-30</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Pronouns</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">She/Her</p>
                                                   </div>
                                                   <div className="col-3">
                                                      <h6>Causes I Care About</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">LGBTQ, Climate Change, Gender Equality</p>
                                                   </div>
                                                </Row>

                                       </Col>
                                    </Row>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="third" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="all-friends">
                              <Card>
                                 <Card.Body>
                                    <h2>Friends</h2>
                                    <div className="friend-list-tab mt-2">
                                       <Nav variant="pills" className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                          <Nav.Item>
                                             <Nav.Link  href="#pill-all-friends" eventKey="all-friends">Your Community</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-recently-add" eventKey="recently-add">Electorate Community</Nav.Link>
                                          </Nav.Item>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="all-friends">
                                             <Card.Body className="p-0">
                                             {/*ADD FULL FRIENDS LIST HERE*/}   
                                             </Card.Body>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="recently-add" >
                                             <div className="card-body p-0">
											 {/*ADD ELECTORATE FRIENDS LIST HERE*/}
                                             </div>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="forth" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
                              <Card>
                                 <Card.Body>
                                    <h2>Your Electorate</h2>
                                    <div className="friend-list-tab mt-2">
									{/*ADD ELECTORATE PAGE HERE*/}  
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane>
                     </Tab.Content>
                  </Col>
               </Tab.Container>
            </Row>
         </Container>   
      </>
  )

}

export default UserProfile;