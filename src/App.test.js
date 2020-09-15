import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {findByTestAtrr} from './utilities/helpers';

describe('App Component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<App />);
    })
    
    it('Should render a Header', () => {    
        const header = findByTestAtrr(component, 'header')
        expect(header.length).toBe(1)
    })

    it('Should render a Main Content', () => {    
        const mainContent = findByTestAtrr(component, 'mainContent')
        expect(mainContent.length).toBe(1)
    })

    it('Should render a Footer', () => {    
        const footer = findByTestAtrr(component, 'footer')
        expect(footer.length).toBe(1)
    })
    
});
