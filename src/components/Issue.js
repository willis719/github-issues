import React from 'react'  
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import ListGroup from 'react-bootstrap/ListGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'




const Issue = (props) => {
    return (
        <div>
            <Container fluid >
                <Row>
                    <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <FontAwesomeIcon style={{marginRight: '1%'}} icon ={faExclamationCircle} />
                            <a className="title" href='a'>{props.issue.title}</a>
                            {props.issue.labels.map(label => {
                                return(
                                    <a className='label' size='sm' key={label.node_id} href='a'>{label.name}</a>
                                )
                            })}
                            <div>
                                <small>#{props.issue.number} created on {props.issue.created_at.slice(0,-10)} by {props.issue.user.login}</small>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Issue;