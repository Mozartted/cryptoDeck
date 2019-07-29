import React from 'react';
import {shallow} from 'enzyme';
// import Button from './Button';
import Dashboard from "../views/layouts/dashboard"
describe('Dashboard Screens', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Dashboard/>)
            expect(component).toMatchSnapshot()
        });
    });
});