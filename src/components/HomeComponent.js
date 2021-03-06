import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import loadable from '@loadable/component';

const FiltersComponent = loadable(() => import('./Filters'));
const LaunchListComponent = loadable(() => import('./LaunchList'));

class HomeComponent extends React.PureComponent {
    
    render() {
        return (            
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md="3" lg="2">
                        <FiltersComponent data-test="FiltersComponent"/>
                    </Col>
                    <Col sm="12" md="9" lg="10">
                        <LaunchListComponent  data-test="LaunchListComponent"/>
                    </Col>
                </Row>
            </Container>     
        )
    }
}

export default HomeComponent