import { shallow } from 'enzyme';
import React from 'react';
import App from './component';

describe('App component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });
});