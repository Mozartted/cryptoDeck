import React from 'react';
import {shallow} from 'enzyme';
// import Button from './Button';
import Dashboard from "../views/layouts/dashboard"
describe('Dashboard Screens', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const props = {
                 tokens: {
                    data: [],
                    status: {},
                },
                loading: false,
            }
            const component = shallow(<Dashboard 
                tokens={props.tokens} 
                loading={props.loading}  
                getTokens={(start) => console.log(start)}
                />)
            expect(component).toMatchSnapshot()
        });
    });
});