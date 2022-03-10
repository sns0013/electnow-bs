import React, {useState}  from 'react'
import { Row, Col, Container, Tooltip} from 'react-bootstrap'
import Card from '../../components/Card'
//image
import user1 from '../../assets/images/user/1.jpg'


const Index = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} className="row m-0 p-0">
                        <Col sm={12} >
                            <Card id="post-modal-data" className="card-block card-stretch card-height">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Create Post</h4>
                                    </div>
                                </div>
                                <Card.Body >
                                    <div className="d-flex align-items-center">
                                        <div className="user-img">
                                            <img src={user1} alt="user1" className="avatar-60 rounded-circle"/>
                                        </div>
                                        <form className="post-text ms-3 w-100 " >
                                            <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                        </form>
                                    </div>
                                    <hr/>
                                    <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                        
                                        <li className="me-3">
                                           <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                                        </li>
                                    </ul>
                                </Card.Body>
                                
                            </Card>
                        </Col>
                        <Col sm={12}>
							{/*POST LIST HERE*/}
                        </Col>
                    </Col>                    
                </Row>
            </Container>                
        </>
    )
}

export default Index
