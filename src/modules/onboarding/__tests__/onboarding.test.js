import React from 'react';
import {shallow} from 'enzyme';
// import Button from './Button';
import Onboarding from "../views/layouts/onboarding"
describe('Onboarding Screens', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<Onboarding/>)
            expect(component).toMatchSnapshot()
        });
    });
});