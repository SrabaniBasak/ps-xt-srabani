import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import FiltersComponent from './Filters';
import LaunchListComponent from './LaunchList';

class HomeComponent extends React.PureComponent {
    
    render() {
        return (            
            <Container fluid={true}>
                <Row>
                    <Col xs="12" md="2">
                        <FiltersComponent/>
                    </Col>
                    <Col xs="12" md="10">
                        <LaunchListComponent />
                    </Col>
                </Row>
            </Container>     
        )
    }
}

export default HomeComponent