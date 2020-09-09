import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchLaunchList} from '../store/actions/launchAction';

class LaunchListComponent extends React.PureComponent {
    componentDidMount() {
        this.props.fetchLaunchList()
    }

    render() {
        const { 
            launch: { 
                lists = [] 
            } 
        } = this.props
        
        return (            
            <Container fluid={true} className="launch__list__container">
                <Row>                    
                    {
                        lists.map((list, index) => <Col xs="12" md="3" key={index}>
                                                        <div className="launch__list__card">
                                                            <img src={list.links.mission_patch_small} alt={list.flight_number} className="img-responsive"/>
                                                            <h6 className="text-truncate">{`${list.mission_name} #${list.flight_number}`}</h6>
                                                            <p>Launch Year: <span>{list.launch_year}</span></p>
                                                            <p>Successful Launch: <span>{list.launch_success ? 'True' : 'False'}</span></p>
                                                            <p>Successful landing: <span>{list.launch_landing ? 'True' : 'False'}</span></p>
                                                        </div>
                                                    </Col>
                        )
                    }                    
                </Row>
            </Container>     
        )
    }
}

const mapStateToProps = (state) => {
    return {
        launch: state.launchReducer
    }
}

const mapStateToDispatch = {
    fetchLaunchList
}
export default connect(mapStateToProps, mapStateToDispatch)(LaunchListComponent)