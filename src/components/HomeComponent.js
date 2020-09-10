import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import FiltersComponent from './Filters';
import LaunchListComponent from './LaunchList';

class HomeComponent extends React.PureComponent {
    
    render() {
        return (            
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md="3" lg="2">
                        <FiltersComponent/>
                    </Col>
                    <Col sm="12" md="9" lg="10">
                        <LaunchListComponent />
                    </Col>
                </Row>
            </Container>     
        )
    }
}

export default HomeComponent