import { shallow } from 'enzyme';
import Experience from './component';

describe('Experience component', () => {
    test('component matches snapshot', () => {
        expect.assertions(1);

        const wrapper = shallow(<Experience />);

        expect(wrapper).toMatchSnapshot();
    });
});