import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from './HomeComponent';
import {findByTestAtrr} from '../utilities/helpers';

describe('Home Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<HomeComponent />);
    })
    
    it('Should render a FiltersComponent', () => {    
        const filters = findByTestAtrr(component, 'FiltersComponent')
        expect(filters.length).toBe(1)
    })

    it('Should render a LaunchListComponent', () => {    
        const list = findByTestAtrr(component, 'LaunchListComponent')
        expect(list.length).toBe(1)
    })
    
});
