import { shallow } from 'enzyme';
import Socials from './component';

describe('Socials component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Socials />);

        expect(wrapper).toMatchSnapshot();
    });
});