import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
class Avatar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <FontAwesome name='user' />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;