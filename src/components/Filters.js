import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchLaunchList} from '../store/actions/launchAction';

class FiltersComponent extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            years: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
            queryParam: {
                launch_year: null,
                launch_success: null,
                land_success: null
            }
        }
    }

    handleFilter(key, value) {
        const queryParam = {...this.state.queryParam}
        queryParam[key] = value
        this.setState({
            queryParam
        }, () => {this.props.fetchLaunchList(queryParam)})
        
    }

    render() {
        const { years, queryParam } = this.state

        return (            
            <Container fluid={true} className="filter__container">
                <Row>
                    <Col>
                        <p>Sucessful Year</p>
                        <Row>
                            
                            {
                                years.map((year, index) => <Col xs="6" key={index}><p className={`filter-params ${_.isEqual(queryParam.launch_year, year) ? 'active' : 'inactive' }`} onClick={this.handleFilter.bind(this, 'launch_year', year)}>{year}</p></Col>)
                            }
                            
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Sucessful Launch</p>
                        <Row>
                            <Col><p className={`filter-params ${!_.isNull(queryParam.launch_success) && queryParam.launch_success ? 'active' : '' }`} onClick={this.handleFilter.bind(this, 'launch_success', true)}>True</p></Col>
                            <Col><p className={`filter-params ${!_.isNull(queryParam.launch_success) && !queryParam.launch_success ? 'active' : '' }`} onClick={this.handleFilter.bind(this, 'launch_success', false)}>False</p></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Sucessful Land</p>
                        <Row>
                            <Col><p className={`filter-params ${!_.isNull(queryParam.land_success) && queryParam.land_success ? 'active' : '' }`}  onClick={this.handleFilter.bind(this, 'land_success', true)}>True</p></Col>
                            <Col><p className={`filter-params ${!_.isNull(queryParam.land_success) && !queryParam.land_success ? 'active' : '' }`}  onClick={this.handleFilter.bind(this, 'land_success', false)}>False</p></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>     
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         launch: state.launchReducer
//     }
// }

const mapStateToDispatch = {
    fetchLaunchList
}
export default connect(null, mapStateToDispatch)(FiltersComponent)