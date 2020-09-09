import React from 'react';
import {Container, Row, Col} from 'reactstrap';

class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <header>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <h1>SpaceX Launch Program</h1>
                        </Col>
                    </Row>
                </Container>
            </header>  
        )
    }
}

export default HeaderComponent