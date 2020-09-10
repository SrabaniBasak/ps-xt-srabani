import React from 'react';
import {Container, Row, Col} from 'reactstrap';

class FooterComponent extends React.PureComponent {
    render() {
        return (
            <header>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <p><span className="font-weight-bold">Developed By: </span>Srabani Basak</p>
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </header>  
        )
    }
}

export default FooterComponent