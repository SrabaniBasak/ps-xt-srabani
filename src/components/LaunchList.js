import React from 'react';
import {Container, Row, Col, Spinner} from 'reactstrap';
import {func, shape, bool, array} from 'prop-types';
import {connect} from 'react-redux';
import {fetchLaunchList} from '../store/actions/launchAction';

class LaunchListComponent extends React.PureComponent {
    componentDidMount() {
        this.props.fetchLaunchList()
    }

    render() {
        const { 
            launch: { 
                lists = [],
                loading = true
            } 
        } = this.props
        
        return ( 
            <main className="launch__list__container">     
                {
                    !loading &&      
                    <Container fluid={true}>
                        <Row>                    
                            {
                                lists.map((list, index) => <Col sm="12" md="4" lg="3" key={index}>
                                                                <div className="launch__list__card">
                                                                    <div className="image__wrapper">
                                                                        <img 
                                                                            src={list.links.mission_patch_small} 
                                                                            alt={list.flight_number} 
                                                                            className="img-fluid"
                                                                        />
                                                                    </div>
                                                                    <p className="font-weight-bold text-truncate">
                                                                        {`${list.mission_name} #${list.flight_number}`}
                                                                    </p>
                                                                    <p>
                                                                        <span className="font-weight-bold">Launch Year: </span>
                                                                        {list.launch_year}
                                                                    </p>
                                                                    <p>
                                                                        <span className="font-weight-bold">Successful Launch: </span>
                                                                        {list.launch_success ? 'True' : 'False'}
                                                                    </p>
                                                                    <p>
                                                                        <span className="font-weight-bold">Successful landing: </span>
                                                                        {list.launch_landing ? 'True' : 'False'}
                                                                    </p>
                                                                </div>
                                                            </Col>
                                )
                            } 
                        </Row>
                    </Container>
                }

                {
                    loading &&
                    
                    <div className="spinner__container">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                }      
            </main>
        )
    }
}

LaunchListComponent.propTypes = {
    fetchLaunchList: func,
    launch: shape({
        list: array,
        loading: bool
    })
};

const mapStateToProps = (state) => {
    return {
        launch: state.launchReducer
    }
}

const mapStateToDispatch = {
    fetchLaunchList
}
export default connect(mapStateToProps, mapStateToDispatch)(LaunchListComponent)