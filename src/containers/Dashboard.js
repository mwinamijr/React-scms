import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap';

import { listUsers } from './../redux/actions/userActions';

function Dashboard() {
  
  const dispatch = useDispatch()

  //const userList = useSelector(state => state.userList)
  //const { loading, error, users } = userList
  
  useEffect(() => {
    dispatch(listUsers())
    
}, [dispatch,])

  return (
    <div>
      <h1>Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Header>
            <Link to='/sis/students'>Students</Link>
            </Card.Header>
            <Card.Body>12</Card.Body>
            <Card.Footer>
            <Link to="/sis/students/add" className='btn btn-light my-3'>Add Student</Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Teachers</Card.Header>
            <Card.Body>12</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Link to='/users'>Users</Link>
            </Card.Header>
            <Card.Body>12
            
            </Card.Body>
            <Card.Footer>
              <Link to="/users/add" className='btn btn-light my-3'>Add User</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
