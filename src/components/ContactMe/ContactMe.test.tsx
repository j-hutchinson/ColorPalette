import { shallow } from 'enzyme';
import ContactMe from './component';

describe('ContactMe component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<ContactMe />);

        expect(wrapper).toMatchSnapshot();
    });
});